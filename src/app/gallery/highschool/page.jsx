import Pic from "../../../components/Pic";
import DarkModeToggle from '@/components/DarkModeToggle';
import Header from '../../../components/Header';

export default function Highschool () {
  return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <Header
        title="Highlights from High School"
        description="Design work for yearbook, newspaper, and club executive roles."
      />
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
      <Pic image="/highschool/all%20designs%20mockup-2.jpg" text="Class of 2025 Hoodie Mockup. 2024" />
      <Pic image="/highschool/model.png" text="Class of 2025 Hoodie Product Mockup. 2024" />
      <Pic image="/highschool/black%20full.png" text="Class of 2025 Hoodie Full Design. 2024" />
      <Pic image="/highschool/woods-cs.png" text="Woods CS Social Media Graphics. 2024" />
      <Pic image="/highschool/mathematics-office-door.jpg" text="Math Office Door Installation. 2023" />
      <DarkModeToggle />
    </main>
  );
}
