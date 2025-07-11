import Card from '../../components/Card';

export default function Gallery () {
  return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <div className="max-w-[30rem] h-[24rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Gallery</h1>
          <p>
            Gallery of artwork and photography, my favorite hobbies.
          </p>
      </div>
      <div className='flex flex-row'>
        <Card 
          title="Toronto Model United Nations" 
          description="
            As Media Secretariat, I designed all branding and
            marketing materials, impacting over 600 delegates and staff." 
          image="/1-forest.png"
          tag1="Graphic Design"
          tag2="Management"
        />
        <Card 
          title="Paceful: Productivity App" 
          description="
            Designed the UI/UX and motion graphics for a productivity app
            that helps users manage their time and tasks effectively." 
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
}
