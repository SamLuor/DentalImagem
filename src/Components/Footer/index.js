/* eslint-disable no-undef */
import React from "react";
import "./style.css";

import blankshield from "blankshield";
import LOGO from "../../assets/logo.png";

const Footer = () => {
  //Security _blank open in other window - (blankshield, jquery)
  $("body").on("click", "a[target=_blank]", function (event) {
    var href = $(this).attr("href");
    blankshield.open(href);
    event.preventDefault();
  });

  return (
    <footer style={{ backgroundColor: "#020418" }} className="px-8 py-8">
      <div className="container-footer pb-20 md:pb-12">
        <div>
          <img src={LOGO} alt="dentalimagem" className="w-44" />
        </div>
        <div className="grid h-40 mt-4 text-left">
          <h6 className="mb-4">Serviços</h6>
          <a href="#servicos">Scanner 3D</a>
          <a href="#servicos">Periapical</a>
          <a href="#servicos">Panoramica</a>
        </div>
        <div className="grid h-40 mt-4 text-left">
          <h6 className="mb-4">Serviços</h6>
          <a href="#servicos">Scanner 3D</a>
          <a href="#servicos">Periapical</a>
          <a href="#servicos">Panoramica</a>
        </div>
        <div className="grid h-32 gap-2 mt-4 text-left">
          <h6 className="mb-4">Contato</h6>
          <span className="flex gap-2">
            <i className="fa-regular fa-envelope text-white text-xl" />
            <a href="mailto:dentalimagem@gmail.com" className="text-sm pt-1">
              dentalimagem@gmail.com
            </a>
          </span>
          <span className="flex gap-2">
            <i className="fa-solid fa-phone-volume text-white text-xl" />
            <a href="tel:33 99999-9999" className="text-sm pt-1">
              (33) 99999-9999
            </a>
          </span>
          <div className="w-full grid grid-cols-3 mt-4">
            <a
              href="https://www.facebook.com/dentalimagem3d"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-facebook-f" />
            </a>
            <a
              href="https://www.facebook.com/dentalimagem3d"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/dentalimagem3d/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-4">
        <p className="text-gray-400 text-xs">
          © Dental Imagem 3D - 2023. Todos direitos reservados
        </p>
        <a
          className="text-gray-400 text-xs"
          target="_blank"
          rel="norefereer"
          href="https://www.instagram.com/_sam.lor/"
        >
          Desenvolvido por <span className="underline">@SamLuor</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
