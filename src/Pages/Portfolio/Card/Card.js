import React from "react";
import "./Card.css";
const Card = ({ card }) => {
  const { title, img1, description, technology } = card;
  

  return (
    <div class="shadow-lg text-justify  shadow-slate-300  bg-slate-300  rounded-xl  hover:bg-transparent  hover:duration-500 duration-500 hover:rounded-xl hover:shadow-md hover:shadow-indigo-300">
      <div class="flex">
        <div className=" flex-1 max-h-[200px]  portfolio ">
          <img src={img1} class=" w-full" alt="" />
        </div>
        <div className="flex-1 p-3 text-center">
          <h1 class="text-2xl font-bold">{title}</h1>
          
          {technology.map((tech) => (
            <kbd class="kbd kbd-xs m-2 hover:bg-primary hover:cursor-help duration-1000 hover:duration-1000 hover:text-white">{tech.toUpperCase()}</kbd>
          ))}
          
        </div>
      </div>
      <p class=" p-2">{description.slice(0, 100)} {" "}<span className="font-bold">Read More</span></p>
    </div>
  );
};

export default Card;
