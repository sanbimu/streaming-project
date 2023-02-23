import React, { useRef, useEffect } from "react";

type Props = {
  audio: HTMLAudioElement;
};

const ProgressBar = ({ audio }: Props) => {
  const progressBarRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    const updateProgressBar = () => {
      if (progressBarRef.current) {
        progressBarRef.current.value = audio.currentTime;
        progressBarRef.current.max = audio.duration;
      }
    };

    audio.addEventListener("timeupdate", updateProgressBar);
    return () => {
      audio.removeEventListener("timeupdate", updateProgressBar);
    };
  }, [audio]);

  return (
    <progress
      ref={progressBarRef}
      className="w-full h-2 ml-4"
      value={audio.currentTime}
      max={audio.duration}
    />
  );
};

export default ProgressBar;
