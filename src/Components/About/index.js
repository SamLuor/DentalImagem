import React from "react";
import CardUs from "../CardUs";
import "./style.css";

const About = () => {
  const imgs = ["gallery1", "gallery2", "gallery3", "gallery4"];

  return (
    <section className="content-three">
      <div className="header-content">
        <h2>Sobre nós</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          scelerisque porttitor leo. Duis finibus quis ipsum sit amet
          vestibulum.
        </p>
      </div>
      <div className="body-content">
        <h3>Nossa Clínica</h3>
        <div className="content-cards">
          {imgs.map((item) => (
            <CardUs key={item} url={item} />
          ))}
          {imgs.map((item) => (
            <CardUs key={item} url={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
