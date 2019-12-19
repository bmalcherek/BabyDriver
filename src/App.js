import React, { useState, useEffect } from "react";
import axios from "axios";
import Plot from "react-plotly.js";

function App() {
  const [plotData, setPlotData] = useState({ x: [], y: [] });
  const url = "http://192.168.1.72:8000/";

  const driveButtonStyle = {
    color: "white",
    backgroundColor: "green",
    border: "none",
    margin: 10,
    width: 100,
    height: 50
  };

  useEffect(() => {
    axios.get(url + "plot/").then(res => setPlotData(res.data));
  });

  axios.get(url + "plot/").then(res => console.log(res.data));

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Plot
        data={[{ x: plotData.x, y: plotData.y }]}
        layout={{ width: 400, height: 400, title: "Route" }}
      />
      <button
        id="forward-btn"
        onClick={() => axios.get(url + "go-forward/")}
        style={driveButtonStyle}
      >
        FORWARD
      </button>
      <br />
      <div id="middle-buttons">
        <button
          id="left-btn"
          onClick={() => axios.get(url + "go-left/")}
          style={driveButtonStyle}
        >
          LEFT
        </button>
        <button
          id="back-btn"
          onClick={() => axios.get(url + "go-back/")}
          style={driveButtonStyle}
        >
          BACK
        </button>
        <button
          id="right-btn"
          onClick={() => axios.get(url + "go-right/")}
          style={driveButtonStyle}
        >
          RIGHT
        </button>
      </div>
      <br />
      <button
        id="stop-btn"
        onClick={() => axios.get(url + "stop/")}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          marginTop: 10,
          width: 100,
          height: 50
        }}
      >
        STOP
      </button>
    </div>
  );
}

export default App;
