import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductDetail from "./ProductDetail";

const ProductDetailRoot = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <ProductDetail />
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default ProductDetailRoot;
