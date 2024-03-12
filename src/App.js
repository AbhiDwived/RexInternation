import './App.css';
import { Container } from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from './screens/ProductDetails';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
   <>
   
   <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product" element={<ProductScreen />} />
      </Routes>

    </main>
    <Footer />
   </Router>
   </>
  );
}

export default App;
