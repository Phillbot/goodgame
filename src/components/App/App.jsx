import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Drawer,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { universalAction } from "../../actions/universalAction";

import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "../../Router";
import { MuiThemeProvider, useTheme } from "@material-ui/core/styles"; // v1.x
import { Footer } from "../Footer";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import ChatIcon from "@material-ui/icons/Chat";

import logoImg from "../../img/new-logo.svg";

import ScrollToTop from "../Shared/ScrollToTop";

import "typeface-roboto";
import "./main.scss";

export const App = () => {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  const streamer = useSelector((state) => state.streamerReducer.streamer);
  const openChat = useSelector((state) => state.closeChatReducer.openChat);

  const handleDrawerOpen = () => {
    dispatch(universalAction("OPEN", true));
  };

  const handleDrawerClose = () => {
    dispatch(universalAction("OPEN", false));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          <CssBaseline />
          <div className="app">
            <div className={classes.root}>
              <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: openChat,
                })}
              >
                <Toolbar>
                  <Typography variant="h6" noWrap className={classes.title}>
                    <Link to="/">
                      {" "}
                      <img src={logoImg} alt="" />
                    </Link>
                  </Typography>

                  {streamer && (
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="end"
                      onClick={handleDrawerOpen}
                      className={clsx(openChat && classes.hide)}
                    >
                      <ChatIcon />
                    </IconButton>
                  )}
                </Toolbar>
              </AppBar>
              <main
                className={clsx(classes.content, {
                  [classes.contentShift]: openChat,
                })}
              >
                <div className={classes.drawerHeader} />

                <Router />
                <Footer />
              </main>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={openChat}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </div>
                <Divider />

                <iframe
                  src={`https://goodgame.ru/chat/${streamer}/`}
                  frameBorder="0"
                  title="chat"
                  style={{ minHeight: "92vh" }}
                ></iframe>
              </Drawer>
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
