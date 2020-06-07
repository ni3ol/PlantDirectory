import React from "react";
import "./css/Card.css";
import { Image, Header, Grid } from "semantic-ui-react";
import mouthImg from "./plants/mouth.jpg";
import mouthGif from "./plants/mouth.gif";
import sunImg from "./plants/sun.jpg";
import sunGif from "./plants/sun.gif";
import waterImg from "./plants/watering_can.jpg";
import waterGif from "./plants/watering_can.gif";

export const Card = (props) => {
  const { image, description, heading, subHeading, sun, water, feed} = props

  return (
    <div className="wrapper">
      <div className="card">
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={image} className="img" size="small" />
            </Grid.Column>
            <Grid.Column className="description" width={10}>
              {description}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="gridRow">
            <Grid.Column width={4}>
              <Header as="h3">{heading}</Header>
              <i>{subHeading}</i>
            </Grid.Column>
            <Grid.Column width={3} className="indicatorWrapper">
              {sun}
              <div className="indicator">
                <Image src={sunImg} alt="missing image" />
                <Image src={sunGif} className="img-top" alt="missing image" />
              </div>
            </Grid.Column>
            <Grid.Column width={3} className="indicatorWrapper">
              {water}
              <div className="indicator">
                <Image src={waterImg} alt="missing image" />
                <Image src={waterGif} className="img-top" alt="missing image" />
              </div>
            </Grid.Column>
            <Grid.Column width={3} className="indicatorWrapper">
              {feed}
              <div className="indicator">
                <Image src={mouthImg} alt="missing image" />
                <Image src={mouthGif} className="img-top" alt="missing image" />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
