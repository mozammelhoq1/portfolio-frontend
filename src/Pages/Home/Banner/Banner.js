import { transparent } from "daisyui/src/colors";
import themes from "daisyui/src/colors/themes";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import Typical from "react-typical";
import { loadFull } from "tsparticles";
import image from "../../../Asset/profile.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="container mx-auto flex">
        <div className="flex-1">
        <h3 className="text-center lg:text-left">Welcome to my portfolio</h3>
        <h2>
          Hi, I'm <span className="text-primary">MD. Mozammel Hoq</span>
        </h2>
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
        <p>
          I am a web developer from Dhaka, Bangladesh. My expertise is in
          front-end web development. I know ReactJs, NodeJs, Express MongoDB,
          etc. I have a beautiful taste in technology. I have done a full stack
          web development course from programming hero to getting certified and
          now I am ready to put myself in working sectors.
        </p>

        <a
          href="https://drive.google.com/file/d/1yppXc_QMkVyvbgUj52f_cN3mEhzS3RVy/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Download Resume
          </button>
        </a>
        </div>
        <div className="flex-1">
        <img className="cursor-pointer rounded-full " src={image} alt="" />
        
        </div>
      </div>

      {/* <div className='flex flex-wrap container'>
          <div>
            <h4 className="mt-16">Find Me Online:</h4>
            <div className='mt-2'>
              <a href="https://www.facebook.com/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow p-2'>
                  <i className='fab fa-facebook-f text-blue-500'></i>
                </button>
              </a>
              <a href="https://www.facebook.com/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow p-2'>
                  <i className='fab fa-instagram text-orange-500'></i>
                </button>
              </a>
              <a href="https://www.twitter.com/robinrakibul_" target='_blank' rel="noreferrer">
                <button className='btn_shadow p-2'>
                  <i className='fab fa-twitter text-orange-500'></i>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow'>
                  <i className='fab fa-linkedin text-blue-500'></i>
                </button>
              </a>
              <a href="https://github.com/robinrakibul" target='_blank' rel="noreferrer">
                <button className='btn_shadow'>
                  <i className='fab fa-github text-black'></i>
                </button>
              </a>
              
            </div>
          </div>
        </div> */}

      {/* <div className="hero-content text-center text-light-content">
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
      </div> */}
    </>
  );
};

export default Banner;
