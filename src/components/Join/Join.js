import React from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  return (
    <div className="outer-container">
      <h1>Добро пожаловать!</h1>
      <p className="intro">
        Вы по-прежнему набираете текст на клавиатуре двумя пальцами и смотрите
        на клавиатуру во время ввода текста?
      </p>
      <p className="intro">
        На нашём сайте каждый человек может в обучиться и достичь совершенства в
        навыке печати.
      </p>
        <Link className="btn btn-primary" to="/blind-printing-simulator">
          Перейти к тренажёру
        </Link>
    </div>
  );
};

export default Join;
