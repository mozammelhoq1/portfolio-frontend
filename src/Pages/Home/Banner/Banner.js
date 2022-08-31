import React from "react";
import Typical from "react-typical";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://placeimg.com/1000/800/arch)" }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
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
    </div>
  );
};

export default Banner;
