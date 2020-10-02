import React from "react";
import {
  Link,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import logo from "../../media/Logo/logo.png";

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: red[400],
  },
  details: {
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));
const contactInfo = {
  facebook: "www.facebook.com/store",
  phoneNo: "9841xxxxxx",
  instagram: "www.instagram.com/store",
};
const Footer = () => {
  const classes = styles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={logo}
        title="logo"
        component="img"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" gutterBottom>
            CONTACT INFO
          </Typography>
          <Typography variant="body1">
            Phone no: {contactInfo.phoneNo}
          </Typography>
          <Typography variant="body1">
            Facebook:{" "}
            <Link href="#" color="inherit">
              {contactInfo.facebook}
            </Link>
          </Typography>
          <Typography variant="body1">
            Instagram:{" "}
            <Link href="#" color="inherit">
              {contactInfo.instagram}
            </Link>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Footer;
