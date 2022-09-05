import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { transparent } from "daisyui/src/colors";
import themes from "daisyui/src/colors/themes";
import React, { useCallback } from "react";
import AnimatedText from "react-animated-text-content";
import Particles from "react-tsparticles";
import Typical from "react-typical";
import { loadFull } from "tsparticles";
import image from "../../../Asset/profile.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <section className=" banner">
        <div className=" container mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              className=" md:max-w-sm rounded-full shadow-2xl hover:scale-75 duration-1000 hover:border hover:border-primary"
              src={image}
              alt="profile"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">
                <span>
                  Hello, I'M 🙋‍♂️{" "}
                  <span className="text-primary ">
                    <Typical
                      loop={Infinity}
                      steps={["MD. Mozammel Hoq", 2000]}
                    />
                  </span>
                </span>
              </h1>

              <h2 className="text-2xl font-semibold">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Dev 🎯",
                    3000,
                    "MERN Stack Dev 😎",
                    3000,
                    "React Js Dev ⚛️",
                    3000,
                  ]}
                />
              </h2>
              <p className="py-6 text-dark">
                I'm a Front End Developer based in Bangladesh. I describe myself
                as a passionate developer who loves coding, open source, and the
                web platform. I like to create projects. That helps me to learn
                and grow as a developer. Also I enjoy making technical things at
                my college lab. In my free time you can find me tourist place
                ,at field , at the road on cycling around Chittagong bangladesh.
                My future thinking is that I will be a full fledged web
                developer, this is my profession, passion and dream. I spend 8
                to 12 hours a day trying to reach my goals. And I am thinking of
                building a career in this field in the future. Thank You ❤️
              </p>
              <button className="btn btn-primary  hover:bg-transparent hover:text-primary font-bold ">
                <a href="">
                  <FontAwesomeIcon icon={faDownload} /> Download_Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
