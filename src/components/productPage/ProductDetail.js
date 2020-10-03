import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Tab,
  Tabs,
  CardActions,
  CardActionArea,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddToCartIcon from "@material-ui/icons/AddShoppingCart";

import chelsea from "../../media/images/chelsea.jpg";
import chelsea1 from "../../media/images/chelsea1.jpg";
import mutd from "../../media/images/mutd.jpg";

const styles = makeStyles((theme) => ({
  card: { margin: theme.spacing(5, 1, 5, 1) },
  root: {},
  description: { padding: theme.spacing(2, 2, 5, 5) },
}));

const ImagePanel = (props) => {
  const { value, index, image, ...other } = props;
  console.log(props);
  return (
    <div
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
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
            src={image} //image name
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
    </div>
  );
};

const TabComponent = ({ image }) => {
  return (
    <CardActionArea style={{ margin: "8px", border: "1px solid black" }}>
      <img
        src={image}
        style={{ height: "150px", width: "150px", objectFit: "fit" }}
      />
    </CardActionArea>
  );
};
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const ProductDetail = () => {
  const classes = styles();
  const [qty, setQty] = useState(1);
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const addItem = (e) => {
    e.preventDefault();
    setQty(qty + 1);
    // qtyChangeHandler();
  };
  const removeItem = (e) => {
    e.preventDefault();

    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
    // qtyChangeHandler();
  };
  return (
    <>
      <Card raised className={classes.card}>
        <Grid container>
          <Grid item xs={12} md={5}>
            {/* <CardActionArea>
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
            </CardActionArea> */}
            <ImagePanel value={tabValue} image={chelsea} index={0} />
            <ImagePanel value={tabValue} image={chelsea1} index={1} />
            <ImagePanel value={tabValue} image={mutd} index={2} />
          </Grid>
          <Grid item xs={12} md={7} style={{ backgroundColor: "#ffe" }}>
            <CardContent>
              <CardHeader
                title="PRODUCT NAME" // prod name here
                subheader="RS 5000" // prices
                className={classes.cardHeader}
              />
              <Divider />
              <Typography variant="body1" className={classes.description}>
                this is the description of the item (description goes here){" "}
              </Typography>
              <CardActions>
                <Grid container spacing={2}>
                  <Grid item sm={1} />

                  <Grid item sm={4}>
                    <Typography className={classes.itemQty}>
                      Qty:
                      <IconButton size="medium" onClick={removeItem}>
                        <RemoveIcon />
                      </IconButton>
                      <span> {qty} </span>
                      <IconButton size="medium" onClick={addItem}>
                        <AddIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                  <Grid item sm={2} />

                  <Grid item sm={1}>
                    <IconButton>
                      <AddToCartIcon />
                    </IconButton>
                  </Grid>
                  <Grid item sm={1} />

                  <Grid item sm={1}>
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                  </Grid>
                  <Grid item sm={2} />
                </Grid>
              </CardActions>
              <CardActions>
                <Button fullWidth variant="contained" color="secondary">
                  BUY NOW
                </Button>
              </CardActions>
              <CardActions>
                <Tabs
                  scrollButtons="on"
                  value={tabValue}
                  onChange={handleChange}
                  variant="scrollable"
                >
                  <Tab
                    icon={<TabComponent image={chelsea} />}
                    {...a11yProps(0)}
                  />
                  <Tab
                    icon={<TabComponent image={chelsea1} />}
                    {...a11yProps(1)}
                  />
                  <Tab icon={<TabComponent image={mutd} />} {...a11yProps(2)} />
                </Tabs>
              </CardActions>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ProductDetail;
