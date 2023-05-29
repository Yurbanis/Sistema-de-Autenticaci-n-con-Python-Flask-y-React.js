import React, { useEffect } from "react";
import Alerta from "../component/alert";
import {
    Container,
  } from "reactstrap";

import "../../styles/formulario.css";

const Private = () => {
  
 
  const [statusError, setstatusError] = React.useState(false);
  const [color, setColor] = React.useState("");
  const [texto, setTexto] = React.useState("");

  useEffect(() => {

    if (localStorage.getItem("user")) {
        setColor("primary");
        setTexto("usuario Autorizado");
        setstatusError(true);
      } else {
        setColor("danger");
        setTexto("Usuario No Autorizado, Pagina Privada");
        setstatusError(true);
      }
   
    }, []);

    

  

  return (
    <>
    <Container className="d-grid w-50 mb-5">
        {statusError && <Alerta texto={texto} color={color} />}
    </Container>
    </>
  );
};

export default Private;