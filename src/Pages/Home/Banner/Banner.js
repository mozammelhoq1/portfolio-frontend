import { transparent } from "daisyui/src/colors";
import themes from "daisyui/src/colors/themes";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import Typical from "react-typical";
import { loadFull } from "tsparticles";
import './Banner.css';
const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);
const particlesLoaded = useCallback(async (container) => {
  await console.log(container);
}, []);
  return (
    <>
    
    
      <div className="hero-content text-center text-light-content">
        <div className="max-w-md">
          <span>
            Hello, I'M 🙋‍♂️{" "}
            <span>
              <Typical loop={Infinity} steps={["MD Mozammel Hoq", 2000]} />
            </span>
          </span>
          <h2>
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Dev  💻",
                3000,
                "Frontend Dev 🎯",
                3000,
                "MERN Stack Dev 😎",
                3000,
                "React Js Dev ⚛️",
                3000,
                "React Native Dev 📱",
                3000,
              ]}
            />
          </h2>
        </div>
      </div>
      </>
  );
};

export default Banner;
