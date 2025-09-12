import Pic from "../../../components/Pic";

export default function Highschool () {
  return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <div className="max-w-[30rem] h-[18rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Highlights from High School</h1>
          <p>
            Design work for yearbook, newspaper, and club executive roles.
          </p>
      </div>
      <Pic 
        image="/highschool/yearbook.png" 
        text={`Yearbook Cover. 2025 Photoshop`} 
        description="
        Designed the cover for the 2025 yearbook. This year's theme was 'Back to the 2000s',
        which incorporated Y2K aesthetics and nostalgia of the graduating class. I blended
        various elements such as retro technology, typography, and colors to create this cover."
        textPosition="right"
      />
      <Pic 
        image="/highschool/red.png" 
        text={`Newspaper Cover. 2025 Photoshop`} 
        description="
        Illustrated and designed the cover for the 2025 newspaper. I challenged myself with
        a graffiti art style, including bold colors and dynamic lettering."
        textPosition="right"
      />

    </main>
  );
}
