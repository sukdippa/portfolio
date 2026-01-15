import Card from '../../components/Card';
import Header from '../../components/Header';


export default function Work () {
  return (
    <main>
      <Header title="Work" description="My projects, from design to development." />
      <div className='w-full flex flex-col md:flex-row justify-center'>
        <Card 
          title="Luna AI" 
          description="
            As a founding engineer and UX/UI designer, I contributed 
            to the development of Luna AI, a proactively intelligent 
            AI companion with humanlike memory and assistance features.
            I developed the branding and promotional video." 
          image="/luna/cover.jpg"
          tag1="UX design"
          tag2="HTML/CSS"
          tag3="Motion Graphics"
          tag4="AI/ML"
          link='/work/luna'
        />
        <Card 
          title="Toronto Model United Nations" 
          description="
            As Media Secretariat, I designed all branding and
            marketing materials, impacting over 600 delegates and staff.
            I designed 15 committee posters, social media posts, and video trailers." 
          image="/tmun/tmun.gif"
          tag1="Graphic Design"
          tag2="Motion Graphics"
          tag3="Photo/Videography"
          link="/work/tmun"
        />
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center'>
        <Card 
          title="Inkline Studio" 
          description="
            Co-developed Inkline Studio, 
            a text editor for writers with AI integrations." 
          image="/inkline/cover.gif"
          tag1="AI Integration"
          tag2="Full Stack Development"
          tag3="UX/UI Design"
          link="/work/inkline"
        />
        <Card 
          title="Paceful: Productivity App" 
          description="
            Designed the UI/UX and motion graphics for a productivity app
            that helps users manage their time and tasks effectively." 
          image="/paceful/thumbnail.png"
          tag1="Motion Graphics"
          tag2="After Effects"
          tag3="Branding"
          link="/work/paceful"
        />
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center'>
        <Card 
          title="Blueprint: Adobe Express Typography Add-on" 
          description="
            As a submission for Adobe’s Adobe Express Add-ons Hackathon, 
            I developed an add-on which makes typography and styling more efficient." 
          image="/blueprint/blueprint.gif"
          tag1="Graphic Design"
          tag2="Management"
          link="/work/blueprint"
        />
      </div>
    </main>
  );
}
