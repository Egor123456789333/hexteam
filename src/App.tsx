import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import AuthPage from "./pages/AuthPage";
import SqueezePage from "./pages/SqueezePage";
import StatisticPage from "./pages/StatisticPage";
import WithNavigation from "./components/WithNavigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route
            path="/squeeze"
            element={
              <WithNavigation>
                <SqueezePage />
              </WithNavigation>
            }
          />
          <Route
            path="/statistic"
            element={
              <WithNavigation>
                <StatisticPage />
              </WithNavigation>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
