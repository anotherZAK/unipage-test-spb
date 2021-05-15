import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div>
      <h1>Добро пожаловать</h1>
      <Link className="btn" to="/blind-printing-simulator">
        Перейти к тренажёру
      </Link>
    </div>
  );
};

export default Join;
