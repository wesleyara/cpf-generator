/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export function Gerador() {
  const [renderiza, setRenderiza] = useState(false);

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

  function gerar() {
    setRenderiza(true);
    setRenders(false);

    setTimeout(() => {
      setRenderiza(false);
      setRenders(true);
    }, 10000);
  }

  const [renders, setRenders] = useState(false);

  const n01: any = Math.random() * 10;
  const n02: any = Math.random() * 10;
  const n03: any = Math.random() * 10;
  const n04: any = Math.random() * 10;
  const n05: any = Math.random() * 10;
  const n06: any = Math.random() * 10;
  const n07: any = Math.random() * 10;
  const n08: any = Math.random() * 10;
  const n09: any = Math.random() * 10;
  const n10: any = Math.random() * 10;
  const n11: any = Math.random() * 10;

  const conteudo = `${parseInt(n01)}${parseInt(n02)}${parseInt(n03)}.${parseInt(
    n04,
  )}${parseInt(n05)}${parseInt(n06)}.${parseInt(n07)}${parseInt(n08)}${parseInt(
    n09,
  )}-${parseInt(n10)}${parseInt(n11)}`;

  return (
    <>
      <div>
        <h2>Clique no botão abaixo para gerar o CPF!</h2>
        <br />
        <input onClick={gerar} type="button" value="GERAR CPF" />
      </div>
      {renderiza == true && (
        <>
          <div>
            <progress value="0" max="100"></progress>
            <span>0%</span>
          </div>
        </>
      )}
      {renders == true && (
        <div>
          Aqui está o seu CPF:
          <div>{conteudo}</div>
        </div>
      )}
    </>
  );
}
