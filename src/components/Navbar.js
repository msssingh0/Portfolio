import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import avatar from "../avatar.png";
import Footer from "./Footer";

//CSS Style
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    icon: <Home />,
    text: "Home",
    path: "/",
  },
  {
    icon: <AssignmentInd />,
    text: "Resume",
    path: "/resume",
  },
  {
    icon: <Apps />,
    text: "Portfolio",
    path: "/portfolio",
  },
  {
    icon: <ContactMail />,
    text: "Contact Me",
    path: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    showSideMenu: false,
  });

  const toggelSideMenu = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideMenu = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggelSideMenu("showSideMenu", false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Manish Singh" />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.path}>
            <ListItemIcon className={classes.listItem}>
              {item.icon}
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggelSideMenu("showSideMenu", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.showSideMenu}
              onClose={toggelSideMenu("showSideMenu", false)}
            >
              {sideMenu("showSideMenu")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
