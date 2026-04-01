import Image from "next/image";
import Card from '../components/Card';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col mt-16 max-w-[30rem] h-[24rem] justify-center items-center text-center mx-auto p-10">
        <h1>Hi, I'm Sophie.</h1>
        <p>
          I’m a computer science student at the University of Toronto
          with a passion for design, art, and technology. I specialize
          in frontend development and UI/UX design.
        </p>
        <p className='font-semibold m-4'>
          Please don't hesitate to reach out!
        </p>
        <div className="flex flex-row h-6 w-full justify-center items-center gap-4">
          <Link href="https://www.linkedin.com/in/sophieshu/">
            <img src="/icons/linkedin.png" alt="LinkedIn" className="h-6"/>
          </Link>
          <Link href="https://www.github.com/sukdippa">
            <img src="/icons/github.png" alt="GitHub" className="h-6"/>
          </Link>
        </div>
      </div>
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
          tag4="Frontend Development"
          tag5="Branding"
          link='/work/luna'
        />
        <Card 
          title="Inkline Studio" 
          description="
            Co-developed Inkline Studio, 
            a text editor for writers with AI integrations. " 
          image="/inkline/cover.gif"
          tag1="AI Integration"
          tag2="Full Stack Development"
          tag3="UX/UI Design"
          link="/work/inkline"
        />
      </div>
    </main>
  );
}