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
  );
}
