import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import ProductListing from "./components/ProductListing";
import Gallery from "./components/Gallery";
import NikeBlack from './assets/nike-black.png';
import NikeBlue from './assets/nike-blue.png';
import NikeGreen from './assets/nike-green.png';
import NikeYellow from './assets/nike-yellow.png';

export default function App() {
  const images = [
    { src: NikeBlack },
    { src: NikeBlue },
    { src: NikeGreen },
    { src: NikeYellow }
  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout />} />
          <Route path="*" element={ <ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Gallery 
        width="600px" 
        height="300px" 
        radius="4px"
        showThumbs
        images={images} 
      />
      <ProductListing></ProductListing>
    </div>
  )

}

