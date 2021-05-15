import React, { useState, useEffect } from "react";
import { textBlock } from "../Util/util";

import "./TextContainer.css";

const TextContainer = () => {
  let i = 0;
  const classNames = textBlock.classNames;

  const [className, setClassName] = useState(classNames);

  useEffect(() => {
    window.addEventListener("keydown", (evt) => {
      if (textBlock.text[i] === evt.key) {
        classNames[i] = "symbol symbol--passed";
        setClassName(Array.from(classNames));
        i++;
      } else {
        classNames[i] = "symbol symbol--unpassed";
        setClassName(Array.from(classNames));
      }
    });
  }, []);


  return (
    <div>
      {textBlock.text.split("").map((symbol, index) => (
        <span className={className[index]} key={index}>
          {symbol}
        </span>
      ))}
    </div>
  );
};

export default TextContainer;
