import React from "react";
import "./Card.css";
const Card = ({ card }) => {
  const { title, img1, description, technology } = card;

  return (
    <div class="shadow-lg text-justify  shadow-slate-300  bg-slate-300  rounded-xl  hover:bg-transparent  hover:duration-500 duration-500 hover:rounded-xl hover:shadow-md hover:shadow-indigo-300">
      <div class="flex">
        <div className=" flex-1 max-h-[200px]  portfolio  rounded-br-xl hover:shadow-sm hover:shadow-indigo-400 duration-700 hover:duration-700 ">
          <img src={img1} class=" w-full  " alt="" />
        </div>
        <div className="flex-1 p-3 text-center">
          <h1 class="card-title text-2xl">{title}</h1>

          {technology.map((tech, index) => (
            <kbd
              class="kbd kbd-xs m-2 hover:bg-primary hover:cursor-help duration-1000 hover:duration-1000 hover:text-white"
              key={index}
            >
              {tech.toUpperCase()}
            </kbd>
          ))}
        </div>
      </div>
      <div className="p-2">
      <div className="my-2">
          <button className="btn btn-primary btn-xs  hover:bg-transparent hover:text-primary cursor-alias">
            Live Site
          </button>
        </div>
        <p class="cursor-pointer">
          {description.slice(0, 150)}{" "}
          <span className="font-bold ml-1 cursor-grabbing ">Read More</span>
        </p>
        
      </div>
    </div>
  );
};

export default Card;
