import React from 'react';
import frontendImage from '../img/husseinheadshot.jpg';
import backendImage from '../img/abuimage.jpg';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-800 flex flex-col items-center justify-center py-20 px-6 sm:px-12 lg:px-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-6">
        Meet the Team Behind <span className="text-lime-400">ServiceHub</span>
      </h2>
      <p className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mb-16 leading-relaxed">
        We mix clean code, creative problem-solving, and a love for strong coffee to bring ServiceHub to life. Below is the dynamic duo who code, debug, and dream big.
      </p>

      {/* Team Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 w-full max-w-6xl">
        {/* Frontend Dev */}
        <div className="group w-full sm:w-[320px] bg-white/10 border border-lime-700 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-lime-500/40">
          <img
            src={frontendImage}
            alt="Frontend Developer - Abdallah Hussein"
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6 text-center text-white space-y-2">
            <h3 className="text-2xl font-semibold text-lime-300">Abdallah Hussein</h3>
            <p className="text-sm text-gray-300">Frontend Developer</p>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-lime-400 hover:text-lime-300 underline transition"
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        {/* Backend Dev */}
        <div className="group w-full sm:w-[320px] bg-white/10 border border-lime-700 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-lime-500/40">
          <img
            src={backendImage}
            alt="Backend Developer - Abubakari Imoro"
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6 text-center text-white space-y-2">
            <h3 className="text-2xl font-semibold text-lime-300">Abubakari Imoro</h3>
            <p className="text-sm text-gray-300">Backend Developer</p>
            <a
              href="https://github.com/yourbackendgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-lime-400 hover:text-lime-300 underline transition"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
