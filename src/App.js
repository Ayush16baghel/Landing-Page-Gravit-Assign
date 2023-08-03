import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Payment from './Components/Payment';
import Footer from './Components/Footer';
import { Routes, Route,Navigate  } from 'react-router-dom';
import Products from './Components/Products';
// import Routess from './Components/Routess';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    // <div className="App">
    //   <Navbar><Router>
    //     <Routess/>
    //     </Router></Navbar>
    // <Home/>
    //   <br></br>
    //   <br></br>
    //   <Home1/>
    //   <Home2/>
    //   <Payment/>
    //   <Footer/>
    //   <Products/>
    //   <About/>
    //   <Contact/>
    <Routes>
     
    <Route exact path="/" element={<Home/>} />
    {/* <Route exact path="/" element={<Navbar/>} /> */}
    <Route exact path="/About" element={<About/>} />
    <Route exact path="/Payment" element={<Payment/>} />
    <Route exact path="/Footer" element={<Footer/>} />
    <Route exact path="/Contact" element={<Contact/>} />
    <Route exact path="/Products" element={<Products/>}/>
     </Routes>
     
    // </div>
  );
}

export default App;
