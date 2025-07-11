import Card from ".../components/Card";

export default function Projects () {
    return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <div className="max-w-[30rem] h-[24rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Projects</h1>
          <p>
            Development projects I have created or contributed to.
          </p>
      </div>
      <div className='flex flex-row'>
        <Card 
          title="2D Topography to 3D Terrain" 
          description="
            Converting a 2D topographic image to a 3D mesh
            terrain by mapping pixels by value." 
          image="/1-forest.png"
          tag1="Java"
          tag2="3D Modelling"
        />
        <Card 
          title="Pixel Art Shooter Game" 
          description="
            Developed a pixel art shooter game using Python
            where the player defeats waves of enemies to earn points." 
          image="/2-valley.png"
          tag1="Motion Graphics"
          tag2="After Effects"
        />
      </div>
      <div className='flex flex-row'>
        <Card 
          title="Highlights from High School" 
          description="
            As Media Secretariat, I designed the branding and
            marketing materials, impacting over 600 delegates and staff." 
          image="/3-river.png"
          tag1="Graphic Design"
          tag2="Management"
        />
        <Card 
          title="Apparel Design" 
          description="
            Designed and illustrated apparel for ." 
          image="/4-foggy.png"
          tag1="Graphic Design"
          tag2="Management"
        />
      </div>
    </main>
  );
};