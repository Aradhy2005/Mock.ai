import React, { useState } from "react";
import { RecordAnswer } from "./record-answer";
import { motion } from "framer-motion";

export const AvatarInterview = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const question = "Can you tell me about yourself?";

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    setIsSpeaking(true);
    speechSynthesis.speak(utterance);
    utterance.onend = () => setIsSpeaking(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200 p-6"
    >
      <motion.div
        animate={{
          scale: isSpeaking ? [1, 1.05, 1] : 1,
          rotate: isSpeaking ? [0, 1, -1, 0] : 0,
        }}
        transition={{
          repeat: isSpeaking ? Infinity : 0,
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative mb-8"
      >
        <img
          src="/avatar.jpg"
          alt="AI Avatar"
          className="w-56 h-56 rounded-full shadow-2xl object-cover border-4 border-indigo-500"
        />

        {isSpeaking && (
          <motion.span
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full border-4 border-indigo-400"
          />
        )}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
      >
        {question}
      </motion.h2>

      <motion.button
        onClick={() => speak(question)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg shadow-lg hover:shadow-2xl transition-all"
      >
        🔊 Speak Question
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="w-full max-w-2xl mt-10"
      >
        <RecordAnswer
          question={{ question, answer: "" }}
          isWebCam={true}
          setIsWebCam={() => {}}
        />
      </motion.div>
    </motion.div>
  );
};
