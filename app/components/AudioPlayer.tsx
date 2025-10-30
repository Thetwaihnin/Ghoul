'use client'
import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="flex gap-2 mt-2">
      <button onClick={togglePlay} className="p-2 bg-white/30 border-2 border-black rounded-md">
        {playing ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
      </button>
      <audio ref={audioRef} src="/assets/love3000.mp3" />
    </div>
  );
}
