import React, { useEffect } from "react";
import style from "../components-styles/Gerador.module.css";

export default function Progresso() {
  useEffect(() => {
    const progresso = document.querySelector("progress") as HTMLProgressElement;
    const spann = document.querySelector("span") as HTMLSpanElement;

    let porcentagem = 0;

    setInterval(() => {
      if (porcentagem < 100) {
        porcentagem += 1;
        progresso.value = porcentagem;
        spann.textContent = `${porcentagem}%`;
      }

      if (porcentagem == 50) {
        spann.style.cssText = `
                color:white;
                `;
      }
    }, 100);
  });

  return (
    <div className={style.load}>
      <progress value="0" max="100"></progress>
      <span>0%</span>
    </div>
  );
}
