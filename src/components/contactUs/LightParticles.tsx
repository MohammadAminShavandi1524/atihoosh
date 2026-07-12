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

  const particlesLoaded = async (_container?: Container): Promise<void> => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles-light"
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
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 3,
                },
                grab: {
                  distance: 180,
                  links: {
                    opacity: 0.25,
                  },
                },
                repulse: {
                  distance: 120,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#0F766E", "#0D9488", "#14B8A6", "#5EEAD4"],
              },

              links: {
                color: "#14B8A6",
                distance: 170,
                enable: true,
                opacity: 0.15,
                width: 1,
              },

              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1.2,
                straight: false,
              },

              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                value: 100,
              },

              opacity: {
                value: {
                  min: 0.35,
                  max: 0.75,
                },
              },

              shape: {
                type: "circle",
              },

              size: {
                value: {
                  min: 2,
                  max: 4,
                },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default LightParticles;
