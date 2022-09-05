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
      
      <section className="container mx-auto">
        <div class="min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img className=" md:max-w-sm rounded-full shadow-2xl hover:scale-75 duration-1000 hover:border hover:border-primary"
              src={image} alt="profile"/>
            <div>
              <h1 class="text-4xl font-bold mb-4">
              <span>
          Hello, I'M 🙋‍♂️{" "}
          
          <span  className="text-primary ">
            <Typical loop={Infinity} steps={["MD. Mozammel Hoq", 2000]} />
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
              <p className="py-6">
              <AnimatedText
            type="charts" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="wave"
            interval={0.06}
            duration={0.5}
            tag="p"
            className="animated-paragraph fw-bold font-monospace"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            I'm a Front End Developer based in Bangladesh. I describe myself as
            a passionate developer who loves coding, open source, and the web
            platform. I like to create projects. That helps me to learn and grow
            as a developer. Also I enjoy making technical things at my college
            lab. In my free time you can find me tourist place ,at field , at
            the road on cycling around Chittagong bangladesh. My future thinking
            is that I will be a full fledged web developer, this is my
            profession, passion and dream. I spend 8 to 12 hours a day trying to
            reach my goals. And I am thinking of building a career in this field
            in the future. Thank You ❤️
          </AnimatedText>
              </p>
              <button class="btn btn-primary btn-sm hover:bg-transparent hover:text-primary font-bold ">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Banner;
