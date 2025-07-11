// AudioOrb.jsx
import { useEffect, useRef } from "react";

export default function AudioOrb( {color} ) {
  const canvasRef = useRef();

  useEffect(() => {
    let audioCtx, analyser, dataArray, source;

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      canvas.width = 300;
      canvas.height = 300;

      function draw() {
        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        const mid = Math.floor(bufferLength / 2);
        
        const lowFreqs = dataArray.slice(0, 25);
        const highFreqs = dataArray.slice(25,60);


        const avgHigh =
          highFreqs.reduce((a, b) => a + b, 0) / bufferLength;
        const pulseHigh = avgHigh / 25; // scale for effect

        const avgLow =
          lowFreqs.reduce((a, b) => a + b, 0) / bufferLength;
        const pulseLow = avgLow / 25; // scale for effect

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(150, 150, 40 + pulseLow * 10, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 20 + pulseLow * 10;
        ctx.shadowColor = color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(150, 150, 20 + pulseHigh * 20, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200, 120, 255,0.5)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.fill();
      }

      draw();
    });

    // Optional: stop audio on unmount
    return () => {
      if (audioCtx) audioCtx.close();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
}
