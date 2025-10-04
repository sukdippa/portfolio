"use client";

import Card from '../../../components/Card';
import Lottie from 'lottie-react';
import Link from 'next/link';
import thingAnimation from '../../../assets/thing.json';

export default function Luna () {
  return (
    <div>
      <div className="relative max-h-96 flex justify-center items-start min-h-[60vh] overflow-visible">
        {/* Lottie Animation */}
        <Lottie 
          animationData={thingAnimation} 
          className="relative z-10 w-full h-auto" 
          loop={false}
          autoplay={true}
        />
      </div>
      <main>
        <div className="bg-gradient-to-br z-20 rounded-2xl h-auto from-[#FF9690] to-[#47E3EE] p-4">
          <video 
            className="w-full h-full object-cover rounded-lg"
            controls
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/luna/demo-video-smaller.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col justify-center items-center text-center mt-12">
          <h1>Luna AI</h1>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12 mt-12">
          {/* Summary Section */}
          <section>
            <h2>Summary</h2>
            <p>
              As a founding engineer, frontend developer and UX/UI designer, 
              I collaborated with my Cofounder <Link href="https://jacemu.vercel.app/" className="text-accent hover:underline">Jace Mu </Link> 
              to develop LunaAI, a proactively intelligent AI companion with 
              humanlike memory and assistance features.
            </p>
          </section>

          {/* Big Idea Section */}
          <section>
            <h2>Big idea</h2>
            <p>
              How can we integrate an AI companion into everyday workflow, 
              with humanlike assistance features such as memory and proactive 
              intelligence?
            </p>
          </section>

          {/* Roles/Responsibilities Section */}
          <section>
            <h2>Roles/responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Frontend Development</li>
              <li>UX/UI prototyping and design</li>
              <li>Graphic Design</li>
              <li>Motion Graphics and Video editing</li>
            </ul>
          </section>

          {/* App Screenshots Gallery */}
          <section>
            <h2>App Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <img 
                src="/luna/snap-1.png" 
                alt="Luna AI Screenshot 1" 
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
              />
              <img 
                src="/luna/snap-2.png" 
                alt="Luna AI Screenshot 2" 
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
              />
              <img 
                src="/luna/snap-3.png" 
                alt="Luna AI Screenshot 3" 
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
              />
              <img 
                src="/luna/snap-4.png" 
                alt="Luna AI Screenshot 4" 
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
              />
              <img 
                src="/luna/snap-5.png" 
                alt="Luna AI Screenshot 5" 
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
              />
              <img 
                src="/luna/snap-6.png" 
                alt="Luna AI Screenshot 6" 
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
              />
            </div>
          </section>

          {/* Featured Screenshot */}
          <section>
            <div className="flex justify-center">
              <img 
                src="/luna/snap-7.png" 
                alt="Luna AI Featured Screenshot" 
                className="max-w-2xl w-full h-auto rounded-lg"
                style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
              />
            </div>
          </section>

          {/* Info Section */}
          <section>
            <h2>Info</h2>
            <div className="space-y-2">
              <p><strong>When:</strong> 2025</p>
              <p><strong>Team size:</strong> ME AND JACE MU</p>
              <p><strong>Timeline:</strong> August 2024 - March 2025 (8 months)</p>
              <p><strong>Tools used:</strong> React Native, Electron, Tailwind CSS, GSAP, After Effects, Lottie/Bodymovin</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
