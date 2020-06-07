import React, { useState, useEffect } from "react";

import { Button } from "semantic-ui-react";

import plantGif from "./plants/smileplant.gif";
import Arum from "./plants/arum_lily.jpeg";
import Rhus from "./plants/rhus_crenata.jpeg";
import Dypsis from "./plants/dypsis_lutescens.jpeg";

import { CardList } from "./CardList";

import "./css/App.css";

// const plantData = [
//   {
//     category: "indoor",
//     image: Arum,
//     heading: "Arum Lily",
//     subHeading: "Flower",
//     description: "This is a flower",
//     sun: 'Full sun',
//     water: 'Weekly',
//     feed: 'Bi-weekly'
//   },
//   {
//     category: "indoor",
//     image: Rhus,
//     heading: "Rhus Crenata",
//     subHeading: "Flower",
//     description: "This is a flower",
//     sun: 'Full sun',
//     water: 'Weekly',
//     feed: 'Bi-weekly'
//   },

//   {
//     category: "outdoor",
//     image: Dypsis,
//     heading: "Dypsis",
//     subHeading: "Flower",
//     description: "This is a flower",
//     sun: 'Full sun',
//     water: 'Weekly',
//     feed: 'Bi-weekly'
//   },
//   {
//     category: "outdoor",
//     image: plantGif,
//     heading: "Hello hello hello",
//     subHeading: "Flower",
//     description: "This is a flower",
//     sun: 'Full sun',
//     water: 'Weekly',
//     feed: 'Bi-weekly'
//   },
// ];

export const App = () => {
  const [category, setCategory] = useState("all");
  const [plantData, setPlantData] = useState([]);

  const fetchMessage = async () => {
    // Use Fetch API to fetch '/api' endpoint
    const response = await fetch("http://localhost:3000");
    const json = await response.json();
    console.log(json)
    setPlantData(json);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

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
          onClick={() => setCategory("all")}
        >
          All
        </Button>
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
          Outdoor
        </Button>
      </div>
      <CardList
        plants={
          category === "all"
            ? plantData
            : plantData.filter((plant) => plant.category === category)
        }
      />
      <div className="footer">
        <span role="img" aria-label="Footer">
          Created by Niculu ❤️
        </span>
      </div>
    </div>
  );
};
