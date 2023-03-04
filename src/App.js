import "./App.css";
import StepOne from "./StepOne.js";
import StepTwo from "./StepTwo.js";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-yellow-50">
      <div className="min-w-[400px] max-w-[calc(100vw-40px)]">
        <StepOne />
        <StepTwo />
      </div>
    </div>
  );
}

export default App;
