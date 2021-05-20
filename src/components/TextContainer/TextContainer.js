import React, { useState, useEffect, useRef } from "react";
import { classList, INPUT_PATTERN, UPDATE_TIME } from "../Util/util";
import StatisticContainer from "../StatisticContainer/StatisticContainer";

import "./TextContainer.css";

const TextContainer = ({ data }) => {
  let numberOfCorrectSymbols = 0;

  const classNames = data.classNames;

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [printAccuracy, setPrintAccuracy] = useState(0);
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  const [numberOfpassedSymbols, setNumberOfpassedSymbols] = useState(0);

  useEffect(() => {
    const keyHandle = () => {
      let isIncorrectInput = false;
      let reduceAccuracy = 0;

      return (evt) => {
        let filteredInput = INPUT_PATTERN.test(evt.key) ? evt.key : null;
         if (
          filteredInput &&
          data.text[numberOfCorrectSymbols] === filteredInput
        ) {
          classNames[numberOfCorrectSymbols] = classList.SYMBOL_PASSED;
          numberOfCorrectSymbols++;
          setNumberOfpassedSymbols(numberOfCorrectSymbols);
          isIncorrectInput = false;
          setIsTimerStart(true);
        } else if (!filteredInput) {
          return;
        } else {
          classNames[numberOfCorrectSymbols] = classList.SYMBOL_UNPASSED;
          if (!isIncorrectInput) {
            reduceAccuracy++;
            setPrintAccuracy(reduceAccuracy);
          }
          isIncorrectInput = true;
        }
        if (numberOfCorrectSymbols === data.text.length) {
            setIsTimerStart(false);
          }
      };
    };

    window.addEventListener("keydown", keyHandle());
  }, [classNames, data.text, numberOfCorrectSymbols]);

  useEffect(() => {
    if (isTimerStart) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => clearInterval(timer.current);
  }, [isTimerStart]);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, UPDATE_TIME);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  return (
    <div className="text-block">
      <StatisticContainer
        data={data}
        printAccuracy={printAccuracy}
        count={count}
        numberOfCorrectSymbols={numberOfpassedSymbols}
      />
      <div>
        {data.text.split("").map((symbol, index) => (
          <span className={classNames[index]} key={index}>
            {symbol}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextContainer;
