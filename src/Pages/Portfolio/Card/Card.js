import React from "react";
import './Card.css';
const Card = ({ card }) => {
  const { title, img1, description } = card;
  
  return (
      <div   class="shadow-lg  shadow-slate-300  bg-slate-300  rounded-xl  hover:bg-transparent  hover:duration-500 duration-500 hover:rounded-xl hover:shadow-md hover:shadow-indigo-300">
        <div class="flex">
            
          <div className=" flex-1 max-h-[200px]  portfolio ">
          <img src={img1} class=" w-full" alt="" />
          </div>
          <div className="flex-1 p-3 text-center">
            <h1 class="text-2xl font-bold">{title}</h1>
            <kbd class="kbd kbd-xs">Html5</kbd><kbd class="kbd kbd-xs">Css3</kbd><kbd class="kbd kbd-xs">javascript</kbd><kbd class="kbd kbd-xs">node js</kbd>
          </div>
        </div>
        <p class=" p-2">{description}</p>
      </div>
  );
};

export default Card;
