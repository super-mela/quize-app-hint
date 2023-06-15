import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import QuizInstraction from "./components/quiz/QuizInstruction";
import Play from "./components/quiz/Play";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/play/instruction" exact Component={QuizInstraction} />
        <Route path="/play/quiz" exact Component={Play} />
      </Routes>
    </Router>
  );
}

export default App;
