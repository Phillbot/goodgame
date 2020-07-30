import React, { useState } from "react";
import { useLocation } from "react-router";
import { Streams } from "./Streams";
import { Container, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Games } from "./Games";

export const Home = () => {
  const location = useLocation();

  const [value, setValue] = useState(location.pathname === "/" ? 0 : 1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Стримы" component={Link} to="/" />
        <Tab label="Игры" component={Link} to="/games" />
      </Tabs>

      {value === 0 && <Streams />}
      {value === 1 && <Games />}
    </Container>
  );
};
