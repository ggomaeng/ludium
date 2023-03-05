import { Toaster } from "react-hot-toast";
import "./App.css";
import StepOne from "./components/StepOne.js";
import StepThree from "./components/StepThree.js";
import StepTwo from "./components/StepTwo.js";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-yellow-50">
        <div className="min-w-[400px] max-w-[calc(100vw-40px)]">
          <StepOne />
          <StepTwo />
          <StepThree />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
