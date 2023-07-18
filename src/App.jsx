import { useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { DashBoardPage } from "./pages/DashBoardPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"

function App() {
  const [start, setStart] = useState("HomePage");
 
  return (
    <>
      {start === "HomePage" ? (
        <HomePage setStart={setStart} />
      ) : (
        
        <DashBoardPage setStart={setStart} />
      )}
       <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
