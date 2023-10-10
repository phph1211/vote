import React from "react";
import { VotePage } from "./pages/vote/votepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/reset";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VotePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
