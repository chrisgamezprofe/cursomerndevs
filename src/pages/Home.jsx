import React from "react";
import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import featureImg from "./../assets/images/feature-img.png";
import videoIcon from "./../assets/images/video-icon.png";
import avatarIcon from "./../assets/images/avatar-icon.png";
import faqImg from "./../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DevList from "../components/Devs/DevList";
import FaqsList from "../components/Faqs/FaqsList";

const Home = () => {
  
  return (
    <>
      {/* ======== hero section ==========*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ======== hero content ==========*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]">
                  Encuentra al mejor talento{" "}
                  <span className="text-white bg-purpleColor rounded-full p-1">
                    tech
                  </span>{" "}
                  en tiempo{" "}
                  <span className="text-white p-1 bg-yellowColor rounded-full">
                    récord
                  </span>
                </h1>
                <p className="text__para">
                  Somos una plataforma diseñada para autogestionar tus búsquedas
                  y acelerar tus procesos de contratación. Explora nuestra base
                  de datos con +2k desarrolladores y desarrolladoras.
                </p>
                <button className="btn">Solicita un reclutador</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Años de experiencia</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    800+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Desarrolladores</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clientes Satisfechos</p>
                </div>
              </div>
            </div>

            {/* ======== hero content ==========*/}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======== hero section end ==========*/}

      {/* ======== hero section ==========*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Reduce tus tiempos de contratación
            </h2>
            <p className="text__para text-center">
              Desarrollamos un proceso de contratación flexible y personalizado,
              enfocado en la calidad.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Encuentra un Dev
              </h2>
              <p className="text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                Recibiremos tus requerimientos de talento tech y alinearemos
                nuestra base de talentos con los perfiles solicitados. Nuestros
                algoritmos harán el trabajo por ti.
              </p>

              <Link
                to="/developers"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Busca por país
              </h2>
              <p className="text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                Recibiremos tus requerimientos de talento tech y alinearemos
                nuestra base de talentos con los perfiles solicitados. Nuestros
                algoritmos harán el trabajo por ti.
              </p>

              <Link
                to="/developers"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Pide una cita
              </h2>
              <p className="text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                Recibiremos tus requerimientos de talento tech y alinearemos
                nuestra base de talentos con los perfiles solicitados. Nuestros
                algoritmos harán el trabajo por ti.
              </p>

              <Link
                to="/developers"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ======== end section ==========*/}

      {/* ======== about section ==========*/}
      <About />
      {/* ======== end section ==========*/}

      {/* ======== services section ==========*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Nuestros servicios de reclutamiento
            </h2>
            <p className="text__para text-center">
              Explora nuestra base de datos con +2k desarrolladores y
              desarrolladoras; Nuestros algoritmos harán el trabajo.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* ======== end section ==========*/}

      {/* ======== features section ==========*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Obtenga un asesoría virtual</h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Contrato directo con desarrolladores
                </li>
                <li className="text__para">
                  2. Encuentra recursos con valores y personalidad
                </li>
                <li className="text__para">
                  3. Si no estás conforme con el desempeño lo reemplazamos sin
                  ningún costo.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Ver más...</button>
              </Link>
            </div>

            {/* ======== features image ==========*/}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Lun, 21
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      11:30 AM
                    </p>
                  </div>
                  <span className="text-[10px] leading-[10px] lg:text-[14px] flex justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} className="w-3/4" alt="" />
                  </span>

                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Asesoría
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Camilo Mejía
                  </h4>
                </div>

              </div>
            </div>
          </div>

          <DevList/>
        </div>
      </section>

       {/* ======== faq section ==========*/}

       <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
            <img src={faqImg} alt="" />
            </div>

            <div className="w-fill md:w-1/2">
              <h2 className="heading">Preguntas más frecuentes</h2>
              <FaqsList />
            </div>
          </div>
        </div>
       </section>
    </>
  );
};

export default Home;
