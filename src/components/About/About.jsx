import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'; // ✅ Added import
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Pravesh Sachan
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Web Developer',
                'Problem Solver',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
           I am a Full Stack Web Developer and Computer Science student skilled in the MERN stack. 
           With experience in internships and projects like a Grocery Delivery App and AI Helmet Detection,
           I build practical, impactful solutions while also growing through MUN and volunteering.
          </p>
     {/* Resume Button */}
<motion.a
  href="https://drive.google.com/file/d/13KHXVfJKXfre8v8Be-KD2r9Vz_OOxgq7/view?usp=share_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
  style={{
    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
  }}
  initial={{ opacity: 0, x: -120 }}   // 👈 start off to the left
  whileInView={{ opacity: 1, x: 0 }} // 👈 slide into place
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  DOWNLOAD CV
</motion.a>

          
        </div>
        {/* Right Side */}
<motion.div
  className="md:w-1/2 flex justify-center md:justify-end"
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <img
    src={profileImage}
    alt="Pravesh Sachan"
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] 
               border-4 border-purple-700 rounded-full object-cover 
               drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
  />
</motion.div>

      </div>
    </section>
  );
};

export default About;




