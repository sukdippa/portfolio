import Card from '../../components/Card';
import Header from '../../components/Header';

export default function Gallery () {
  return (
    <main className="">
      <Header title="Gallery" description="Gallery of artwork and photography, my favorite hobbies." />
      <div className='w-full flex flex-col md:flex-row justify-center'>
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
      <div className='w-full flex flex-col md:flex-row justify-center'>
        <Card 
          title="Apparel Design" 
          description="
            Section under construction." 
          image="/apparel/thumbnail.png"
          tag1="Graphic Design"
          tag2="Management"
        />
        <Card 
          title="Photography" 
          description="
            Section under construction." 
          image="/photo/chicago.jpg"
          tag1="Photography"
          tag2="Photoshop"
          tag3="Lightroom"
        />
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center'>
        <Card 
          title="Music" 
          description="
            Section under construction." 
          image="/music/cover.png"
          tag1="Music Production"
          tag2="Sound Design"
        />
        <Card 
          title="Videography" 
          description="
            Section under construction." 
          image="/video/cover.png"
          tag1="Videography"
          tag2="Premiere Pro"
        />
      </div>
    </main>
  );
}
