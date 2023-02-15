import React from "react";
import "./style.css";

import { Button } from "primereact/button";

const ContentOne = ({ setVisible }) => {
  return (
    <main className="content-one" id="inicio">
      <div className="grid gap-2">
        <h3 className="text-3xl lg:text-5xl font-semibold text-white">
          Somos a Dental Imagem 3D
        </h3>
        <p className="pr-16 text-gray-200 md:text-xl font-medium ">
          RADIOLOGIA ODONTOLÓGICA | Qualidade em diagnóstico e agilidade na
          entrega de resultados!{" "}
        </p>
        <Button className="button-request" onClick={() => setVisible(true)}>
          Solicitar cotação
        </Button>
      </div>
    </main>
  );
};

export default ContentOne;
