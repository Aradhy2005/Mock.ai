import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-blue-50 px-6 py-16 flex flex-col items-center justify-center">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Mock.AI
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Our journey began with a simple idea — to empower students and job seekers
        by simulating real-life interview experiences using AI.
        We believe that confidence and preparation are the keys to cracking any interview.
      </motion.p>

      {/* Mission and Vision Blocks */}
      <motion.div
        className="grid gap-6 md:grid-cols-2 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">🌟 Our Vision</h2>
          <p className="text-gray-700">
            To create an inclusive and accessible AI-powered platform where every learner,
            regardless of background, can practice, learn, and build interview confidence.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-600 mb-2">💡 Our Mission</h2>
          <p className="text-gray-700">
            We aim to provide realistic mock interview scenarios, insightful feedback, and a
            roadmap to self-improvement — helping users grow step by step toward their dream careers.
          </p>
        </div>
      </motion.div>

      {/* Final Quote */}
      <motion.blockquote
        className="mt-16 italic text-center text-gray-500 text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        “It’s not just about getting the right answers — it’s about practicing the right mindset.”
      </motion.blockquote>
    </div>
  );
};

export default About;
