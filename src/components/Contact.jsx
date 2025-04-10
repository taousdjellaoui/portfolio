import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Reach Out</h3>

        <div className='mt-12 flex flex-col gap-6 text-white text-xl'>
  <a
    href='https://www.linkedin.com/in/taous-djellaoui-2874a1187'
    target='_blank'
    rel='noopener noreferrer'
    className='flex items-center hover:text-blue-400 transition-colors duration-300'
  >
    <FaLinkedin className='text-3xl' />
    <span className='ml-4'>Taous Djellaoui</span>
  </a>

  <a
    href='mailto:taousdjellaoui@gmail.com'
    className='flex items-center hover:text-red-400 transition-colors duration-300'
  >
    <FaEnvelope className='text-3xl' />
    <span className='ml-4'>taousdjellaoui@gmail.com</span>
  </a>

  <a
    href='https://github.com/taousdjellaoui'
    target='_blank'
    rel='noopener noreferrer'
    className='flex items-center hover:text-gray-400 transition-colors duration-300'
  >
    <FaGithub className='text-3xl' />
    <span className='ml-4'>taousdjellaoui</span>
  </a>
</div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");