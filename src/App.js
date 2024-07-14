import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Talkingbot from './components/Talkingbot';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Talkingbot" element={<Talkingbot/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
