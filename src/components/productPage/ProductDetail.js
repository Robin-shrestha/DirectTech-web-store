import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  Typography,
  Grid,
  IconButton,
  Button,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import chelsea from "../../media/images/chelsea.jpg";

const styles = makeStyles((theme) => ({
  root: {},
  card: {},
}));
const ProductDetail = () => {
  const classes = styles();
  return (
    <>
      {/* <Typography variant='h3'>PRODUCT NAME</Typography> */}
      <Card raised className={classes.card}>
        <CardActionArea>
          <div
            style={{
              height: "500px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              background: "#fff",
            }}
          >
            <img
              src={chelsea} //image name
              alt={`cfc`} //alt name
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "0 auto",
                backgroundColor: "white",
              }}
            />
          </div>
        </CardActionArea>
        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default ProductDetail;
