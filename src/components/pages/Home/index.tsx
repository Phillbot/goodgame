import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Streams } from "./Streams";
import { Container, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Games } from "./Games";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { universalAction } from "../../../actions/universalAction";

export const Home = () => {
  const location = useLocation();

  const classes = useStyles();

  const dispatch = useDispatch();

  const [value, setValue] = useState(location.pathname === "/" ? 0 : 1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(universalAction("OPEN", false));
  }, [dispatch]);

  return (
    <Container>
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Стримы" component={Link} to="/" className={classes.tab} />
        <Tab
          label="Игры"
          component={Link}
          to="/games"
          className={classes.tab}
        />
      </Tabs>

      {value === 0 && <Streams />}
      {value === 1 && <Games />}
    </Container>
  );
};
