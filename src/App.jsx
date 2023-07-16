import { useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { DashBoardPage } from "./pages/DashBoardPage";

function App() {
  const [start, setStart] = useState("HomePage");
  return (
    <>
      {start === "HomePage" ? (
        <HomePage setStart={setStart} />
      ) : (
        <DashBoardPage setStart={setStart} />
      )}
    </>
  );
}

export default App;
