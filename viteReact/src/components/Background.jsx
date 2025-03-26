import { motion } from "framer-motion";

const waveVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-1]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primera onda */}
        <motion.path
          d="M0,100 C150,200 350,0 500,100 S750,300 800,200"
          stroke="#00ffff"
          strokeWidth="2"
          fill="none"
          variants={waveVariants}
          initial="hidden"
          animate="visible"
        />
        {/* Segunda onda */}
        <motion.path
          d="M0,200 C150,300 350,100 500,200 S750,400 800,300"
          stroke="#00ffff"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
          variants={waveVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
      </svg>
    </div>
  );
}