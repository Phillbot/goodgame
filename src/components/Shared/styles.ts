import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainLoader: {
      height: "75vh",
      textAlign:"center"
    },

    simpleLoader: {
      margin: theme.spacing(2),
      textAlign:"center"
    },

    simpleNoData: {
      margin: theme.spacing(4),
    },
  })
);
