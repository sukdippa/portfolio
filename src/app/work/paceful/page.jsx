import Header from '../../../components/Header';
import Link from 'next/link';

export default function Paceful () {
  return (
    <div>
        <video 
            className="w-full h-full object-cover"
            controls
            autoPlay 
            loop 
            playsInline
          >
            <source src="/paceful/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        <main>
          <div className="flex flex-col justify-center items-center text-center mt-12">
            <h1>Paceful: Productivity App</h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12 mt-12 relative">
            {/* Background Island Images */}
            <img 
              src="/paceful/island-med.png" 
              alt="" 
              className="absolute top-80 -left-24 w-32 pointer-events-none z-0"
            />
            <img 
              src="/paceful/island-small.png" 
              alt="" 
              className="absolute top-[600px] -right-10 w-96 pointer-events-none z-0"
            />
            <img 
              src="/paceful/island-med.png" 
              alt="" 
              className="absolute bottom-40 -left-16 w-28 pointer-events-none z-0"
            />

            {/* Summary Section */}
            <section className="relative z-10">
              <h2>Summary</h2>
              <p>
                For this personal project, I went through the full UX design process from start to finish. I started by conducting student surveys to better understand user needs and uncover pain points. From there, I mapped out user journeys and flows to shape the overall experience. I created both low-fidelity and high-fidelity wireframes and prototypes in Figma, then refined them through rounds of feedback and heuristic evaluations from peers. Along the way, I also designed the branding and visual mockups, making sure everything was accessible, responsive, and intuitive to interact with.
              </p>
            </section>

            {/* Big Idea Section */}
            <section className="relative z-10">
              <h2>Big idea</h2>
              <p>
                How can we transform productivity into an enjoyable, game-like experience that motivates users to achieve their goals?
              </p>
            </section>

            {/* Roles/Responsibilities Section */}
            <section className="relative z-10">
              <h2>Roles/responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>UX/UI prototyping and design</li>
                <li>UX/UI research</li>
                <li>Wireframing</li>
                <li>Branding</li>
                <li>Graphic Design</li>
                <li>Illustration (Pixel Art)</li>
                <li>Motion Graphics and Video editing</li>
              </ul>
            </section>

            {/* Info Section */}
            <section className="relative z-10">
              <h2>Info</h2>
              <div className="space-y-2">
                <p><strong>When:</strong> 2025</p>
                <p><strong>Team size:</strong> Solo</p>
                <p><strong>Timeline:</strong> November 2024 - February 2025</p>
                <p><strong>Tools used:</strong> Adobe Express and its APIs, React Native, After Effects, Aseprite</p>
              </div>
            </section>

            {/* Design Process Gallery */}
            <img 
                  src="/paceful/full.png" 
                  alt="Paceful Full App Design" 
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
                />
            <section>
              <h2>Design Process</h2>
              <div className="flex flex-col md:grid-cols-2 gap-8">
                <img 
                  src="/paceful/palette.png" 
                  alt="Paceful Color Palette" 
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
                />
                
                <img 
                  src="/paceful/animation.png" 
                  alt="Paceful Animation Design" 
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
                />
              </div>
            </section>
          </div>
        </main>
        <div className="flex flex-col items-end w-full mt-12">
          <div className="flex items-end w-1/3 h-32 overflow-visible z-10">
            <img 
              src="/paceful/island-big.png" 
              alt="" 
              className="w-96 ml-auto pointer-events-none"
            />
          </div>
          <img 
            src="/paceful/backdrop.png" 
            alt="Paceful App Backdrop Design" 
            className="w-full h-auto"
          />
        </div>
    </div>
  );
}
