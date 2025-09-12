import Card from '../../components/Card';


export default function Work () {
  return (
    <main className="flex flex-col justify-center items-center] gap-12">
      <div className="max-w-[30rem] h-[24rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Design</h1>
          <p>
            My design works over the years.
          </p>
      </div>
      <div className='flex flex-row'>
        <Card 
          title="Luna AI" 
          description="
            As a founding engineer and UX/UI designer, I contributed 
            to the development of Luna AI, a proactively intelligent 
            AI companion with humanlike memory and assistance features." 
          image="/luna/cover.jpg"
          tag1="Marketing"
          tag2="Strategy"
          tag3="Media Arts"
        />
        <Card 
          title="Toronto Model United Nations" 
          description="
            As Media Secretariat, I designed all branding and
            marketing materials, impacting over 600 delegates and staff." 
          image="/tmun/tmun.gif"
          tag1="Graphic Design"
          tag2="Management"
          link="/work/tmun"
        />
      </div>
      <div className='flex flex-row'>
        <Card 
          title="Paceful: Productivity App" 
          description="
            Designed the UI/UX and motion graphics for a productivity app
            that helps users manage their time and tasks effectively." 
          image="/paceful/thumbnail.png"
          tag1="Motion Graphics"
          tag2="After Effects"
          tag3="Branding"
        />
        <Card 
          title="Blueprint: Adobe Express Typography Add-on" 
          description="
            As a submission for Adobe’s Adobe Express Add-ons Hackathon, 
            I developed an add-on which makes typography and styling more efficient." 
          image="/blueprint/blueprint.png"
          tag1="Graphic Design"
          tag2="Management"
        />
      </div>
    </main>
  );
}
