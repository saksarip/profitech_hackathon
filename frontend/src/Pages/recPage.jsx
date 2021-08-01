import React, { useState } from "react";
import InputTab from "../Components/InputTab/InputTab";
import StockBox from "../Components/StockBox/StockBox";
import "./recPage.css";

const RecPage = () => {
  const [stocks, setStocks] = useState([]);
  const requestStocks = (values) => {
    fetch("/stocks")
      .then((res) => res.json())
      .then((data) => {
        setStocks(data.stocks);
      });
  };
  return (
    <div>
      <div className="logoAndName">
        <img src="./logo.png" alt="logo" height="100px" width="100px"></img>
        <div className="name">Stock Box</div>
      </div>
      <InputTab requestStocks={requestStocks} />
      <StockBox stocks={stocks} />
    </div>
  );
};

export default RecPage;
