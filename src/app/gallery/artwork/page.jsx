import Pic from "../../../components/Pic";

export default function Artwork () {
  return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <div className="max-w-[30rem] h-[18rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Artwork</h1>
          <p>
            Photoshop
          </p>
      </div>
      <Pic image="/artwork/tavern.jpg" text={`"Welcome to Hell's Tavern". 2023 Photoshop`} />
      
      <Pic image="/artwork/clouds.jpg" text='"Dance Amid the Clouds". 2024 Photoshop' />
      <div className="flex flex-row gap-8">
        <Pic image="/artwork/harvest.jpg" text='"Harvest". 2024 Photoshop' />
        <Pic image="/artwork/laundry.png" text='"Dirty Laundry". 2025 Photoshop' />
      </div>
      <Pic image="/artwork/backrooms.png" text='"Poolrooms". 2023 Photoshop' />
      <div className="flex flex-row gap-8">
        <Pic image="/artwork/red.png" text='"PAINT IT RED". 2025 Photoshop' />
        <Pic image="/artwork/cap.png" text='"Cappie". 2024 Photoshop' />
      </div>
      
    </main>
  );
}
