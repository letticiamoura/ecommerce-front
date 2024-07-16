import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="*" element={ <ErrorPage />} />

      </Routes>
    
    </BrowserRouter>

  )

}

