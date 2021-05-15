import React from 'react';
import Join from './components/Join/Join';
import BlindPrintingSimulator from './components/BlindPrintingSimulator/BlindPrintingSimulator';


import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/blind-printing-simulator" component={BlindPrintingSimulator} />
    </Router>
  );
}

export default App;
