import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1> </h1>
      <Image
        src="/traction.png"
        alt='traction'
        width={1000}
        height={300}
        className="mx-auto"
      />
      <h1>Traction Aquatics</h1>
      <p>Traction Aquatics is a world-renowned watersports club based in Munich, Germany. Since 1982, the club has produced over 100 world class athletes, including 2-time Olympic gold medalist Erika Meyer. Meyer’s rigorous training regimes were driven by top-notch technologies in Traction, and have set a precedent for aquatic clubs around the world. Traction also boasts a large research facility at the University of Munich, where athletes’ performance statistics are analyzed by Europe’s leading kinesiologists.</p>
    </main>
  );
}
