// src/routes/contact.tsx or src/pages/contact.tsx

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Contact = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2f3] to-[#cfd9df] p-6">
      {/* Background Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-30 blur-3xl rounded-full" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="z-10 w-full max-w-5xl backdrop-blur-xl bg-white/50 border border-white/20 rounded-2xl shadow-2xl p-8 space-y-10"
      >
        {/* Header */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-center text-gray-600 max-w-2xl mx-auto"
        >
          💬 “The best way to predict the future is to create it.” — Let’s connect and make something amazing together.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">mock.ai.team@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 9335853717</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Kanpur, Uttar Pradesh</p>
              </div>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.form
            variants={fadeInUp}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" rows={4} required />
            <Button className="w-full flex gap-2 items-center">
              <Send className="w-4 h-4" /> Send Message
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
