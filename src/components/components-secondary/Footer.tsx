import React from "react";
import style from "../components-styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <p>
        <a
          href="mailto:wesleyara.contato@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Wesley Araújo
        </a>
      </p>
    </div>
  );
}
