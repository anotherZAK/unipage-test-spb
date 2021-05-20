import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextContainer from "../TextContainer/TextContainer";
import { URL, classList } from "../Util/util";
import Spinner from 'react-bootstrap/Spinner';

import "./BlindPrintingSimulator.css";

const BlindPrintingSimulator = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    let responseData;
    let response = null;
    let errorMessage;
    try {
      response = await fetch(URL);
      responseData = await response.json();
      responseData.classNames = Array.from(
        { length: responseData.text.length },
        () => classList.SYMBOL
      );
      setData(responseData);
    } catch (error) {
      errorMessage = error;
      setError(errorMessage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const returnToStart = () => {
    setData("");
    setError("");
    fetchData();
  };

  return data ? (
    <div className="outer-container">
      <h2>Тренажёр слепой печати</h2>
      <TextContainer data={data} />
      <Link className="btn btn-dark" to="/">
        Назад
      </Link>
      <button className="btn btn-info" onClick={returnToStart}>Начать заново</button>
    </div>
  ) : error ? (
    <div className="outer-container outer-container--error">
      <div className="error-msg">Ошибка загрузки данных</div>
      <div>
        <Link className="btn btn-dark" to="/">
          Назад
        </Link>
      </div>
    </div>
  ) : (
    <div className="outer-container outer-container--spinner">
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default BlindPrintingSimulator;
