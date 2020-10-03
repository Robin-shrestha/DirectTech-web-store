import React from "react";

import Carousel from "react-material-ui-carousel";
import { Paper, Button, CardMedia, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import image1 from "../../../media/images/1.jpeg";
import image2 from "../../../media/images/2.jpg";
import image3 from "../../../media/images/3.jpg";

const styles = makeStyles((theme) => ({
  carousel: { marginBottom: theme.spacing(4) },
  paper: {},
  cardMedia: {
    height: "600px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  carouselDesc: {
    margin: theme.spacing(0, 0, 5, 5),
    color: "white",
    padding: theme.spacing(2),
  },
  button: {
    color: "white",
    borderColor: "#eee",
    justifySelf: "center",
  },
}));
const HomeCarousel = () => {
  var items = [
    {
      name: "Random Name #1",
      image: image2,
      description:
        "Probably the most random thing you have ever seen asdasdasdasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsadsad!",
    },
    {
      name: "Random Name #2",
      image: image1,

      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      image: image3,

      description: "Hello World!",
    },
  ];
  const classes = styles();
  return (
    <Carousel
      animation="slide"
      interval="10000"
      className={classes.carousel}
      // autoPlay={false}
    >
      {items.map((item, index) => {
        return (
          <Paper
            key={index}
            styles={{ backgroundImage: item.image }}
            className={classes.paper}
          >
            <CardMedia image={item.image} className={classes.cardMedia}>
              <div className={classes.carouselDesc}>
                <Typography variant="h4" gutterBottom align="left">
                  {item.name}
                </Typography>
                <Box pl={2}>
                  <Typography varialn="body1" align="left" paragraph>
                    {item.description}
                  </Typography>
                </Box>

                <Button variant="outlined" className={classes.button}>
                  Check it out!
                </Button>
              </div>
            </CardMedia>
          </Paper>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
