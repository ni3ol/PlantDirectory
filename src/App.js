import React, { useState } from "react";
import "./App.css";
import plantGif from "./plants/smileplant.gif";
import Arum from "./plants/arum_lily.jpeg";
import Rhus from "./plants/rhus_crenata.jpeg";
import Dypsis from "./plants/dypsis_lutescens.jpeg";
import { PlantTable } from "./PlantTable";
import { Button } from "semantic-ui-react";

const plantData = [
  {
    category: 'indoor',
    image: Arum,
    heading: "Arum Lily",
    subHeading: "Flower",
    description: "This is a flower",
  },
  {
    category: 'indoor',
    image: Rhus,
    heading: "Rhus Crenata",
    subHeading: "Flower",
    description: "This is a flower",
  },

  {
    category: 'outdoor',
    image: Dypsis,
    heading: "Dypsis",
    subHeading: "Flower",
    description: "This is a flower",
  },
  {
    category: 'wishlist',
    image: plantGif,
    heading: "Hello hello hello",
    subHeading: "Flower",
    description: "This is a flower",
  },
];

export const App = () => {
  const [category, setCategory] = useState("indoor");

  return (
    <div className="page">
      <div className="banner">
        <img className="rotate330" src={plantGif} alt="missing" />
        The Tudor Gardens Plant Directory
        <img className="rotate30" src={plantGif} alt="missing" />
      </div>
      <div className="buttons">
        <Button
          className="button"
          color="green"
          onClick={() => setCategory("indoor")}
        >
          Indoor
        </Button>
        <Button
          className="button"
          color="green"
          onClick={() => setCategory("outdoor")}
        >
          Balcony
        </Button>
        <Button
          className="button"
          color="green"
          onClick={() => setCategory("wishlist")}
        >
          Wishlist
        </Button>
      </div>
      <PlantTable plants={category ? plantData.filter(plant => plant.category === category) : plantData} />
      <div className="footer">
        <span role="img" aria-label="Footer">
          Created by Niculu ❤️
        </span>
      </div>
    </div>
  );
};
