import React from "react";
import "./style.css";

import { Card } from "primereact/card";

const ContentSecond = () => {
  return (
    <div className="container-second">
      <div className="info-one">
        <div className="container-card z-50">
          <Card className="card-img-one"></Card>
          <div className="text-slate-50">
            <h1 className="text-3xl font-semibold mb-2">
              <i className="icon-tooth fa-solid fa-tooth" /> Scanner 3D
            </h1>
            <p className="w-72 md:w-4/5 md:text-lg">
              O escaneamento 3D dos dentes (também chamado digitalização 3D) é o
              principal exame para que sejam feitos o planejamento do tratamento
              ortodôntico e confecção dos alinhadores transparentes.
            </p>
            <p className="good-reasons md:text-lg">
              <i className="icon-check fa-solid fa-check" />
              Menor taxa de erros.
            </p>
            <p className="good-reasons md:text-lg">
              <i className="icon-check fa-solid fa-check break-words" />
              Imagens de qualidade superior <br /> e agilidade no processo.
            </p>
          </div>
        </div>
      </div>
      <div className="info-two">
        <div className="container-card z-50">
          <Card className="card-img-one md:order-2"></Card>
          <div className="text-slate-50 grid md:justify-items-end md:text-end max-h-80">
            <h1 className="text-3xl font-semibold mb-2 flex items-center">
              <i className="icon-tooth fa-solid fa-tooth mx-1 md:order-2" />
              <span className="text-gray-500">Scanner 3D</span>
            </h1>
            <p className="w-72 text-gray-400 md:w-4/5 md:text-lg">
              O escaneamento 3D dos dentes (também chamado digitalização 3D) é o
              principal exame para que sejam feitos o planejamento do tratamento
              ortodôntico e confecção dos alinhadores transparentes.
            </p>
            <p className="good-reasons md:text-lg">
              <i className="icon-check fa-solid fa-check md:order-2" />
              <span className="text-gray-500"> Menor taxa de erros.</span>
            </p>
            <p className="good-reasons md:text-lg">
              <i className="icon-check fa-solid fa-check md:order-2" />
              <span className="text-gray-500 break-words">
                Imagens de qualidade superior <br /> e agilidade no processo.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSecond;
