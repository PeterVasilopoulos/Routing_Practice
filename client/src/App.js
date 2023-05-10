import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import InputDisplay from "./components/Inputdisplay";
import WordWithColor from "./components/WordWithColor";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Page */}
        <Route path="/home" element={<Home/>}/>

        {/* Input Display Page */}
        <Route path="/:input" element={<InputDisplay/>}/>

        {/* Word Display with Colors */}
        <Route path="/:word/:color/:bcolor" element={<WordWithColor/>}/>
      </Routes>
    </div>
  );
}

export default App;