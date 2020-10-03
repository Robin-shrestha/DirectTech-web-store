import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography, AppBar, Tabs, Tab } from "@material-ui/core";
import {
  fillerProducts1,
  fillerProducts2,
  fillerProducts3,
} from "./fillerProducts";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: theme.spacing(5, 0, 0, 0),
    backgroundColor: theme.palette.background.paper,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: theme.spacing(3, 0, 0, 3),
  },
}));

const Products = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.nav}>
        <Typography variant="h5"> Our Products</Typography>
        <Divider orientation="vertical" />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="product 1" {...a11yProps(0)} />
          <Tab label="product 2" {...a11yProps(1)} />
          <Tab label="product 3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} fillerProducts={fillerProducts1} index={0} />
      <TabPanel value={value} fillerProducts={fillerProducts2} index={1} />
      <TabPanel value={value} fillerProducts={fillerProducts3} index={2} />
    </div>
  );
};
export default Products;
