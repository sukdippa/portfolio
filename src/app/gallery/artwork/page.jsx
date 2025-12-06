'use client';

import { useState, useRef, useEffect } from 'react';
import Pic from "../../../components/Pic";
import Navbar from "../../../components/Navbar";

export default function Artwork () {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {/* Background Music */}
      <audio ref={audioRef} src="/artwork/bgm.mp3" loop />

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-20 right-4 z-50 p-3 bg-white/20 dark:bg-black/30 backdrop-blur-md rounded-full hover:bg-white/30 dark:hover:bg-black/40 transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-6 h-6 ${isPlaying ? 'text-accent' : 'text-gray-400'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
          />
        </svg>
      </button>
      <div className="relative w-full h-screen flex items-center justify-center">
        <video 
          src="/artwork/dusty.mp4" 
          autoPlay 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-[30rem] flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-white mb-12">Artwork</h1>
        </div>
      </div>
      <main>
        <div className="grid grid-cols-2 py-24 gap-12">
          <div className="flex flex-col">
            <div>
              I've been drawing for a long time, working with different digital art tools to 
              create illustrations and designs. Here are some of my favorite pieces.
            </div>
          </div>
        </div>
        <Pic image="/artwork/tavern.jpg" text={`"Welcome to Hell's Tavern". 2023 Photoshop`} />
        <Pic image="/artwork/civilizations.png" text='"Civilizations". 2024 Photoshop' />
        <Pic image="/artwork/clouds.jpg" text='"Dance Amid the Clouds". 2024 Photoshop' />
        <div className="flex flex-row gap-8">
          <Pic image="/artwork/harvest.jpg" text='"Harvest". 2024 Photoshop' width="3000" height="4000" />
          <Pic image="/artwork/red.png" text='"PAINT IT RED". 2025 Photoshop' width="2400" height="3300" />
        </div>
        <Pic image="/artwork/laundry.png" text='"Dirty Laundry". 2025 Photoshop' />
        <Pic image="/artwork/backrooms.png" text='"Poolrooms". 2023 Photoshop' />
        <div className="grid grid-cols-2 gap-8">
          <Pic image="/artwork/math-door.jpg" />
          <Pic image="/artwork/mathematics-office-door.jpg" text={`"Math door installation". 2023 Photoshop , Blender
            The above image shows my illustration installed on my high school's math office door. I was
            challenged to incorporate mathematical concepts within my art.`} />
        </div>
        <div className="flex flex-row gap-8">
          <Pic image="/artwork/blue_chan.png" text='"Blue". 2023 Photoshop' />
          <Pic image="/artwork/cap.png" text='"Cappie". 2024 Photoshop' />
        </div>
        <Pic image="/artwork/homecoming.png" text='"Homecoming". 2025 Photoshop' />
        <Pic image="/artwork/devour.png" text='"Devour". 2023 Photoshop' />
        <div className="flex flex-row gap-8">
          <Pic image="/artwork/sora.png" text='"Sora". 2023 Photoshop' />
          <Pic image="/artwork/oneway.jpg" text='"ONE WAY". 2023 Photoshop' />
        </div>
      </main>
    </div>
  );
}
