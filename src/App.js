import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import QuizInstraction from "./components/quiz/QuizInstruction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/play/instruction" exact Component={QuizInstraction} />
      </Routes>
    </Router>
  );
}

export default App;
