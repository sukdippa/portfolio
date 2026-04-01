import Header from '../../components/Header';
import DarkModeToggle from '../../components/DarkModeToggle';

export default function About () {
  return (
    <main className="">
      <div className="flex flex-col sm:flex-row gap-8 my-36">
        <div>
          <img src="/me.jpg" alt="me"/>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="mb-2">Hello!</h2>
            <p>
              I'm Sophie. I'm a computer science student at the University of Toronto.
              I specialize in UI/UX design and frontend development.
            </p>
          </section>
          <section>
            <p>
              I have experience across a wide variety of fields. I have over 12 years of design, art,
              and Adobe Suite experience. I work in all stages of the design 
              process: from branding and graphics, to frontend development, 
              to motion graphics and advertisement. I also enjoy creating music, so 
              I often do my own soundtracks and sound design.
            </p>
          </section>
          <section>
            <h2 className="mb-2">My Skills</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-1 text-gray-500">Design</h3>
                <p className="text-sm">
                  Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-500">Development</h3>
                <p className="text-sm">
                  HTML/CSS, Python, JavaScript/Typescript, Java, React, Next.js, Electron, GSAP, Lottie, Framer Motion
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-500">Other</h3>
                <p className="text-sm">
                  Photography, Videography, Motion Graphics, Branding, 3D Modelling (Blender), Sound Design, Music Production
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
