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
    <div className="flex flex-col lg:w-3/4 md:w-3/4  mt-4 items-center ">
      <div className="w-full grid grid-cols-5 lg:grid-cols-4 items-center  justify-center ">
        <div className="w-20  col-span-1 lg:justify-center flex ">
          <Logo />
        </div>
        <div className="col-span-2  items-center flex justify-center ">
          <p className="font-raleway rounded p-4 w-full text-center">
            {" "}
            <input
              type="text"
              placeholder="Search for a Wave track"
              className="p-2   rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </p>
        </div>
        <div className="col-span-1 justify-center flex ">
          <DropdownButton />
        </div>
      </div>

      <h1 className="font-ubuntu text-xl font-bold mb-4 mt-10 flex justify-center">
        Weekly Top Tracks
      </h1>
      <div className="flex justify-center pb-6 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-2 ">
          {visibleTracks.map((track) => (
            <div
              key={track.id}
              className="p-1 bg-white hover:scale-125 hover:bg-dark-grey hover:text-beige rounded-lg  w-30 h-30 lg:w-60 lg:h-70 flex flex-col items-center justify-center shadow-xl "
            >
              <img
                src={track.album.images[0]}
                alt="track.images"
                className="w-32 h-32 object-fit lg:w-48 lg:h-48 p-2 rounded-lg"
                onClick={() => playTrack(track)}
              />
              <div className="p-2 text-clip overflow-hidden">
                <h2 className="font-raleway font-medium text-center">{track.name}</h2>
                <p className="font-raleway text-center ">{track.artists}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentTrack && (
        <div className="grid grid-cols-5  fixed bottom-0 w-full p-4 bg-dark-grey text-beige mt-4 items-center justify-between">
          <div className="col-span-1 lg:col-span-1  ">
            <div className="flex items-center">
              {currentTrack.album.images[0] && (
                <img
                  src={currentTrack.album.images[0]}
                  alt={currentTrack.name}
                  className="w-10 h-10 object-fit lg:w-10 lg:h-10 mr-4"
                />
              )}
              <div>
                <h3 className="text-lg font-medium">{currentTrack.name}</h3>
                <p className="text-yellow ">{currentTrack.artists}</p>
              </div>
            </div>
          </div>

          <div className="cols-span-1 flex justify-start items-center ">
            <button
              className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:scale-50 text-yellow"
              onClick={playPreviousTrack}
            >
              <PreviousButton />
            </button>
            {isPlaying ? (
              <button
                className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full hover:scale-50 text-yellow"
                onClick={pauseTrack}
              >
                <PauseButton />
              </button>
            ) : (
              <button
                className="text-white font-bold py-2 px-4 rounded-full hover:scale-50 text-yellow"
                onClick={() => {
                  audio.play();
                  setIsPlaying(true);
                }}
              >
                <PlayButton />
              </button>
            )}
            <button
              className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:scale-50 text-yellow"
              onClick={playNextTrack}
            >
              <NextButton />
            </button>
          </div>
          <div className="col-span-1 flex justify-center items-center ">
            <progress
              className="w-full h-2 "
              value={audio.currentTime}
              max={audio.duration}
              style={{
                appearance: "none",
                borderRadius: "5px",
              }}
            />
            <style>{`
        progress::-webkit-progress-bar {
          background-color: #F7F2EC;
        }
        progress::-webkit-progress-value {
          background-color: #FFDA8A;
          border-radius: 5px;
        }
        progress::-moz-progress-bar {
          background-color: #FFDA8A;
          border-radius: 5px;
        }
      `}</style>
          </div>
          <div className="col-span-2  items-center justify-center flex ">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={audio.volume}
            onChange={(e) => {
            audio.volume = parseFloat(e.target.value);
          }}
            className="h-2 mx-4 w-3/4 "
            style={{
            appearance: "none",
            background: "#F7F2EC",
            outline: "none",
            borderRadius: "5px",
          }}
          />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
