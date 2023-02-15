import React from "react";
import "./style.css";

import CardTestimonial from "../CardTestimonial";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const Testimonials = () => {
  const testimonialCards = [
    {
      photo: "perfil1.png",
      name: "Denise Arias",
      comment:
        "Excelente!!! Recomendou!!!Atendimento excelente, servicio ótimo, última tecnologia, lugar bonito e os profesionales excelentes. Alein do bom servicio, os profesionales sao muito cálidos e faz a gente pasar um grato momento. Nota 10!!!",
    },
    {
      photo: "perfil2.png",
      name: "Evellyn Thaina",
      comment:
        "Foi ótimo!!!! O atendimento em si, é maravilhoso. Obrigada a toda equipe❤️❤️❤️❤️🙏🏻",
    },
    {
      photo: "perfil3.png",
      name: "Schayene Soares",
      comment:
        "Experiência excelente, o pessoa é muito atencioso, o ambiente é  limpo e organizado! Amei!",
    },
    {
      photo: "perfil4.png",
      name: "Fernando Santos",
      comment:
        "Hoje estive pela primeira vez na clínica dental imagem. Fiquei muito satisfeito desde o início . Equipe muito atenciosa e educados . O atendimento do Zósimo é  sem igual , muito gentil e cauteloso na hora dos procedimentos. Parabéns, continuem assim . Teófilo otoni precisa de mais profissionais como vocês !",
    },
  ];
  return (
    <section className="flex flex-col items-center container-testimonial">
      {/* <Swiper>
      <CardTestimonial />
     </Swiper> */}
      <div className="testimonial-header">
        <h2>Avaliações</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          scelerisque porttitor leo. Duis finibus quis ipsum sit amet
          vestibulum.{" "}
        </p>
      </div>
      <Swiper
        centeredSlides
        spaceBetween={30}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        modules={[Autoplay]}
        className="testimonialSwiper"
      >
        {testimonialCards.map((item) => (
          <SwiperSlide>
            <CardTestimonial
              key={item.name + item.photo}
              photo={item.photo}
              comment={item.comment}
              name={item.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
