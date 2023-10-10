import './App.css';
import Login from './Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Space from './Space/Space';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/space" element={<Space/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
