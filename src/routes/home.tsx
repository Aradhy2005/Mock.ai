import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        {/* Header */}
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl leading-snug">
            <span className="inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5B21B6] via-[#3B82F6] to-[#06B6D4] animate-glow text-[2.8rem] md:text-[4.5rem]">
              AI-Driven Prep
            </span>
            <span className="inline-block ml-2 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-transparent font-semibold">
              – A better way to
            </span>

            <div className="mt-2 text-center md:text-left">
              <span className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#5B21B6] animate-glow text-xl md:text-2xl">
                Ace your interviews with the power of AI.
              </span>
            </div>

            <div className="h-4" />
            <div className="block font-extrabold text-gray-900 dark:text-white text-3xl md:text-5xl tracking-tight animate-slide-up">
              land your dream job with AI.
            </div>
          </h2>

          <p className="mt-8 text-base md:text-lg text-center md:text-left text-gray-600 dark:text-gray-300 font-medium animate-fade-in-up">
            Boost your interview skills and increase your success rate with{" "}
            <span className="text-black dark:text-white font-semibold">
              AI-driven insights
            </span>
            . Discover a smarter way to prepare, practice, and stand out.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 md:px-12 md:py-16">
          <div className="text-center animate-fade-in-up">
            <p className="text-4xl md:text-5xl font-extrabold text-rose-500 dark:text-rose-400 animate-pulse">
              250k+
            </p>
            <span className="block mt-1 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium">
              Offers Received
            </span>
          </div>

          <div className="text-center animate-fade-in-up delay-150">
            <p className="text-4xl md:text-5xl font-extrabold text-amber-500 dark:text-amber-400 animate-pulse">
              1.2M+
            </p>
            <span className="block mt-1 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium">
              Interview Aced
            </span>
          </div>
        </div>

        {/* Image + Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full mt-4 rounded-xl overflow-hidden relative"
        >
          {/* Animated Image */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <motion.img
              src="/assets/img/hero.jpg"
              alt="Hero AI Image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[550px] md:h-[650px] object-cover object-top rounded-xl"
            />
          </motion.div>

          {/* Desktop Card with animation */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{
              scale: 1.04,
              rotate: 1,
              boxShadow: "0px 14px 50px rgba(0, 0, 0, 0.35)",
            }}
            className="hidden md:block absolute w-96 bottom-10 right-6 p-8 rounded-2xl bg-gradient-to-br from-black/60 via-black/40 to-black/20 backdrop-blur-xl shadow-2xl border border-white/10"
          >
            <h2 className="text-white text-xl font-semibold mb-2">
              Developer
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Smart AI-powered mock interviews built just for developers. Train
              with realistic questions and get closer to your dream job.
            </p>
            <Link to="/generate" className="block w-fit">
              <Button className="mt-4 bg-white text-black hover:bg-gray-200">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Card - below image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.3)",
          }}
          className="md:hidden -mt-2 mb-6 w-full rounded-xl bg-gradient-to-br from-black/60 via-black/40 to-black/20 backdrop-blur-xl shadow-2xl border border-white/10 p-4"
        >
          <h2 className="text-white text-lg font-semibold mb-2">Developer</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Smart AI-powered mock interviews built just for developers. Train
            with realistic questions and get closer to your dream job.
          </p>
          <Link to="/generate" className="block w-fit">
            <Button className="mt-3 bg-white text-black hover:bg-gray-200">
              Generate <Sparkles className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </Container>

      {/* Marquee */}
      <div className="w-full my-12">
        <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      {/* CTA Section */}
      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt="Office"
              className="w-full max-h-96 rounded-md object-cover object-[center_80%]"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in today’s
              competitive job market.
            </p>
            
            <Link to="/generate" className="w-full">
              <Button className="w-3/4">
                Generate Interview <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
