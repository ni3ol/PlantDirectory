import React from "react";
import { Card } from "./Card";

export const CardList = (props) => {
  const plants = props.plants;
  return plants.map((plant) => (
    <Card
      image={plant.image}
      description={plant.description}
      heading={plant.heading}
      subHeading={plant.subHeading}
      sun={plant.sun}
      water={plant.water}
      feed={plant.feed}
    />
  ));
};
