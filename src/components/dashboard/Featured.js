import React from "react";
import { Grid, Typography, Card, CardActionArea, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import chelsea from "../../media/images/chelsea.jpg";

const styles = makeStyles((theme) => ({
  root: { margin: theme.spacing(5, 0, 5, 0) },
  demo: { backgroundColor: "#fff" },
  productName: { paddingLeft: theme.spacing(3) },
  price: { paddingLeft: theme.spacing(3) },
}));
const featuredItems = [
  {
    id: 1,
    productName: "product1",
    image: chelsea,
    price: 2000,
  },
  {
    id: 2,
    productName: "product2",
    image: chelsea,
    price: 2000,
  },
  {
    id: 3,
    productName: "product3",
    image: chelsea,
    price: 2000,
  },
  {
    id: 4,
    productName: "product4",
    image: chelsea,
    price: 2000,
  },
];
const Featured = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Box mb={3}>
        <Typography variant="h4" align="center">
          Featured Item
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={1} />
        <Grid item sm={10} className={classes.demo}>
          <Grid container spacing={3}>
            {featuredItems.map((item, index) => {
              return (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
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
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Featured;
