// import React from "react";
// import { motion } from "framer-motion"; // ✅ added


// const experiences = [
//   {
//     id: 1,
//     role: "Web Development Intern",
//     company: "IIIT Allahabad (Effervescence) • EngineerCore",
//     date: "August 2023 – September 2023",
//     desc: "Worked on building responsive web pages using HTML & CSS. Completed a structured internship program focused on frontend fundamentals, web accessibility, and layout best practices. Gained hands-on experience in writing clean, maintainable code for real-world projects.",
//     skills: ["HTML", "CSS", "Responsive Design", "Web Accessibility"],
//     img: "/src/assets/company_logo/agc_logo.png", // replace with your actual image path/logo
//   },
//   {
//     id: 2,
//     role: "Delegate – GRBMUN",
//     company: "G.L. Bajaj Institute of Technology & Management",
//     date: "September 2024",
//     desc: "Represented in committee discussions, debating on global issues and drafting resolutions. Enhanced public speaking, research, diplomacy, and negotiation skills while collaborating with international delegates in a professional conference environment.",
//     skills: [
//       "Public Speaking",
//       "Research",
//       "Diplomacy",
//       "Negotiation",
//       "Critical Thinking",
//     ],
//     img: "/src/assets/company_logo/mun_logo.png", // replace with your actual image path/logo
//   },
//   {
//     id: 3,
//     role: "Volunteer – 3rd ICDT",
//     company: "G.L. Bajaj Institute of Technology & Management",
//     date: "March 2025",
//     desc: "Contributed as a volunteer in organizing an international IEEE-recognized conference in 2025. Assisted with event coordination, logistics, and participant management. Developed strong teamwork and leadership skills while ensuring smooth execution of the conference.",
//     skills: ["Teamwork", "Leadership", "Event Management", "Communication"],
//     img: "/src/assets/company_logo/icdt_logo.png", // replace with your actual image path/logo
//   },
// ];

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <motion.div
//   initial={{
//     opacity: 0,
//     x: index % 2 === 0 ? 80 : -80, // slide in opposite side
//   }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.6, ease: "easeOut" }} // ✅ slow + smooth
//   viewport={{ once: true }}
//   className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//     index % 2 === 0 ? "sm:mr-30" : "sm:ml-30"
//   } ml-8 transform transition-transform duration-300 hover:scale-105`}
// >

//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                {/* Company Logo/Image */}
// <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex justify-center items-center">
//   <img
//     src={experience.img}
//     alt={experience.company}
//     className="max-w-full max-h-full object-contain"
//   />
// </div>


//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               </motion.div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;

import agcLogo from "../../assets/company_logo/agc_logo.png";
import munLogo from "../../assets/company_logo/mun_logo.png";
import icdtLogo from "../../assets/company_logo/icdt_logo.png";

import React from "react";
import { motion } from "framer-motion"; // ✅ added


const experiences = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "IIIT Allahabad (Effervescence) • EngineerCore",
    date: "August 2023 – September 2023",
    desc: "Worked on building responsive web pages using HTML & CSS. Completed a structured internship program focused on frontend fundamentals, web accessibility, and layout best practices. Gained hands-on experience in writing clean, maintainable code for real-world projects.",
    skills: ["HTML", "CSS", "Responsive Design", "Web Accessibility"],
    img: agcLogo,   // ✅ imported variable instead of string path
  },
  {
    id: 2,
    role: "Delegate – GRBMUN",
    company: "G.L. Bajaj Institute of Technology & Management",
    date: "September 2024",
    desc: "Represented in committee discussions, debating on global issues and drafting resolutions. Enhanced public speaking, research, diplomacy, and negotiation skills while collaborating with international delegates in a professional conference environment.",
    skills: [
      "Public Speaking",
      "Research",
      "Diplomacy",
      "Negotiation",
      "Critical Thinking",
    ],
    img: munLogo,   // ✅
  },
  {
    id: 3,
    role: "Volunteer – 3rd ICDT",
    company: "G.L. Bajaj Institute of Technology & Management",
    date: "March 2025",
    desc: "Contributed as a volunteer in organizing an international IEEE-recognized conference in 2025. Assisted with event coordination, logistics, and participant management. Developed strong teamwork and leadership skills while ensuring smooth execution of the conference.",
    skills: ["Teamwork", "Leadership", "Event Management", "Communication"],
    img: icdtLogo,  // ✅
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <motion.div
  initial={{
    opacity: 0,
    x: index % 2 === 0 ? 80 : -80, // slide in opposite side
  }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }} // ✅ slow + smooth
  viewport={{ once: true }}
  className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
    index % 2 === 0 ? "sm:mr-30" : "sm:ml-30"
  } ml-8 transform transition-transform duration-300 hover:scale-105`}
>

              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
               {/* Company Logo/Image */}
<div className="w-16 h-16 bg-white rounded-md overflow-hidden flex justify-center items-center">
  <img
    src={experience.img}
    alt={experience.company}
    className="max-w-full max-h-full object-contain"
  />
</div>


                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;