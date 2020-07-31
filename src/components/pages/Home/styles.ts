import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { grey, blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullHeight: {
      minHeight: "100vh",
    },

    noFullHeight: {
      minHeight: "80vh",
      top: "10vh",
      bottom: "10vh",
    },

    tabs: {
      margin: theme.spacing(4),
    },

    tab: {
      color: "#d5d5d5!important",
    },

    link: {
      textDecoration: "none",
      color: grey["A100"],
    },

    streamMainBlue: {
      color: blue["A200"],
    },

    linkDecoration: {
      color: blue["A100"],
    },
    streamPrev: {
      maxWidth: "100%",
      height: "auto",
      "&:hover": {
        opacity: 0.8,
      },
    },
    userOnlineMainBox: {
      position: "relative",
    },
    userOnlineBox: {
      position: "absolute",
      zIndex: 100,
      top: 10,
      right: 10,
      color: grey["A100"],
      padding: theme.spacing(1),
    },

    showMoreButton: {
      margin: theme.spacing(2, 0),
      width: "100%",
    },

    gamePrev: {
      maxWidth: "100%",
      height: 250,
      "&:hover": {
        opacity: 0.8,
      },
    },

    streamPlayerContainer: {
      minHeight: "70vh",
      padding: theme.spacing(2),
    },

    streamDesriptionContainer: {
      padding: theme.spacing(2),
      color: grey["A100"],

      "& a": {
        display: "inline-block!important",
        color: blue["A100"],
      },
    },

    channelHeaderImgContainer: {
      maxWidth: 75,
      height: 75,
      margin: "10px auto",
    },

    gamePosterImgContainer: {
      width: "100%",
      minHeight: 500,
      margin: theme.spacing(2),
    },
  })
);
