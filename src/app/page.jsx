import Image from "next/image";
import Card from '../components/Card';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className=" flex flex-col w-max-[30rem] h-[20rem] justify-center items-center text-center mx-auto p-10">
        <h1>Hi, I'm Sophie.</h1>
          <p>
            I’m a designer and developer with a versatile skillset 
            and strong ability to adapt to new environments.
          </p>
          <p>
            talk to me
          </p>
      </div>
      <div className='w-full flex flex-col md:flex-row gap-4 justify-center'>
        <Card 
          title="Luna AI" 
          description="
            As a founding engineer and UX/UI designer, I contributed 
            to the development of Luna AI, a proactively intelligent 
            AI companion with humanlike memory and assistance features." 
          image="/1-forest.png"
          tag1="Marketing"
          tag2="Strategy"
          tag3="Media Arts"
          />
          
        <Card 
          title="Toronto Model United Nations" 
          description="
            I curated the thirteenth instalment for figure skaters 
            of Chinese heritage. I was awarded the Diversity Merit 
            for this project." 
          image="/tmun.gif"
          tag1="Marketing"
          tag2="Strategy"
          tag3="Media Arts"
          />
      </div>
    </main>
  );
}