import Header from '../../../components/Header';
import Link from 'next/link';

export default function Paceful () {
  return (
    <div>
        <video 
            className="w-full h-full object-cover"
            controls
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/paceful/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        <main>
          <div className="flex flex-col justify-center items-center text-center">
            <h1>Paceful: Productivity App</h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12 mt-12">
            {/* Summary Section */}
            <section>
              <h2>Summary</h2>
              <p>
                For this personal project, I went through the full UX design process from start to finish. I started by conducting student surveys to better understand user needs and uncover pain points. From there, I mapped out user journeys and flows to shape the overall experience. I created both low-fidelity and high-fidelity wireframes and prototypes in Figma, then refined them through rounds of feedback and heuristic evaluations from peers. Along the way, I also designed the branding and visual mockups, making sure everything was accessible, responsive, and intuitive to interact with.
              </p>
            </section>

            {/* Big Idea Section */}
            <section>
              <h2>Big idea</h2>
              <p>
                How can we transform productivity into an enjoyable, game-like experience that motivates users to achieve their goals?
              </p>
            </section>

            {/* Roles/Responsibilities Section */}
            <section>
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
            <section>
              <h2>Info</h2>
              <div className="space-y-2">
                <p><strong>When:</strong> 2025</p>
                <p><strong>Team size:</strong> Solo</p>
                <p><strong>Timeline:</strong> November 2024 - February 2025</p>
                <p><strong>Tools used:</strong> Adobe Express and its APIs, React Native, After Effects, Aseprite</p>
              </div>
            </section>
          </div>
        </main>
    </div>
  );
}
