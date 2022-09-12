import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      img1: "https://placeimg.com/260/400/arch",
      img2: "https://placeimg.com/260/400/arch",
      img3: "https://placeimg.com/260/400/arch",
      technology: ["Html5", "Css3", "Javascript", "Node js"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      title: "Card 2",
      img1: "https://placeimg.com/260/400/arch",
      img2: "https://placeimg.com/260/400/arch",
      img3: "https://placeimg.com/260/400/arch",
      technology: ["Html5", "Css3", "Javascript", "Node js"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 3,
      title: "Card 3",
      img1: "https://placeimg.com/260/400/arch",
      img2: "https://placeimg.com/260/400/arch",
      img3: "https://placeimg.com/260/400/arch",
      technology  : ["Html5", "Css3", "Javascript", "Node js"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 4,
      title: "Card 4",
      img1: "https://placeimg.com/260/400/arch",
      img2: "https://placeimg.com/260/400/arch",
      img3: "https://placeimg.com/260/400/arch",
      technology: ["Html5", "Css3", "Javascript", "Node js"], 
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 5,
      title: "Card 5",
      img1: "https://placeimg.com/260/400/arch",
      img2: "https://placeimg.com/260/400/arch",
      img3: "https://placeimg.com/260/400/arch",
      technology: ["Html5", "Css3", "Javascript", "Node js"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 6,
      title: "Card 6",
      img1: "https://placeimg.com/260/400/arch",
      img2: "https://placeimg.com/260/400/arch",
      img3: "https://placeimg.com/260/400/arch",
      technology: ["Html5", "Css3", "Javascript", "Node js", "React js", "Mongo db"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];
  return (<div className="container mx-auto my-12">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  px-4">
        {cards.map(card => (
            <Card
            card={card}
            key={ card.id }></Card>
        ))}
    </div>
  </div>);
};

export default Cards;
