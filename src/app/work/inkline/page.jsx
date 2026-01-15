import Header from '../../../components/Header';
import Link from 'next/link';

export default function Blueprint () {
  return (
    <div>
        
        <main>
          <div className="flex flex-col justify-center items-center text-center mt-12">
            <h1>Inkline Studio</h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12 my-12">
            {/* Summary Section */}
            <section>
              <h2>Summary</h2>
              <p>
                I co-developed Inkline Studio with Jace Mu, 
                a text editor for writers with AI integrations. 
              </p>
            </section>

            {/* Big Idea Section */}
            <section>
              <h2>Big idea</h2>
              <p>
                How can we make designers' workflows more efficient by cutting time required to repetitively style text?
              </p>
            </section>

            {/* Features Section */}
            <section>
              <h2>Features</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Structured file types for different use cases</li>
                <li>Dedicated character, location, and organization editors, each with their own properties</li>
                <li>Tab sorting tools to keep projects easy to navigate as they grow</li>
                <li>Offline access</li>
                <li>Focused mode</li>
                <li>A visual story timeline where characters, locations, and events can be placed and tracked</li>
                <li>AI tools that help check spelling, continuity, and plot consistency across the project</li>
                <li>Automatic audio selection and generation to match scenes or scenarios</li>
                <li>Image storage for covers, characters, reference material, and other assets</li>
                <li>Fully customizable workspace that adapts to different workflows and preferences</li>
              </ul>
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
                <p><strong>Timeline:</strong> October 2025 - January 2026 (5 months)</p>
                <p><strong>Tools used:</strong> React, Electron, Typescript, Gemini API</p>
              </div>
            </section>
          </div>
          <div className="flex flex-row gap-8">
          </div>
        </main>
    </div>
  );
}
