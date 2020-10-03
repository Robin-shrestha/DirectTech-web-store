import React from "react";
import ProductItem from "./ProductItem";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

const tabPanelStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(5, 0, 5, 0) },
}));
function TabPanel(props) {
  const classes = tabPanelStyles();
  const { children, value, index, fillerProducts, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={1} />
          <Grid item sm={10} className={classes.demo}>
            <Grid container spacing={3}>
              {fillerProducts.map((item, index) => {
                return (
                  <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                    <ProductItem item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    </div>
  );
}

export default TabPanel;

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
