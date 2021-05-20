import React from "react";
import Join from "./components/Join/Join";
import BlindPrintingSimulator from "./components/BlindPrintingSimulator/BlindPrintingSimulator";
import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Router>
        <Route path="/" exact component={Join} />
        <Route
          path="/blind-printing-simulator"
          component={BlindPrintingSimulator}
        />
      </Router>
    </Container>
  );
};

export default App;
