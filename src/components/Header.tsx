import { useEffect, useState } from "react";
import { StyledHeader } from "../styles/StyledHeader";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showNavList, setShowNavList] = useState(true);
  const [activeSection] = useState("");

  const scrollToTop = () => {
    const menu = document.querySelector(".nav_mobile");
    if (menu) {
      menu.classList.remove("nav_mobile");
      menu.classList.add("display_none");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setShowNavList(window.innerWidth > 1023);
    };
    const container = document.querySelector(".nav_mobile");
    if (container && window.innerWidth > 1023) {
      container.classList.add("hidden");
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuMobile = () => {
    const button = document.querySelector(".menu_button");
    const container = document.querySelector(".nav_mobile");

    if (button && container) {
      container.classList.toggle("hidden");
    }
  };

  const closeMenu = () => {
    const container = document.querySelector(".nav_mobile");
    const buttons = document.querySelectorAll(".option_nav_button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        container?.classList.toggle("hidden");
      });
    });
  };

  return (
    <StyledHeader>
      <div className="header_up">
        <div className="header_up_right_contacts">
          <div id="header_contacts_phone">
            <i className="fa-solid fa-phone"></i>
            <p id="header_p_phone">(17) 99171-7370</p>
          </div>
          <div id="header_contacts_email">
            <i className="fa-solid fa-envelope"></i>
            <p id="header_p_email">contato@rcconsultoriatributaria.com.br</p>
          </div>
          <div id="header_contacts_adress">
            <i className="fa-solid fa-location-pin"></i>
            <p id="header_p_adress">
              Av. Anísio Haddad, 6.900 | Sala 05 | S. J. Rio Preto - SP
            </p>
          </div>
        </div>
        <div className="header_up_left_socialNetworks">
          <Link to="https://www.instagram.com/rctributaria/">
            <button id="instagram_icon">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61550853845754">
            <button id="facebook_icon">
              <i className="fa-brands fa-facebook"></i>
            </button>
          </Link>
          <Link to="https://www.linkedin.com/company/100032872/admin/feed/posts/">
            <button id="linkedIn_icon">
              <i className="fa-brands fa-linkedin"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="header_down">
        <div className="header_down_left_logo">
          <a id="header_logo_anchor" href="">
            <img id="header_logo" src="./src/assets/logo_01.jpg" alt="" />
          </a>
        </div>
        {showNavList ? (
          <ul id="header_nav_list">
            <li className="header_nav_item">
              <button
                onClick={scrollToTop}
                className={`header_nav_button ${
                  activeSection === "home" ? "" : "hidden"
                }`}
              >
                INÍCIO
              </button>
            </li>
            <li className="header_nav_item">
              <li className="header_nav_item">
                <a
                  href="#whoAreWe"
                  data-target="whoAreWe"
                  className={`header_nav_button ${
                    activeSection === "whoAreWe" ? "" : "hidden"
                  }`}
                >
                  QUEM SOMOS
                </a>
              </li>
            </li>
            <li className="header_nav_item">
              <a
                href="#services"
                data-target="services"
                className={`header_nav_button ${
                  activeSection === "services" ? "" : "hidden"
                }`}
              >
                SERVIÇOS
              </a>
            </li>
            <li className="header_nav_item">
              <a
                href="#differentials"
                data-target="differentials"
                className={`header_nav_button ${
                  activeSection === "differentials" ? "" : "hidden"
                }`}
              >
                DIFERENCIAIS
              </a>
            </li>
            <li className="header_nav_item">
              <a
                href="#contact"
                data-target="contact"
                className={`header_nav_button ${
                  activeSection === "contact" ? "" : "hidden"
                }`}
              >
                CONTATO
              </a>
            </li>
          </ul>
        ) : (
          <div className="menu_div_button">
            <button className="menu_button" onClick={() => handleMenuMobile()}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        )}
      </div>
      <div className="nav_mobile display_none">
        <ul className="nav_list_mobile">
          <li className="header_nav_item">
            <button
              onClick={scrollToTop}
              className={`option_nav_button ${
                activeSection === "home" ? "" : "hidden"
              }`}
            >
              INÍCIO
            </button>
          </li>
          <li className="header_nav_item">
            <a
              href="#whoAreWe"
              data-target="whoAreWe"
              className={`option_nav_button ${
                activeSection === "whoAreWe" ? "" : "hidden"
              }`}
            >
              QUEM SOMOS
            </a>
          </li>
          <li className="header_nav_item" onClick={() => closeMenu()}>
            <a
              href="#differentials"
              data-target="differentials"
              className={`option_nav_button ${
                activeSection === "differentials" ? "" : "hidden"
              }`}
            >
              NOSSOS DIFERENCIAIS
            </a>
          </li>
          <li className="header_nav_item" onClick={() => closeMenu()}>
            <a
              href="#expertises"
              data-target="expertises"
              className={`option_nav_button ${
                activeSection === "expertises" ? "" : "hidden"
              }`}
            >
              EXPERTISES
            </a>
          </li>
          <li className="header_nav_item" onClick={() => closeMenu()}>
            <a
              href="#whyHire"
              data-target="whyHire"
              className={`option_nav_button ${
                activeSection === "whyHire" ? "" : "hidden"
              }`}
            >
              POR QUE NOS CONTRATAR
            </a>
          </li>
          <li className="header_nav_item" onClick={() => closeMenu()}>
            <a
              href="#phases"
              data-target="whyHire"
              className={`option_nav_button ${
                activeSection === "whyHire" ? "" : "hidden"
              }`}
            >
              ETAPAS DO NOSSO TRABALHO
            </a>
          </li>
          <li className="header_nav_item" onClick={() => closeMenu()}>
            <a
              href="#services"
              data-target="services"
              className={`option_nav_button ${
                activeSection === "services" ? "" : "hidden"
              }`}
            >
              NOSSOS SERVIÇOS
            </a>
          </li>
          <li className="header_nav_item" onClick={() => closeMenu()}>
            <a
              href="clients"
              data-target="clients"
              className={`option_nav_button ${
                activeSection === "clients" ? "" : "hidden"
              }`}
            >
              CLIENTES
            </a>
          </li>
          <li className="header_nav_item" onClick={() => closeMenu()}>
            <a
              href="#contact"
              data-target="contact"
              className={`option_nav_button ${
                activeSection === "contact" ? "" : "hidden"
              }`}
            >
              CONTATO
            </a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};
