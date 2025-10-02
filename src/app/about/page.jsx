import Header from '../../components/Header';

export default function About () {
  return (
    <main className="">
      <Header title="About me" description="" />
      <p className="">
        Hi, I'm Sophie! I'm a computer science student at the University of Toronto.
        I specialize in UI/UX design and frontend development.
      </p>
      <div>
        My skills
      </div>
      <p className="">
        Design: Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)
        <br />
        Development: HTML, CSS, JavaScript, React, Next.js, Git/GitHub
        <br />
        Other: Photography, Videography, Motion Graphics, Branding
      </p>
    </main>
  );
}
