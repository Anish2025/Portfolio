// import React from "react";
// import { motion } from "framer-motion";

// const Skill = ({ name, x, y }) => {
//   return (
//     <motion.div
//       className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark  py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
//       whileHover={{ scale: 1.05 }}
//       initial={{ x: 0, y: 0 }}
//       whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
//       viewport={{ once: true }}
//     >
//       {name}
//     </motion.div>
//   );
// };
// const Skills = () => {
//   return (
//     <>
//       <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 ">
//         Skills
//       </h2>
//       <div
//         className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[40vh] 
//       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
//       md:bg-circularLightMd md:dark:bg-circularDarkMd
//       sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
//       >
//         <motion.div
//           className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 dark:bg-light dark:text-dark shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
//           whileHover={{ scale: 1.05 }}
//         >
//           Web
//         </motion.div>
//         <Skill name="ReactJS" x="-25vw" y="2vw" />
//         <Skill name="CSS" x="-5vw" y="-10vw" />
//         <Skill name="Javascript" x="20vw" y="6vw" />
//         <Skill name="HTML" x="0vw" y="12vw" />
//         <Skill name="NextJS" x="-20vw" y="-15vw" />
//         <Skill name="NodeJS" x="15vw" y="-12vw" />
//         <Skill name="ExpressJS" x="32vw" y="-5vw" />
//         <Skill name="Canva" x="0vw" y="-20vw" />
//         <Skill name="MongoDB" x="-25vw" y="18vw" />
//         <Skill name="Tailwind CSS" x="18vw" y="18vw" />
//       </div>
//     </>
//   );
// };

// export default Skills;

"use client"; // ✅ Add this if you're using Next.js App Router (in app/ folder)

import React from "react";
import { motion } from "framer-motion";

// Skill component
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

// Main Skills component
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
          lg:h-[80vh] sm:h-[60vh] xs:h-[40vh] 
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg
          md:bg-circularLightMd md:dark:bg-circularDarkMd
          sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 dark:bg-light dark:text-dark shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {/* Languages */}
        <Skill name="C" x="-22vw" y="-10vw" />
        <Skill name="Java" x="26vw" y="-2vw" />
        <Skill name="SQL" x="-18vw" y="10vw" />
        <Skill name="HTML" x="0vw" y="12vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="TypeScript" x="12vw" y="-20vw" />

        {/* Frameworks/Technologies */}
        <Skill name="ReactJS" x="-25vw" y="2vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="ExpressJS" x="32vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />

        {/* Databases */}
        <Skill name="MongoDB" x="-25vw" y="18vw" />
        <Skill name="MySQL" x="28vw" y="14vw" />
        <Skill name="Convex" x="0vw" y="-22vw" />

        {/* Version Control */}
        <Skill name="Git" x="15vw" y="-26vw" />
        <Skill name="GitHub" x="-15vw" y="-26vw" />

        {/* Miscellaneous */}
        <Skill name="Postman" x="30vw" y="-15vw" />
      </div>
    </>
  );
};

export default Skills;
