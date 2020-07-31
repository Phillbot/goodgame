import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { grey, blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      minHeight: 200,
      margin: "20px auto 0 auto",
      color: grey["A100"],
    },
    footerGrid: {
      padding: theme.spacing(2),
    },

    divider: {
      background: grey[800],
      minHeight: 2,
      margin: theme.spacing(2),
    },

    linkDecoration: {
      color: blue["A100"],
    },

    linkIcon: {
      color: blue["A100"],
      padding: theme.spacing(.5),
    },
  })
);
