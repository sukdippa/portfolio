'use client';
import { useState } from 'react';
import Header from '../../components/Header';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

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

  return (
    <main className="">
      <Header title="Let's collaborate!" description="" />
      <div className="flex flex-col gap-8 width-full max-w-2xl mx-auto px-4">
        <div className="space-y-6">
          <section>
            <p>
              Wanna collaborate on a project? Please don't hesitate to reach out! 
              I'm always open to working together on projects, whether it's development, 
              design, or art-related. Use the form or email me at
              sophieshu1480@gmail.com.
            </p>
          </section>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-[rgba(252,252,254,0.1)] border border-border">
            <div className='flex items-center justify-center mb-6'>
                Send me a message!
            </div>
            <div className='flex flex-col gap-4'>
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
                  disabled={status === 'loading'}
                  className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 transition-colors duration-300"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
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
      </div>

    </main>
  );
}
