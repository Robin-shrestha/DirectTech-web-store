import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(5, 1, 5, 1),
    padding: theme.spacing(2, 2, 2, 5),
  },
  title: {},
  desc: {
    margin: theme.spacing(2),
  },
}));

const AdditionalDescription = (props) => {
  const classes = styles();
  return (
    <Paper className={classes.paper} variant="elevation" elevation="12">
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.title}
      >
        Additional Description
      </Typography>
      <Typography variant="body1" className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
        ullamcorper nunc. Nam sit amet sapien maximus, accumsan nulla eget,
        egestas libero. Quisque massa felis, ullamcorper at ultrices non, porta
        et odio. Fusce a nibh in mi pharetra mattis nec in lorem. Nunc ornare
        aliquet orci, nec ultricies sem suscipit facilisis. Cras ac turpis nibh.
        Quisque sit amet lorem a risus porttitor tristique. Sed ut fermentum
        est. Aenean dui erat, sodales at nisi et, gravida placerat dui. Morbi
        quis maximus eros, ut vehicula nisl. Duis sit amet semper enim.
      </Typography>
    </Paper>
  );
};

export default AdditionalDescription;
