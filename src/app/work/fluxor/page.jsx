import Header from '../../../components/Header';
import Link from 'next/link';

export default function Fluxor () {
  return (
    <div>
        <video 
            className="w-full h-full object-cover"
            controls
            autoPlay 
            loop 
            playsInline
          >
            <source src="/fluxor/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        
        <main>
          <div className="flex flex-col justify-center items-center text-center mt-12">
            <h1>Fluxor: Autonomously Iterative AI UX</h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12 my-12">
            {/* Summary Section */}
            <section>
              <h2>Summary</h2>
              <p>
                For UofT hacks, we built Fluxor, an infrastructure for businesses' websites which observes user behavior, detects friction points, and automatically adjusts the interface to improve retention. This fully automates the process of A/B testing.
              </p>
            </section>

            {/* Big Idea Section */}
            <section>
              <h2>Big idea</h2>
              <p>
                How can we autonomously optimize user interfaces in real-time by analyzing user behavior and friction points?
              </p>
            </section>

            {/* Roles/Responsibilities Section */}
            <section>
              <h2>Roles/responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Graphic Design</li>
                <li>Terminal UI Implementation</li>
                <li>AI/ML Integration</li>
              </ul>
            </section>

            {/* Info Section */}
            <section>
              <h2>Info</h2>
              <div className="space-y-2">
                <p><strong>Event:</strong> UofT Hacks</p>
                <p><strong>Team size:</strong> 4</p>
                <p><strong>Timeline:</strong> 36 Hours (Hackathon)</p>
                <p><strong>Tools used:</strong> AI/ML, Terminal UI, Graphic Design Tools</p>
              </div>
            </section>
          </div>
          <div className="flex flex-row gap-8">
            <div className="max-w-4xl mx-auto">
              <img src="/fluxor/logo.gif" alt="Fluxor Logo" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </main>
    </div>
  );
}
