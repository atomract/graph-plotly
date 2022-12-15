import logo from './logo.svg';
import './App.css';
import Home from '../src/components/pages/home'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </div>
  )
}