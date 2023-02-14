import React from "react";
import "./style.css";

import { Button } from 'primereact/button'

const ContentOne = () => {
  return (
    <main className="content-one">
      <div className="grid gap-2">
        <h3 className="text-3xl lg:text-5xl font-semibold text-white">Somos a Dental Imagem 3D</h3>
        <p className="pr-16 text-gray-200 md:text-xl font-medium ">RADIOLOGIA ODONTOLÓGICA | Qualidade em diagnóstico e agilidade na entrega de resultados! </p>
        <Button className="button-request">Solicitar cotação</Button>
      </div>
    </main>
  );
};

export default ContentOne;
