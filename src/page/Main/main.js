/* eslint-disable no-undef */
import React from "react";
import "./style.css";

import Header from "../../Components/Header";
import ContentOne from "../../Components/ContentOne";
import SidebarComp from "../../Components/Sidebar";
import Services from "../../Components/Services";
import ContentSecond from "../../Components/ContentSecond";
import About from "../../Components/About";
import OurClinic from "../../Components/OurClinic";
import Testimonials from "../../Components/Testimonials";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import ModalBudget from "../../Components/ModalBudget";

const Main = () => {
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleSide = React.useCallback(() => {
    setVisible((e) => !e);
  }, []);

  // const handleScroll = React.useCallback(() => {
  //    const navbar = $(".nav-header")
  //    console.log(navbar["0"])
  //   //  if(navbar)
  //   //  navbar["0"].classList.add("active")
  // },[])

  return (
    <div className="overflow-y-scroll">
      <Header toggleSide={toggleSide} />
      <div className="flex flex-col testando">
        <ContentOne setVisible={setModalVisible} />
        <Services />
        <ContentSecond />
        <About />
        <OurClinic />
        <Testimonials />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.4802532113436!2d-41.509805784513055!3d-17.86298358197641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb3714df145bd89%3A0xd19bc5d0d7e65937!2sDENTAL%20IMAGEM!5e0!3m2!1spt-BR!2sbr!4v1676325172546!5m2!1spt-BR!2sbr"
          height="450"
          title="mapDentalImagem"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Contact />
        <Footer />
      </div>
      <SidebarComp toggleSide={toggleSide} visible={visible} />
      <ModalBudget visible={modalVisible} setVisible={setModalVisible} />
    </div>
  );
};

export default Main;
