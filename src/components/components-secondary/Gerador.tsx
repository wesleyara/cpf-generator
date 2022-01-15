/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import style from "../components-styles/Gerador.module.css";
import Progresso from "./Progresso";

export default function Gerador() {
  const [renderiza, setRenderiza] = useState(false);

  function gerar() {
    setRenderiza(true);
  }

  return (
    <>
      <div className={style.containerGerador}>
        <h2>Clique no botão abaixo para gerar o CPF!</h2>
        <br />
        <input onClick={gerar} type="button" value="GERAR CPF" />
      </div>
      {renderiza == true && <Progresso />}
    </>
  );
}
