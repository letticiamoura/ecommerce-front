import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";

export default function App() {

  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/register" element={ < Register /> } />
          <Route path="/registerform" element={ <RegisterForm/> } />
          <Route path="/login" element={ <Login />} />
          <Route path="/products" element={ <ProductPage />} />
          <Route path="/myorders" element={<OrderPage />} />
          <Route path="*" element={ <ErrorPage />} />
      </Routes>
    
    </BrowserRouter>

  )

}
