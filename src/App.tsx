import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductViewPage from "./pages/ProductViewPage";
import OrderPage from "./pages/OrderPage";

export default function App() {

  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="*" element={ <ErrorPage />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/myproducts" element={ <OrderPage />} />
          <Route path="/ecommerce-front/product" element={ <ProductViewPage />} />
          <Route path="/register" element={ < Register /> } />
          <Route path="/products" element={ <ProductPage />} />
          <Route path="/registerform" element={ <RegisterForm/> } />
      </Routes>
    
    </BrowserRouter>

  )

}
