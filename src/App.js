import { BrowserRouter, Routes, Route, Navigate } from'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Contact from './screens/Contact';
import About from './screens/About';
import logo from './logo.webp'
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <BrowserRouter>
      <NavBar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
      
       </header>
    </div>
  );
}

export default App;

