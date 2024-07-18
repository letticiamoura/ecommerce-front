import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import ProductListing from "./components/ProductListing";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout />} />
          <Route path="*" element={ <ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ProductListing></ProductListing>
    </div>
  )

}

