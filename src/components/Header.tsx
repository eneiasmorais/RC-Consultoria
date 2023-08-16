import { useEffect, useState } from "react";
import { StyledHeader } from "../styles/StyledHeader";

export const Header = () => {
  const [showNavList, setShowNavList] = useState(true);

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
  return (
    <StyledHeader>
      <div className="header_up">
        <div className="header_up_right_contacts">
          <div id="header_contacts_phone">
            <i className="fa-solid fa-phone"></i>
            <p id="header_p_phone">(17) 98170-6767</p>
          </div>
          <div id="header_contacts_email">
            <i className="fa-solid fa-envelope"></i>
            <p id="header_p_email">carolineuchoa_tributario@outlook.com</p>
          </div>
          <div id="header_contacts_adress">
            <i className="fa-solid fa-location-pin"></i>
            <p id="header_p_adress">
              R. Jaír Martins Mil Homens, 398 | S. J. Rio Preto - SP
            </p>
          </div>
        </div>
        <div className="header_up_left_socialNetworks">
          <button id="instagram_icon">
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button id="facebook_icon">
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button id="linkedIn_icon">
            <i className="fa-brands fa-linkedin"></i>
          </button>
          <button id="youTube_icon">
            <i className="fa-brands fa-youtube"></i>
          </button>
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
              <button className="header_nav_button">INÍCIO</button>
            </li>
            <li className="header_nav_item">
              <button className="header_nav_button">A EMPRESA</button>
            </li>
            <li className="header_nav_item">
              <button className="header_nav_button">QUEM SOMOS</button>
            </li>
            <li className="header_nav_item">
              <button className="header_nav_button">SERVIÇOS</button>
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
