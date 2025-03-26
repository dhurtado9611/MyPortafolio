import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-cyan-400 hover:text-blue-400 transition duration-300">
            Daniel
          </span>
          ,<br />
          web developer Full Stack
        </h1>
        <p className="text-gray-400 mt-4">
          Front End Developer / WordPress Expert
        </p>
        <button className="mt-8 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 rounded-full">
          Contact me!
        </button>
      </div>
    </div>
  );
}
