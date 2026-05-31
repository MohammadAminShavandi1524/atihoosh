"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const _services = [
  {
    title: "Building an artificial intelligence agent",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta consequuntur aliquid debitis consectetur consequatur sint eius!",
  },
  {
    title: "Website Design ",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta consequuntur aliquid debitis consectetur consequatur sint eius!",
  },
  {
    title: "Application Design ",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta consequuntur aliquid debitis consectetur consequatur sint eius!",
  },
  {
    title: "Logo And Motion Logo ",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta consequuntur aliquid debitis consectetur consequatur sint eius!",
  },
];

const contentAnimation = {
  initial: {
    opacity: 0,
    x: 30,
    filter: "blur(8px)",
    transition: {
      duration: 0.15,
      delay: 0,
    },
  },
  hover: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface ServicesProps {}

const Services = ({}: ServicesProps) => {
  return (
    <div className="w90 flex justify-between gap-x-16 px-0 pt-20">
      {/* image container */}
      {_services.map((service, index) => {
        return (
          // <motion.div
          //   whileHover="hover"
          //   initial="initial"
          //   variants={{
          //     initial: { scale: 1 },
          //     hover: { scale: 1.03 },
          //   }}
          //   transition={{
          //     duration: 0.45,
          //     ease: [0.16, 1, 0.3, 1],
          //   }}
          //   className="relative h-140 w-full cursor-pointer overflow-hidden"
          // >
          //   {/* Image */}
          //   <motion.div
          //     variants={{
          //       initial: {
          //         opacity: 1,
          //       },
          //       hover: {
          //         opacity: 0,
          //       },
          //     }}
          //     transition={{
          //       duration: 0.4,
          //       ease: [0.16, 1, 0.3, 1],
          //     }}
          //     className="absolute inset-0"
          //   >
          //     <Image
          //       fill
          //       src="/serveiceSample.png"
          //       alt="sample"
          //       className="object-cover"
          //     />
          //   </motion.div>

          //   {/* Circle Background */}
          //   <motion.div
          //     variants={{
          //       initial: {
          //         opacity: 0,
          //         scale: 0.8,
          //       },
          //       hover: {
          //         opacity: 1,
          //         scale: 1,
          //       },
          //     }}
          //     transition={{
          //       duration: 0.45,
          //       ease: [0.16, 1, 0.3, 1],
          //     }}
          //     className="absolute -right-60 -bottom-60 h-282 w-282 rounded-full bg-gradient-to-tl from-[#31343e] via-[#1b212d] to-[#0f121b]"
          //   />

          //   <div className="relative z-10 flex h-full flex-col p-7">
          //     {/* Title */}
          //     <motion.h3
          //       variants={{
          //         initial: {
          //           y: 0,
          //         },
          //         hover: {
          //           y: -6,
          //         },
          //       }}
          //       transition={{
          //         duration: 0.45,
          //         ease: [0.16, 1, 0.3, 1],
          //       }}
          //       className="mb-10 text-2xl font-bold"
          //     >
          //       {service.title}
          //     </motion.h3>

          //     {/* Description */}
          //     <motion.p
          //       variants={{
          //         initial: {
          //           opacity: 0,
          //           x: 35,
          //           transition: {
          //             duration: 0.25,
          //             delay: 0,
          //           },
          //         },
          //         hover: {
          //           opacity: 1,
          //           x: 0,
          //           transition: {
          //             duration: 0.45,
          //             delay: 0.15,
          //             ease: [0.16, 1, 0.3, 1],
          //           },
          //         },
          //       }}
          //       className="mt-5 max-w-md text-lg"
          //     >
          //       {service.subTitle}
          //     </motion.p>

          //     {/* Expand Button */}
          //     <motion.button
          //       variants={{
          //         initial: {
          //           opacity: 0,
          //           y: 25,
          //           transition: {
          //             duration: 0.25,
          //             delay: 0,
          //           },
          //         },
          //         hover: {
          //           opacity: 1,
          //           y: 0,
          //           transition: {
          //             duration: 0.45,
          //             delay: 0.15,
          //             ease: [0.16, 1, 0.3, 1],
          //           },
          //         },
          //       }}
          //       className="mt-auto flex items-center gap-1.75 self-end"
          //     >
          //       <span className="pb-0.5 text-[22px]">Expand</span>

          //       <motion.div
          //         variants={{
          //           initial: {
          //             x: 0,
          //           },
          //           hover: {
          //             x: 6,
          //           },
          //         }}
          //         transition={{
          //           duration: 0.35,
          //           ease: [0.16, 1, 0.3, 1],
          //         }}
          //       >
          //         <ChevronRight size={24} />
          //       </motion.div>
          //     </motion.button>
          //   </div>
          // </motion.div>

          <motion.div
            key={index}
            whileHover="hover"
            initial="initial"
            variants={{
              initial: {
                scale: 1,
              },
              hover: {
                scale: 1.025,
              },
            }}
            transition={{
              duration: 0.55,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="relative h-140 w-full cursor-pointer overflow-hidden rounded-lg"
          >
            {/* Image */}
            <motion.div
              variants={{
                initial: {
                  opacity: 1,
                  scale: 1,
                },
                hover: {
                  opacity: 0.2,
                  scale: 1.08,
                },
              }}
              transition={{
                duration: 0.55,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                fill
                src="/serveiceSample.png"
                alt="sample"
                className="object-cover"
              />
            </motion.div>

            {/* color Background */}
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  scale: 0.7,
                },
                hover: {
                  opacity: 1,
                  scale: 1.15,
                },
              }}
              transition={{
                duration: 0.6,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="absolute -right-60 -bottom-60 h-282 w-282 rounded-full bg-gradient-to-tl from-[#31343e] via-[#1b212d] to-[#0f121b]"
            />

            <div className="relative z-10 flex h-full flex-col p-7">
              {/* Title */}
              <motion.h3 className="mb-10 text-2xl font-bold">
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={{
                  initial: {
                    opacity: 0,
                    x: 45,
                    transition: {
                      duration: 0.2,
                      delay: 0,
                    },
                  },
                  hover: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.55,
                      delay: 0.08,
                      ease: [0.19, 1, 0.22, 1],
                    },
                  },
                }}
                className="mt-5 max-w-md text-lg"
              >
                {service.subTitle}
              </motion.p>

              {/* Expand Button */}
              <motion.button
                variants={{
                  initial: {
                    opacity: 0,
                    y: 20,
                    transition: {
                      duration: 0.2,
                      delay: 0,
                    },
                  },
                  hover: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      delay: 0.08,
                      ease: [0.19, 1, 0.22, 1],
                    },
                  },
                }}
                className="mt-auto flex items-center gap-1.75 self-end"
              >
                <span className="pb-0.5 text-[22px]">Expand</span>

                <motion.div
                  variants={{
                    initial: {
                      x: 0,
                    },
                    hover: {
                      x: 8,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  <ChevronRight size={24} />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;
