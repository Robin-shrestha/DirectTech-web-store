import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import PersonIcon from "@material-ui/icons/Person";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Login from "@material-ui/icons/VpnKeyOutlined";
import Logout from "@material-ui/icons/ExitToAppOutlined";
import About from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const NavDrawer = (props) => {
  const classes = useStyles();
  const { drawerState, setDrawerState, toggleDrawer } = props;

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Cart />
          </ListItemIcon>
          <ListItemText>Cart</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Login />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <About />
          </ListItemIcon>
          <ListItemText>About us</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default NavDrawer;
