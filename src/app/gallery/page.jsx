import Card from '../../components/Card';

export default function Gallery () {
  return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <div className="max-w-[30rem] h-[18rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Gallery</h1>
          <p>
            Gallery of artwork and photography, my favorite hobbies.
          </p>
      </div>
      <div className='flex flex-row'>
        <Card 
          title="Artwork" 
          description="
            Drawing since kindergarten. From scribbles to worlds." 
          image="/artwork/tavern.jpg"
          tag1="Photoshop"
          tag2="Blender"
          link="/gallery/artwork"
        />
        <Card 
          title="Highlights from High School" 
          description="
            Lead design initiatives for the school through official yearbook,
            newspaper, and club executive roles." 
          image="/highschool/cover.png"
          tag1="Graphic Design"
          tag2="Illustration"
          tag3="Team Leadership"
          link="/gallery/highschool"
        />
      </div>
      <div className='flex flex-row'>
        <Card 
          title="Photography" 
          description="
            Taking photos since elementary school. See the world through
            a different lens." 
          image="/photo/chicago.jpg"
          tag1="Photography"
          tag2="Photoshop"
          tag3="Lightroom"
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
}
