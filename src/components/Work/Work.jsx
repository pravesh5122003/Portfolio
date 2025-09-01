// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // ✅ Import motion

// // ✅ Updated Projects Data
// const projects = [
//   {
//     id: 1,
//     title: "Restaurent Delivery & Dien-in Website with Payment Integration",
//     description:
//       "Developed a full-scale restaurent delivery platform with real-time cart management, order tracking, and secure online payments. Implemented Stripe integration for seamless transactions and a seller dashboard to manage orders.",
//     tags: ["MERN", "React", "Stripe", "Node.js", "Express", "MongoDB"],
//     image: "/src/assets/work_logo/restaurent.png",
//     github: "https://github.com/pravesh5122003/Restaurent-Full-Mern-Website",
//     webapp: "https://your-grocery-app-link.com",
//   },
//   {
//     id: 2,
//     title: "AI Based Helmet Detection Ignition Control",
//     description:
//       "Developed a smart helmet detection system using machine learning with OpenCV and real-time camera feed to ensure two-wheeler safety through automatic ignition control, trained on image datasets to classify riders with/without helmets, helping improve road safety.",
//     tags: ["AI", "Deep Learning", "Python", "OpenCV", "TensorFlow"],
//     image: "/src/assets/work_logo/helmet.png",
//     github: "https://github.com/yourusername/helmet-detection",
//     webapp: "https://your-helmet-detection-demo.com",
//   },
//   {
//     id: 3,
//     title: "Gym Management Website",
//     description:
//       "A full-stack MERN website for gym management, featuring user authentication, membership plans, and workout tracking. Focused on creating a responsive and modern interface with seamless data handling.",
//     tags: ["MERN", "React", "Node.js", "Express", "MongoDB"],
//     image: "/src/assets/work_logo/gym.png",
//     github: "https://github.com/pravesh5122003/Gym-website",
//     webapp: "https://your-gym-app-link.com",
//   },
// ];

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section
//       id="work"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A showcase of the projects I have worked on, highlighting my skills
//           and experience in various technologies
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
//           >
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-xl"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
//                 {project.description}
//               </p>
//               <div className="mb-4">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal Container with AnimatePresence */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="flex justify-end p-4">
//                 <button
//                   onClick={handleCloseModal}
//                   className="text-white text-3xl font-bold hover:text-purple-500"
//                 >
//                   &times;
//                 </button>
//               </div>

//               <div className="flex flex-col">
//                 <div className="w-full flex justify-center bg-gray-900 px-4">
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
//                   />
//                 </div>
//                 <div className="lg:p-8 p-6">
//                   <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
//                     {selectedProject.title}
//                   </h3>
//                   <p className="text-gray-400 mb-6 lg:text-base text-xs">
//                     {selectedProject.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {selectedProject.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">
//                     <a
//                       href={selectedProject.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                     >
//                       View Code
//                     </a>
//                     <a
//                       href={selectedProject.webapp}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
//                     >
//                       View Live
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Work;

import restaurentImg from "../../assets/work_logo/restaurent.png";
import helmetImg from "../../assets/work_logo/helmet.png";
import gymImg from "../../assets/work_logo/gym.png";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import motion

// ✅ Updated Projects Data
const projects = [
  {
    id: 1,
    title: "Restaurent Delivery & Dien-in Website with Payment Integration",
    description:
      "Developed a full-scale restaurent delivery platform with real-time cart management, order tracking, and secure online payments. Implemented Stripe integration for seamless transactions and a seller dashboard to manage orders.",
    tags: ["MERN", "React", "Stripe", "Node.js", "Express", "MongoDB"],
    image: restaurentImg,
    github: "https://github.com/pravesh5122003/Restaurent-Full-Mern-Website",
    webapp: "https://your-grocery-app-link.com",
  },
  {
    id: 2,
    title: "AI Based Helmet Detection Ignition Control",
    description:
      "Developed a smart helmet detection system using machine learning with OpenCV and real-time camera feed to ensure two-wheeler safety through automatic ignition control, trained on image datasets to classify riders with/without helmets, helping improve road safety.",
    tags: ["AI", "Deep Learning", "Python", "OpenCV", "TensorFlow"],
    image: helmetImg,
    github: "https://github.com/yourusername/helmet-detection",
    webapp: "https://your-helmet-detection-demo.com",
  },
  {
    id: 3,
    title: "Gym Management Website",
    description:
      "A full-stack MERN website for gym management, featuring user authentication, membership plans, and workout tracking. Focused on creating a responsive and modern interface with seamless data handling.",
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB"],
    image: gymImg,
    github: "https://github.com/pravesh5122003/Gym-website",
    webapp: "https://your-gym-app-link.com",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Container with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-purple-500"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                <div className="w-full flex justify-center bg-gray-900 px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                  />
                </div>
                <div className="lg:p-8 p-6">
                  <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6 lg:text-base text-xs">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

