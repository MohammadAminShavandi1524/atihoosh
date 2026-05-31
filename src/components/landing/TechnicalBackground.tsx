"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function TechnicalBackground() {
  const paths = [
    "M40 80 H240 V180 H420",
    "M120 420 H280 V320 H520",
    "M600 60 V220 H480",
    "M700 340 H560 V460",
    "M180 120 V260 H320",
    "M500 120 H620 V240",
    "M320 260 V420 H440",
    "M60 260 H180 V360",
    "M260 60 H460",
    "M340 420 H640",
  ];

  const nodes = [
    { cx: 240, cy: 80, r: 10 },
    { cx: 420, cy: 180, r: 8 },
    { cx: 520, cy: 320, r: 12 },
    { cx: 320, cy: 260, r: 9 },
    { cx: 560, cy: 340, r: 11 },
  ];

  const capsules = [
    {
      x: 390,
      y: 160,
      width: 90,
      height: 34,
      rx: 17,
    },
    {
      x: 130,
      y: 245,
      width: 110,
      height: 40,
      rx: 20,
    },
    {
      x: 500,
      y: 100,
      width: 95,
      height: 32,
      rx: 16,
    },
  ];

  return (
    <motion.svg
      viewBox="0 0 750 500"
      className="absolute inset-0 h-full w-full"
      variants={{
        initial: {
          opacity: 1,
        },
        hover: {
          opacity: 0.15,
        },
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {/* PATHS */}
      {paths.map((path, index) => (
        <motion.path
          key={index}
          d={path}
          stroke="rgba(255,255,255,.18)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          variants={{
            initial: {
              pathLength: 1,
              opacity: 1,
            },
            hover: {
              pathLength: 0,
              opacity: 0,
            },
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.03,
            ease,
          }}
        />
      ))}

      {/* CIRCLES */}
      {nodes.map((node, index) => (
        <motion.circle
          key={index}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          stroke="rgba(255,255,255,.22)"
          strokeWidth="2"
          fill="transparent"
          variants={{
            initial: {
              scale: 1,
              opacity: 1,
            },
            hover: {
              scale: 0,
              opacity: 0,
            },
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.02,
            ease,
          }}
        />
      ))}

      {/* CAPSULES */}
      {capsules.map((shape, index) => (
        <motion.rect
          key={index}
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          rx={shape.rx}
          fill="transparent"
          stroke="rgba(255,255,255,.15)"
          strokeWidth="2"
          variants={{
            initial: {
              scale: 1,
              opacity: 1,
            },
            hover: {
              scale: 0,
              opacity: 0,
            },
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.04,
            ease,
          }}
        />
      ))}
    </motion.svg>
  );
}