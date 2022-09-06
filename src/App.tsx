import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import AuthPage from "./pages/AuthPage";
import SqueezePage from "./pages/SqueezePage";
import StatisticPage from "./pages/StatisticPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/squeeze" element={<SqueezePage />} />
          <Route path="/statistic" element={<StatisticPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
