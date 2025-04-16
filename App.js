import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './component/Header';
import Footer from './component/Footer';
import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
   
import Contact from './component/Contact';
import Home from './component/Home';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    


     

    </div>
  );
}

export default App;