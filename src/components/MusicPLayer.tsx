import React, { useState, useEffect } from "react";
import DropdownButton from "./DrowdownButton";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import Logo from "./Logo";

interface Track {
  id: number;
  name: string;
  artists: string;
  duration: number;
  url: string;
  preview_url: string;
  album: {
    images: string[];
  };
}

const MusicPlayer: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio] = useState(new Audio());
  const [start, setStart] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fullstacksoundwave.herokuapp.com/track/getAll"
        );
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const playTrack = (track: Track) => {
    const index = tracks.indexOf(track);
    setCurrentTrack(track);
    audio.src = track.preview_url;
    audio.play();
    setIsPlaying(true);
    setCurrentIndex(index);
    console.log(track.album.images[0]);
  };

  const pauseTrack = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const visibleTracks = tracks
    .filter((track) => {
      const nameChars = track.name.toLowerCase().split("");
      const searchTermChars = searchTerm.toLowerCase().split("");
      return searchTermChars.every((char) => nameChars.includes(char));
    })
    .slice(start, start + 4);

  const playNextTrack = () => {
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack?.id
    );
    if (currentTrackIndex !== -1 && currentTrackIndex + 1 < tracks.length) {
      setCurrentTrack(tracks[currentTrackIndex + 1]);
      audio.src = tracks[currentTrackIndex + 1].preview_url;
      audio.play();
      setIsPlaying(true);
    }
  };

  const playPreviousTrack = () => {
    const currentTrackIndex = tracks.findIndex(
      (track) => track.id === currentTrack?.id
    );
    if (currentTrackIndex !== -1 && currentTrackIndex > 0) {
      setCurrentTrack(tracks[currentTrackIndex - 1]);
      audio.src = tracks[currentTrackIndex - 1].preview_url;
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-4 lg:grid-cols-4  lg:gap-4 ">
        <div className="col-span-4 lg:col-span-1 border justify-center lg:justify-end flex items-center">
          <Logo />
        </div>
        <div className=" col-span-3 lg:col-span-2 items-center flex justify-center ">
          <p className=" rounded p-4 w-full text-center">
            {" "}
            <input
              type="text"
              placeholder="Search for a wavetrack"
              className="p-2 border rounded-md lg:w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </p>
        </div>
        <div className="   col-span-1 lg:col-span-1  text-white p-4 rounded items-center flex ">
          <DropdownButton />
        </div>
      </div>

      <h1 className="text-xl font-bold mb-4 flex justify-center">
        Weekly Top Track
      </h1>
      <div className="flex justify-center pb-6 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 ">
          {visibleTracks.map((track) => (
            <div
              key={track.id}
              className="p-1 bg-white hover:scale-125 hover:bg-black hover:text-white rounded-lg  w-30 h-30 lg:w-70 lg:h-70 flex flex-col items-center justify-center shadow-xl"
            >
              <img
                src={track.album.images[0]}
                alt="track.images"
                className="w-32 h-32 object-fit lg:w-48 lg:h-48 p-2 rounded-lg"
                onClick={() => playTrack(track)}
              />
              <div className="m-2">
                <h2 className=" font-medium text-center">{track.name}</h2>
                <p className=" text-center">{track.artists}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentTrack && (
        <div className="grid grid-cols-3 fixed bottom-0 w-full p-4  bg-black text-white  mt-4  items-center justify-between">
          <div className="cols-span-2 border">
            <div className="flex items-center">
              {currentTrack.album.images[0] && (
                <img
                  src={currentTrack.album.images[0]}
                  alt={currentTrack.name}
                  className="w-10 h-10 object-fit lg:w-10 lg:h-10 mr-4"
                />
              )}
              <h3 className="text-lg font-medium">{currentTrack.name}</h3>
            </div>
          </div>
          <div className="cols-span-1 border flex justify-center">
            <button
              className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
              onClick={playPreviousTrack}
            >
              <PreviousButton />
            </button>
            {isPlaying ? (
              <button
                className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full"
                onClick={pauseTrack}
              >
                <PauseButton />
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                  audio.play();
                  setIsPlaying(true);
                }}
              >
                <PlayButton />
              </button>
            )}
            <button
              className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
              onClick={playNextTrack}
            >
              <NextButton />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
