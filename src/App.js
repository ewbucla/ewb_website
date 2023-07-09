import './App.css';
import NavigationBar from './Components/NavigationBar';
import Home from "./Pages/Home";
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return <div className="App">
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
      </Routes>
    </Router>
  </div>;

}

export default App;
