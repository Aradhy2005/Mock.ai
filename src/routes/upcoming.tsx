import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Upcoming = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6">
      {/* Floating icon */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="text-6xl mb-4 animate-bounce">🚀</div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Big Things Are Coming!
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-600 text-center max-w-2xl text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        We're working on exciting features like an <strong>AI Resume Builder</strong> and curated <strong>Interview Preparation Material</strong> to elevate your placement journey.
      </motion.p>

      {/* Quote */}
      <motion.blockquote
        className="italic text-gray-500 text-center max-w-xl mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        “The best way to predict the future is to create it.” — Peter Drucker
      </motion.blockquote>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button onClick={() => navigate("/")} className="px-6 py-2 text-lg rounded-xl">
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default Upcoming;
