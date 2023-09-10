import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
function App() {
  return (
    <>
    {/* <SignUp></SignUp> */}
    <div className="app">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
