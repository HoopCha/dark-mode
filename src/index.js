import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [dropDown, setDropDown] = useState("All");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"
      )
      .then((res) => {
      setCoinData(res.data)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Dropdown coinData={coinData} setDropDown={setDropDown} />
      <Charts coinData={coinData} dropDown={dropDown}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
