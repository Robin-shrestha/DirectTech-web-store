import React from "react";
import { Grid, Typography, Card, CardActionArea, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import chelsea from "../../media/images/chelsea.jpg";

const styles = makeStyles((theme) => ({
  productName: { paddingLeft: theme.spacing(3) },
  price: { paddingLeft: theme.spacing(3) },
}));
const ProductItem = (props) => {
  const { item } = props;
  const classes = styles();
  return (
    <Card raised>
      <CardActionArea>
        <div
          style={{
            height: "200px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "8px",
            marginBottom: "8px",
          }}
        >
          <img
            src={item.image}
            alt={`image:${item.productName}`}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "0 auto",
            }}
          />
        </div>

        <Typography
          variant="h5"
          color="textPrimary"
          className={classes.productName}
        >
          {item.productName}
        </Typography>
      </CardActionArea>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.price}
        gutterBottom
      >
        price: {item.price}
      </Typography>
    </Card>
  );
};

export default ProductItem;
