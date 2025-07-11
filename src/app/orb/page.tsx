"use client";

import AudioOrb from '../../components/AudioOrb';

export default function Orb () {
  return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <div className="max-w-[30rem] h-[24rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Orb</h1>
          <p>
            Little orb
          </p>
        <AudioOrb color="rgb(150, 50, 255)"/>
      </div>
    </main>
  );
}
