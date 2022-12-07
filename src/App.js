import React , {useState, Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Layout from "./Layout/Layout";
import Catalog from "./pages/Catalog/Catalog";
import Custom from "./pages/Custom/Custom";
import About from "./pages/Home/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import './scss/style.scss'
import './i18n'
import PopularQuestions from "./pages/PopularQuestions/PopularQuestions";




function App() {
  return (
  <Suspense fallback={"...loading"}>
       <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="PopularQuestions" element={<PopularQuestions/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Route>
           <Route path="custom" element={<Custom/>}/> 
        </Routes>

  </Suspense>
  );
}

export default App;
