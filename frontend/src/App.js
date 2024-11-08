import "./App.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import ProductDetail from "./components/product/ProductDetail";
import ProductSearch from "./components/product/ProductSearch";



function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <HelmetProvider>
              <ToastContainer theme="dark"/>
            <Header />
            <div className="container container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:keyword" element={<ProductSearch/>} />
              <Route path="/product/:id" element={<ProductDetail />} />

            </Routes>
            </div>
            
            <Footer />
          </HelmetProvider>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
