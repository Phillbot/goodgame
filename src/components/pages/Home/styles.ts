import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none",
      color: grey["A400"],
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
      background: "#3f51b5",
      color: "white",
      transition: ".6s",
      "&:hover": {
        background: "#3f51b5",
        color: "white",
        opacity: 0.9,
      },
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
    },

    channelHeaderImgContainer: {
      maxWidth:75,
      height:75,
      margin:"10px auto"
    },
  })
);
