import React from "react";
import { Grid, Image } from "semantic-ui-react";

export const PlantTable = (props) => {
  const plants = props.plants
  return (
    <Grid>
    {plants.map(plant => 
      <Grid.Row>
        <Grid.Column width={8}>
          <Image src={plant.image} />
        </Grid.Column>
        <Grid.Column width={8}>{plant.heading}</Grid.Column>
      </Grid.Row>
      )}
      </Grid>
  );
};
