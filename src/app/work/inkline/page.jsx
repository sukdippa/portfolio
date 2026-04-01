import Header from '../../../components/Header';
import Link from 'next/link';
import SetNavbarColor from '@/components/SetNavbarColor';

export default function Blueprint () {
  return (
    <div>
        <video 
            className="w-full h-full object-cover bg-white pt-16"
            controls
            autoPlay 
            loop 
            playsInline
          >
            <source src="/inkline/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <main>
          <div className="flex flex-col justify-center items-center text-center mt-12">
            <h1>Inkline Studio</h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12 mt-12">
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
                How can we create a text editor that integrates AI tools and features to enhance the writing process, without
                compromising the user experience or overwhelming users with AI content?
              </p>
            </section>

            {/* Featured Screenshot */}
            <section>
              <div className="flex justify-center">
                <img 
                  src="/inkline/features.png" 
                  alt="Inkline Studio Features" 
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
                />
              </div>
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

            {/* App Screenshots Gallery */}
            <section>
              <h2>App Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <img 
                  src="/inkline/features-minimal-interface.png" 
                  alt="Inkline Studio Minimal Interface" 
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
                />
                <img 
                  src="/inkline/features-special-editor.png" 
                  alt="Inkline Studio Special Editors" 
                  className="w-full h-auto rounded-lg"
                  style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
                />
              </div>
            </section>
          </div>
        </main>
    </div>
  );
}
