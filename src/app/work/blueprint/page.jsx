import Header from '../../../components/Header';
import Link from 'next/link';

export default function Blueprint () {
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
            <source src="/blueprint/sample.mov" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        <main>
          <div className="flex flex-col justify-center items-center text-center">
            <h1>Blueprint: Adobe Express Typography Add-on</h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12 mt-12">
            {/* Summary Section */}
            <section>
              <h2>Summary</h2>
              <p>
                As a submission for Adobe's Adobe Express Add-ons Hackathon, I developed an add-on which makes typography and styling significantly more efficient. This add-on allows you to create styles, and enter the already styled text through the UI instead of applying the style to a basic textbox.
              </p>
            </section>

            {/* Big Idea Section */}
            <section>
              <h2>Big idea</h2>
              <p>
                How can we make designers' workflows more efficient by cutting time required to repetitively style text?
              </p>
            </section>

            {/* Roles/Responsibilities Section */}
            <section>
              <h2>Roles/responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full Stack Development</li>
                <li>UX/UI prototyping and design</li>
                <li>Branding</li>
                <li>Graphic Design</li>
                <li>Motion Graphics and Video editing</li>
              </ul>
            </section>

            {/* Info Section */}
            <section>
              <h2>Info</h2>
              <div className="space-y-2">
                <p><strong>When:</strong> 2025</p>
                <p><strong>Team size:</strong> ME AND JACE MU</p>
                <p><strong>Timeline:</strong> [Add timeline here]</p>
                <p><strong>Tools used:</strong> Adobe Express and its APIs, React Native, After Effects</p>
              </div>
            </section>
          </div>
        </main>
    </div>
  );
}
