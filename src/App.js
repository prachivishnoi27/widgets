import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "Who is Prachi",
    description:
      "She is a smart and intelligent girl, who is also a student of Btech from NIT Hamirpur",
  },
  {
    title: "Who is Ankit",
    description:
      "He is a smart and intelligent boy, who is also a student of Btech from NIT Hamirpur",
  },
  {
    title: "Who is Diksha",
    description: "She is absurd",
  },
];

const options = [
  {
    label: "The color is red",
    value: "red",
  },
  {
    label: "The color is Green like grass",
    value: "green",
  },
  {
    label: "The color is blue like sky",
    value: "blue",
  },
];

const App = () => {
    // const [page, setPage] = useState()
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Accordion items={items} />} />
          <Route path="/search" component={Search} />
          <Route
            path="/dropdown"
            component={() => (
              <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
