import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductDetail from "./ProductDetail";
import AdditionalDescription from "./AdditionalDescription";

const styles = makeStyles((theme) => ({
  seperator: {
    minHeight: "66px",
  },
}));
const ProductDetailRoot = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.seperator} />
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <ProductDetail />
          <AdditionalDescription />
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default ProductDetailRoot;
