'use client';
import { useState } from 'react';
import Header from '../../components/Header';

export default function About () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const isLoading = status === 'loading';
  return (
    <main className="">
      <div className="flex flex-col sm:flex-row gap-8 mt-36">
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
      <section>
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
          <Header
            title="Let's collaborate"
            description="Want to collaborate on a project? I'm always open to working together on projects, whether it's development, design, or art-related. Use the form below or email me at sophieshu1480@gmail.com."
          />
          <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-[rgba(252,252,254,0.1)] border border-border">
            <div className="flex items-center justify-center mb-6">
              Send me a message!
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-[rgba(252,252,254,0.1)] border border-border appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="bg-[rgba(252,252,254,0.1)] border border-border appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-[rgba(252,252,254,0.1)] h-32 border border-border appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  id="message"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 transition-colors duration-300"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
