import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

import avator from "../avatar.png";

//Css
const useStyle = makeStyles((theme) => ({
  typedContiner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  avator: {
    height: theme.spacing(15),
    width: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subTitle: {
    color: "tan",
    marginBottom: "3rem",
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <Box className={classes.typedContiner}>
      <Grid container justify="center">
        <Avatar className={classes.avator} src={avator} />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["Manish Singh"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Developer",
            "Java",
            "JavaScript",
            "React-Redux",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
