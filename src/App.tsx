import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductViewPage from "./pages/ProductViewPage";

export default function App() {

  return (
      <BrowserRouter>

        <Routes>
          <Route path="/ecommerce-front/" element={ <HomePage />} />
          <Route path="*" element={ <ErrorPage />} />
          <Route path="ecommerce-front/login" element={ <Login />} />
          <Route path="ecommerce-front/product" element={ <ProductViewPage />} />
          <Route path="ecommerce-front/product/*" element={ <ProductViewPage />} />
          <Route path="ecommerce-front/register" element={ < Register /> } />
          <Route path="ecommerce-front/products" element={ <ProductPage />} />
          <Route path="ecommerce-front/register/registerform" element={ <RegisterForm/> } />
      </Routes>
    
    </BrowserRouter>

  )

}
