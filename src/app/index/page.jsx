import Header from '../../components/Header';
import DarkModeToggle from '../../components/DarkModeToggle';

export default function Index () {
  return (
    <main className="">
      <Header title="About me" description="" />
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <section>
            <p>
              Hi, I'm Sophie! I'm a computer science student at the University of Toronto.
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
            <h2>My Skills</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-1">Design</h3>
                <p className="text-sm">
                  Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Development</h3>
                <p className="text-sm">
                  HTML/CSS, Python, JavaScript/Typescript, Java, React, Next.js, Electron, GSAP, Lottie, Framer Motion
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Other</h3>
                <p className="text-sm">
                  Photography, Videography, Motion Graphics, Branding, 3D Modelling (Blender), Sound Design, Music Production
                </p>
              </div>
            </div>
          </section>
          
        </div>
        <div>
          <img src="/me.jpg" alt="me" />
          <DarkModeToggle />
        </div>
      </div>


    </main>
  );
}
