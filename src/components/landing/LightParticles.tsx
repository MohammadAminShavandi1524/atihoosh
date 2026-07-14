"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const LightParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (_container?: Container) => {};

  return (
    <>
      {init && (
        <>
          {/* Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f9fcff_0%,#eef8fd_45%,#fdfefe_100%)]" />

          {/* Center Glow */}
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[150px]" />

          {/* Left Glow */}
          <div className="absolute -left-48 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-sky-200/35 blur-[130px]" />

          {/* Right Glow */}
          <div className="absolute -right-48 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-200/35 blur-[130px]" />

          <Particles
            id="light-particles"
            className="absolute inset-0 h-full w-full max-lg:hidden"
            particlesLoaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: false,
              },

              background: {
                color: {
                  value: "transparent",
                },
              },

              fpsLimit: 120,

              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },

                  onClick: {
                    enable: true,
                    mode: "push",
                  },

                  resize: {
                    enable: true,
                  },
                },

                modes: {
                  push: {
                    quantity: 2,
                  },

                  grab: {
                    distance: 180,

                    links: {
                      opacity: 0.22,
                    },
                  },
                },
              },

              particles: {
                color: {
                  value: [
                    "#60A5FA",
                    "#38BDF8",
                    "#7DD3FC",
                    "#93C5FD",
                    "#67E8F9",
                  ],
                },

                links: {
                  enable: true,
                  color: "#7DD3FC",
                  distance: 180,
                  opacity: 0.08,
                  width: 1,
                },

                move: {
                  enable: true,
                  direction: "none",
                  random: true,
                  speed: 0.9,
                  straight: false,

                  outModes: {
                    default: "bounce",
                  },
                },

                number: {
                  value: 90,

                  density: {
                    enable: true,
                    width: 1920,
                    height: 480,
                  },
                },

                opacity: {
                  value: {
                    min: 0.18,
                    max: 0.45,
                  },
                },

                shape: {
                  type: "circle",
                },

                size: {
                  value: {
                    min: 1.5,
                    max: 3.5,
                  },

                  animation: {
                    enable: true,
                    speed: 1.5,
                    sync: false,
                  },
                },
              },

              detectRetina: true,
            }}
          />

          {/* Top Highlight */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/70 to-transparent" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

          {/* Noise */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,.35) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
        </>
      )}
    </>
  );
};

export default LightParticles;