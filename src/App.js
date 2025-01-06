import './App.scss';
import GameBoard from './components/gameboard/gameboard';
import HeaderAndLibrary from './components/headerandlib/headerAndLib';
import { Routes, Route } from "react-router-dom"
import HomePage from './components/HomePage/homepage';

function App() {
  return (
    <div className="App">
      <HeaderAndLibrary />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tiktaktoe" element={<GameBoard />} />
        </Routes>      
    </div>
  );
}
export default App;
