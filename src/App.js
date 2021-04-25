import React, { useState } from "react";

import "./App.scss";
import { Charts } from "./components/charts";
import ModalAbout from "./components/modalabout";
import ModalCard from "./components/modalcard";

export const App = () => {
  const [chartType, setChartType] = useState(1);
  const [chartData, setChartData] = useState([
    5,
    59,
    80,
    81,
    56,
    55,
    40,
    68,
    45,
    65,
  ]);

  const handleChartTypeChange = (value) => {
    setChartType(value);
  };

  const handleRefresh = () => {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    var data = [];
    var i;
    for (i = 0; i < 10; i++) {
      data.push(getRandomIntInclusive(20, 100));
    }
    setChartData(data);
  };

  return (
    <div className="Page">
      <ModalCard />
      <ModalAbout />
      <div className="App">
        <div className="Header">
          <div className="Left">
            <a className="btn" href="#Open-modal-card">
              <i className="material-icons">account_box</i>
            </a>
          </div>
          <div className="Center">
            <p className="Title">Charting example ...</p>
          </div>
          <div className="Right">
            <a className="btn" href="#Open-modal-about">
              <i className="material-icons">help_center</i>
            </a>
          </div>
        </div>
        <div className="Body">
          <div className="Chart">
            <Charts chartType={chartType} chartData={chartData} />
          </div>
          <div className="ButtonsGroup">
            <div className="ChartTypeButtons">
              <div className="Item">
                <button
                  onClick={() => handleChartTypeChange(1)}
                  className="Button"
                >
                  VBar
                </button>
              </div>
              <div className="Item">
                <button
                  onClick={() => handleChartTypeChange(2)}
                  className="Button"
                >
                  HBar
                </button>
              </div>
              <div className="Item">
                <button
                  onClick={() => handleChartTypeChange(3)}
                  className="Button"
                >
                  Line
                </button>
              </div>
              <div className="Item">
                <button
                  onClick={() => handleChartTypeChange(4)}
                  className="Button"
                >
                  Polar
                </button>
              </div>
              <div className="Item">
                <button
                  onClick={() => handleChartTypeChange(5)}
                  className="Button"
                >
                  Doughnut
                </button>
              </div>
              <div className="Item">
                <button
                  onClick={() => handleChartTypeChange(6)}
                  className="Button"
                >
                  Pie
                </button>
              </div>
            </div>
            <div className="RefreshButton">
              <div className="Item">
                <button onClick={() => handleRefresh()} className="Button">
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer">
          <p className="Text">Created by Andi 2021</p>
        </div>
      </div>
    </div>
  );
};
