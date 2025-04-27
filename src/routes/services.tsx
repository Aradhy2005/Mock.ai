// File: src/routes/services.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      {/* ✅ Core Service Card */}
      <motion.div
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-2">🧠 Mock Interview Generator</h2>
        <p className="text-gray-600 mb-4">
          Get AI-generated interview questions based on your selected role and domain.
          Practice real-time and boost your confidence through realistic simulations.
        </p>
        <Button
          variant="default"
          onClick={() => navigate("/generate")}
          className="transition-transform hover:scale-105"
        >
          Try Now
        </Button>
      </motion.div>

      {/* 🚧 Upcoming Services Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-dashed border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">🚀 Upcoming Services</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-sm border"
          >
            <h3 className="font-medium text-lg">📘 Interview Prep Material</h3>
            <p className="text-sm text-gray-600">
              Curated questions, behavioral tips, cheat sheets, and learning resources to help you ace interviews.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl shadow-sm border"
          >
            <h3 className="font-medium text-lg">📄 AI Resume Builder & Analyzer</h3>
            <p className="text-sm text-gray-600">
              Get AI-powered resume suggestions, formatting tips, and job-targeted keyword enhancements.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
