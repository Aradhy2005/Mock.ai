
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Plan {
  title: string;
  price: string;
  interviews: string;
  features: string[];
  highlight: string;
  gradient: string;
}

const plans: Plan[] = [
  {
    title: "Free",
    price: "$0",
    interviews: "4 Interviews",
    features: ["Basic AI interview simulation", "Access to feedback"],
    highlight: "Perfect for beginners",
    gradient: "from-[#fdfcfb] to-[#e2d1c3]",
  },
  {
    title: "Basic",
    price: "$7",
    interviews: "20 Interviews",
    features: ["Priority AI simulation", "Access to feedback", "Email support"],
    highlight: "For regular practice",
    gradient: "from-[#e0c3fc] to-[#8ec5fc]",
  },
  {
    title: "Premium",
    price: "$30",
    interviews: "Unlimited Interviews",
    features: [
      "All Basic features",
      "Early access to new tools",
      "Priority support",
    ],
    highlight: "Best for serious aspirants",
    gradient: "from-[#fbc2eb] to-[#a6c1ee]",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] p-6">
      {/* Background blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-pink-200 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-200 opacity-30 blur-3xl rounded-full" />

      <div className="z-10 w-full max-w-6xl backdrop-blur-xl bg-white/50 border border-white/20 rounded-3xl shadow-2xl p-10 space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          Choose Your Plan
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          💡 Start for free. Unlock premium features anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className={`bg-gradient-to-br ${plan.gradient} p-6 rounded-3xl shadow-xl border border-white/30`}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{plan.title}</h2>
                <p className="text-xl font-semibold text-gray-700">{plan.price}</p>
                <p className="text-sm text-gray-600">{plan.highlight}</p>
                <p className="text-sm font-medium text-gray-800">{plan.interviews}</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button className="bg-black text-white hover:bg-gray-800 w-full">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
