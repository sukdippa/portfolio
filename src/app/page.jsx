import Image from "next/image";
import Card from '../components/Card';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[35rem]">
      <div className="w-[30rem] h-[40rem] flex flex-col justify-center items-center text-center mx-auto">
        <h1>Hi, I'm Sophie.</h1>
          <p>
            I’m a designer and developer with a versatile skillset 
            and strong ability to adapt to new environments.
          </p>
          <p>
            talk to me
          </p>
      </div>
      <div className='flex flex-row'>
        <Card 
          title="Chinese on Ice" 
          description="
            I curated the thirteenth instalment for figure skaters 
            of Chinese heritage. I was awarded the Diversity Merit 
            for this project." 
          image="/1-forest.png"
          tag1="Marketing"
          tag2="Strategy"
          tag3="Media Arts"
          />
          
        <Card />
      </div>
    </main>
  );
}