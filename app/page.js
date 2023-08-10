"use client";
import { loadFull } from "tsparticles";
import { useRouter } from "next/navigation";
import Particles from "react-particles";
import BdCake from "./components/BdCake";
import { stagger, useAnimate } from "framer-motion";

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export default function Home() {
  const router = useRouter();
  const [scope, animate] = useAnimate();

  const onButtonClick = async () => {
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    await animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
    setTimeout(() => {
      router.push("/details");
    }, 300);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ position: "absolute", zIndex: 80 }}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: {
                value: "#fff",
              },
              opacity: 1,
            },
            enable: false,
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: [],
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: false,
                mode: [],
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: {
                delay: 0.5,
                enable: true,
              },
            },
            modes: {
              trail: {
                delay: 1,
                pauseOnStop: false,
                quantity: 1,
              },
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 2,
              },
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              enable: false,
              maxSpeed: 50,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#FF03FE",
              animation: {
                h: {
                  count: 0,
                  enable: true,
                  offset: 0,
                  speed: 50,
                  delay: 0,
                  decay: 0,
                  sync: false,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
              },
            },
            groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0.1,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 10,
                enable: true,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "destroy",
                bottom: "destroy",
                left: "destroy",
                right: "destroy",
                top: "none",
              },
              random: false,
              size: false,
              speed: {
                min: 10,
                max: 20,
              },
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fill: {},
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: false,
                width: 1920,
                height: 1080,
              },
              limit: 0,
              value: 0,
            },
            opacity: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 2,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "max",
                destroy: "min",
                minimumValue: 0,
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              close: true,
              fill: true,
              options: {},
              type: "square",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: {
                min: 2,
                max: 4,
              },
              animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 3,
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enable: true,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: {
                min: 15,
                max: 25,
              },
            },
            tilt: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
                decay: 0,
                sync: false,
              },
              direction: "random",
              enable: true,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                angle: {
                  min: -15,
                  max: 15,
                },
                move: 10,
              },
            },
            life: {
              count: 1,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 5,
                sync: true,
              },
            },
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
                decay: 0,
                sync: false,
              },
              direction: "random",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "#fff",
              },
              consent: false,
              distance: 100,
              enable: false,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          emitters: {
            autoPlay: true,
            fill: true,
            life: {
              wait: false,
              count: 0,
              delay: 0.4,
              duration: 0.1,
            },
            rate: {
              quantity: 150,
              delay: 0.1,
            },
            shape: "square",
            startCount: 0,
            size: {
              mode: "percent",
              height: 0,
              width: 0,
            },
            particles: {},
            position: {},
          },
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
        }}
      />
      <button
        ref={scope}
        onClick={onButtonClick}
        className="relative rounded-full border-2 border-pink-600 px-6 py-2 text-2xl text-pink-600 transition-colors hover:bg-pink-100 font-sans mt-6 animate-pulse"
      >
        <span className="sr-only">Zaproszenie</span>
        <span className="block h-8 overflow-hidden" aria-hidden>
          {["Z", "a", "p", "r", "o", "s", "z", "e", "n", "i", "e"].map(
            (letter, index) => (
              <span
                data-letter={letter}
                className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
                key={`${letter}-${index}`}
              >
                {letter}
              </span>
            )
          )}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 block"
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <svg
              className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
              key={index}
              viewBox="0 0 122 117"
              width="10"
              height="10"
            >
              <path
                className="fill-pink-600"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </button>
      <div className="w-full flex flex-1 items-center place mx-0">
        <BdCake />
      </div>
    </>
  );
}
