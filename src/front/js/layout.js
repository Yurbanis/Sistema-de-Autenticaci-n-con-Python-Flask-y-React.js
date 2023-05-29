import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import Formulario from "./pages/formulario";
import FormularioRegister from "./pages/formularioRegister";
import Private from "./pages/private";
import ScrollToTop from "./component/scrollToTop";


import MainNavbar from "./pages/navbar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <MainNavbar />
          <Routes>
           
            <Route element={<Formulario />} path="/" />
            <Route element={<FormularioRegister />} path="/signup" />
            <Route element={<Private />} path="/private" />
            
            

          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);