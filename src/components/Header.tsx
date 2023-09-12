import { useContext, useEffect, useState } from "react";
import { StyledHeader } from "../styles/StyledHeader";
import { Link } from "react-router-dom";
import { AuthPageContext } from "../providers/pageContext";

export const Header = () => {
  const [showNavList, setShowNavList] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const {
    whoAreWeRef,
    expertisesRef,
    differentialsRef,
    whyHireRef,
    servicesRef,
    clientsRef,
    contactRef,
  } = useContext(AuthPageContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setShowNavList(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavButtonClick = (targetSectionId: string) => {
    setActiveSection(targetSectionId);
    switch (targetSectionId) {
      case "home":
        scrollToTop();
        break;
      case "whoAreWe":
        scrollToSection(whoAreWeRef);
        break;
      case "differentials":
        scrollToSection(differentialsRef);
        break;
      case "expertises":
        scrollToSection(expertisesRef);
        break;
      case "whyHire":
        scrollToSection(whyHireRef);
        break;
      case "services":
        scrollToSection(servicesRef);
        break;
      case "clients":
        scrollToSection(clientsRef);
        break;
      case "contact":
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
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
              Av. Anísio Haddad, 6.900 | Sala 01 | S. J. Rio Preto - SP
            </p>
          </div>
        </div>
        <div className="header_up_left_socialNetworks">
          <Link to="https://www.instagram.com/rc_consultoriatributaria/">
            <button id="instagram_icon">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </Link>
          <Link to="">
            <button id="facebook_icon">
              <i className="fa-brands fa-facebook"></i>
            </button>
          </Link>
          <Link to="https://www.linkedin.com/in/rc-consultoria-tributaria-26b59628b/">
            <button id="linkedIn_icon">
              <i className="fa-brands fa-linkedin"></i>
            </button>
          </Link>
          <Link to="">
            <button id="youTube_icon">
              <i className="fa-brands fa-youtube"></i>
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
              <select
                data-target="company"
                onClick={() => handleNavButtonClick("company")}
                className={`header_nav_button ${
                  activeSection === "company" ? "" : "hidden"
                }`}
                defaultValue={"company"}
              >
                A EMPRESA
                <option value="company">A EMPRESA</option>
                <option
                  value="whoAreWe"
                  data-target="whoAreWe"
                  onClick={() => handleNavButtonClick("whoAreWe")}
                  className={`header_nav_button ${
                    activeSection === "whoAreWe" ? "" : "hidden"
                  }`}
                >
                  QUEM SOMOS
                </option>
                <option
                  value="differentials"
                  data-target="differentials"
                  onClick={() => handleNavButtonClick("differentials")}
                  className={`header_nav_button ${
                    activeSection === "differentials" ? "" : "hidden"
                  }`}
                >
                  NOSSOS DIFERENCIAIS
                </option>
                <option
                  value="expertises"
                  data-target="expertises"
                  onClick={() => handleNavButtonClick("expertises")}
                  className={`header_nav_button ${
                    activeSection === "expertises" ? "" : "hidden"
                  }`}
                >
                  EXPERTISES
                </option>
                <option
                  value="whyHire"
                  data-target="whyHire"
                  onClick={() => handleNavButtonClick("whyHire")}
                  className={`header_nav_button ${
                    activeSection === "whyHire" ? "" : "hidden"
                  }`}
                >
                  POR QUE NOS CONTRATAR
                </option>
              </select>
            </li>
            <li className="header_nav_item">
              <button
                data-target="services"
                onClick={() => handleNavButtonClick("services")}
                className={`header_nav_button ${
                  activeSection === "services" ? "" : "hidden"
                }`}
              >
                NOSSOS SERVIÇOS
              </button>
            </li>
            <li className="header_nav_item">
              <button
                data-target="clients"
                onClick={() => handleNavButtonClick("clients")}
                className={`header_nav_button ${
                  activeSection === "clients" ? "" : "hidden"
                }`}
              >
                CLIENTES
              </button>
            </li>
            <li className="header_nav_item">
              <button
                data-target="contact"
                onClick={() => handleNavButtonClick("contact")}
                className={`header_nav_button ${
                  activeSection === "contact" ? "" : "hidden"
                }`}
              >
                CONTATO
              </button>
            </li>
          </ul>
        ) : (
          <div className="menu_div_button">
            <button className="menu_button">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
