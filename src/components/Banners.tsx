import { useState, useEffect } from "react";
import { StyledBanners } from "../styles/StyledBanners";

export const Banners = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBanners activeImageIndex={activeImageIndex}>
      <div className="banner_container">
        <div className="banner_slider">
          <div
            className={`banner_slide banner_slide_03 ${
              activeImageIndex === 2 ? "active" : ""
            }`}
          >
            <img
              className={`banner_img_03 ${
                activeImageIndex === 2 ? "active" : ""
              }`}
              src="./src/assets/benner-logo-05.jpg"
              alt="Banner 03"
            />
          </div>
          <div
            className={`banner_slide banner_slide_01 ${
              activeImageIndex === 0 ? "active" : ""
            }`}
          >
            <div className="banner_texts banner_texts_01">
              <h3 className="banner_title1_medium">Somos especialistas em</h3>
              <div className="banner_title2_high_container_01">
                <h2 className="banner_title2_high">Inteligência</h2>
                <h2 className="banner_title2_high">tributária</h2>
              </div>
              <h4 className="banner_title3_small">
                Soluções eficientes para minimizar custos fiscais.
              </h4>
              <div className="banner_button_container_01">
                <a className="banner_button_01" href="#phases">
                  Método de trabalho
                </a>
                <a className="banner_button_02" href="#contact">
                  Fale conosco
                </a>
              </div>
            </div>
            <img
              className={`banner_img_01 ${
                activeImageIndex === 0 ? "active" : ""
              }`}
              src={`./src/assets/banner_RC_01_${
                isMobile ? "mobile" : "desktop"
              }.jpg`}
              alt="Banner 01"
            />
          </div>
          <div
            className={`banner_slide banner_slide_02 ${
              activeImageIndex === 1 ? "active" : ""
            }`}
          >
            <div className="banner_texts banner_texts_02">
              <h3 className="banner_title1_medium">Conheça o nosso trabalho</h3>
              <div className="banner_title2_high_container_02">
                <h2 className="banner_title2_high">Parceria de</h2>
                <h2 className="banner_title2_high">negócios</h2>
              </div>
              <h4 className="banner_title3_small">
                Com o objetivo de impulsionar resultados
              </h4>
              <div className="banner_button_container_02">
                <a
                  href="#contact"
                  data-target="contact"
                  className="header_nav_button banner_button_01 button_alt"
                >
                  Seja um parceiro
                </a>
              </div>
            </div>
            <img
              className={`banner_img_02 ${
                activeImageIndex === 1 ? "active" : ""
              }`}
              src="./src/assets/banner-logo-04.jpg"
              alt="Banner 02"
            />
          </div>
        </div>
      </div>
    </StyledBanners>
  );
};
