import React, { useState, useEffect } from "react";
import "./StatisticContainer.css";
import moment from "moment";

const StatisticContainer = ({data, printAccuracy, count, numberOfCorrectSymbols, statisticComplete}) => {
  let printSpeed = Math.round((numberOfCorrectSymbols / count) * 60);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(moment.utc(count * 1000).format("mm:ss"));
  }, [count]);

  return (
    <div className={statisticComplete ? statisticComplete : "statistic"}>
      <div className="statistic__accuracy">
        Точность печати:{" "}
        {count
          ? (
              ((data.text.length - printAccuracy) / data.text.length) *
              100
            ).toFixed(2)
          : ""}%
      </div>
      <div className="statistic__speed">
        Скорость печати: {count ? printSpeed : 0} символов/мин.
      </div>
      <div className="statistic__time">Время печати: {count ? time : 0} с.</div>
    </div>
  );
};

export default StatisticContainer;
