import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={ <Layout />} />
        <Route path="*" element={ <ErrorPage />} />

      </Routes>
    
    </BrowserRouter>

  )

}

