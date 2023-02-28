import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="relative pb-10 min-h-screen">
    <Router>
      <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
          <Footer />
    </Router>
  </div>
  );
}

export default App;
