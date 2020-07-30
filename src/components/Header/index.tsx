import React, { useState, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  ListItem,
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Container,
  Grid
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";
import { links } from "./links";

export default function Header(props: any) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const change = () => {
    setOpen(open ? false : true);
  };

  return (
    <Fragment>
      <AppBar position="sticky">
        <Container fixed>
          <Grid>
            <Grid item xs={2}>
              <IconButton edge="start" color="inherit" onClick={change}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <SwipeableDrawer
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        disableBackdropTransition={true}
      >
        <img
          src="https://material-ui.com/static/images/grid-list/morning.jpg"
          alt=""
          className={classes.menupic}
        />

        <List className={classes.list}>
          {links.map((item: any, i: number) => {
            const { url, name, icon } = item;

            return (
              <NavLink to={url} key={i}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>{icon} </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={name} secondary={"test"} />
                </ListItem>
                <Divider variant="inset" component="li" />
              </NavLink>
            );
          })}
        </List>
      </SwipeableDrawer>
    </Fragment>
  );
}
