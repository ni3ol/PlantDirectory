import React, { useState, useEffect } from "react";

import { Button } from "semantic-ui-react";

import plantGif from "./plants/smileplant.gif";

import { CardList } from "./CardList";

import "./css/App.css";
import { AddModal } from "./AddModal";

export const App = () => {
  const [category, setCategory] = useState("all");
  const [plantData, setPlantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchPlants = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000");
    if (response.status !== 200) {
      setHasError(true);
    }
    const json = await response.json();
    setPlantData(json);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  if (hasError) {
    return <div>There was an error</div>;
  }

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
        <AddModal/>
      </div>
      {!isLoading && (
        <CardList
          plants={
            category === "all"
              ? plantData
              : plantData.filter((plant) => plant.category === category)
          }
        />
      )}
      <div className="footer">
        <span role="img" aria-label="Footer">
          Created by Niculu ❤️
        </span>
      </div>
    </div>
  );
};
