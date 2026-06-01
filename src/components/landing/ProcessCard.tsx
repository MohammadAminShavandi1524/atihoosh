import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TechnicalBackground from "./TechnicalBackground";

type ProcessCardProps = {
  title: string;
  description: string;
  className?: string;
  accentColor: string;
};

function ProcessCard({
  title,
  description,
  className,
  accentColor,
}: ProcessCardProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative h-[400px] w-[650px] overflow-hidden rounded-3xl bg-[#0041f0] p-14",
        className,
      )}
    >
      <TechnicalBackground />

      {/* Title */}
      <motion.h3
        variants={{
          initial: {
            y: 0,
            opacity: 1,
          },
          hover: {
            y: "-120%",
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-14 left-14 z-10 text-3xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={{
          initial: {
            opacity: 0,
            y: 320,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-36 left-14 z-10 max-w-[500px] text-xl leading-10 whitespace-pre-line text-white/70"
      >
        {description}
      </motion.p>

      {/* Button */}
      <motion.button
        variants={{
          initial: {
            opacity: 0,
            y: 360,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute right-14 bottom-14 z-10 flex items-center gap-2 text-lg"
      >
        <span>Learn More</span>

        <motion.div
          variants={{
            initial: {
              x: 0,
            },
            hover: {
              x: 6,
            },
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ChevronRight size={20} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

export default ProcessCard;
