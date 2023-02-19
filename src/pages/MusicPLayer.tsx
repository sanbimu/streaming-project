import React, { useState, useEffect } from "react";

//typescript interface for type checking
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
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio] = useState(new Audio());
  const [start, setStart] = useState(0);

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
    setCurrentTrack(track);
    audio.src = track.preview_url;
    audio.play();
    setIsPlaying(true);
    console.log(track.album.images[0]);
  };

  const pauseTrack = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (start + 4 < tracks.length) {
      setStart(start + 4);
    }
  };

  const handlePrev = () => {
    if (start - 4 >= 0) {
      setStart(start - 4);
    }
  };

  const visibleTracks = tracks.slice(start, start + 4);

  return (
    <div className="rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-4 flex justify-center">
        Weekly Top Track
      </h1>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 ">
          {visibleTracks.map((track) => (
            <div
                key={track.id}
                className="p-1 bg-white hover:scale-125 rounded-lg border w-60 h-60 lg:w-80 lg:h-80 flex flex-col items-center justify-center"
                >
                <div className="m-2">
                  <h2 className=" font-medium text-center">{track.name}</h2>
                  <p className="text-black text-center">{track.artists}</p>
                </div>
                <img
                  src={track.album.images[0]}
                  alt="track.images"
                  className="w-32 h-32 object-fit lg:w-48 lg:h-48"
                />
                <button
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded-full my-2"
                  onClick={() => playTrack(track)}
                >
                  Play
                </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded-full"
          onClick={handlePrev}
          disabled={start === 0}
        >
          Prev
        </button>
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
          disabled={start + 4 >= tracks.length}
        >
          Next
        </button>
      </div>
      {currentTrack && (
        <div className="p-4 w-4/6 bg-black text-white rounded-lg mt-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-medium">{currentTrack.name}</h3>
          <button
            className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full"
            onClick={pauseTrack}
          >
            Pause
          </button>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
