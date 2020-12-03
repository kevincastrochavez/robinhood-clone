import React from "react";
import LineGraph from "./LineGraph";

function NewsFeed() {
  return (
    <div className="newsFeed">
      <div className="newsFeed__container">
        <div className="newsFeed__container-chart">
          <div className="newsFeed__container-chart-portfolio">
            <h1>$114,656.84</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>
          <div className="newsFeed__container-chart-chart">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
