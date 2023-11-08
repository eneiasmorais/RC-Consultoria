export const MenuOptions = () => {
  return (
    <>
      <div className="nav_mobile">
        <ul className="nav_list_mobile">
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
            <optgroup label="A EMPRESA">
              <button
                value="whoAreWe"
                data-target="whoAreWe"
                onClick={() => handleNavButtonClick("whoAreWe")}
                className={`option_nav_button ${
                  activeSection === "whoAreWe" ? "" : "hidden"
                }`}
              >
                QUEM SOMOS
              </button>
              <button
                value="differentials"
                data-target="differentials"
                onClick={() => handleNavButtonClick("differentials")}
                className={`option_nav_button ${
                  activeSection === "differentials" ? "" : "hidden"
                }`}
              >
                NOSSOS DIFERENCIAIS
              </button>
              <button
                value="expertises"
                data-target="expertises"
                onClick={() => handleNavButtonClick("expertises")}
                className={`option_nav_button ${
                  activeSection === "expertises" ? "" : "hidden"
                }`}
              >
                EXPERTISES
              </button>
              <button
                value="whyHire"
                data-target="whyHire"
                onClick={() => handleNavButtonClick("whyHire")}
                className={`option_nav_button ${
                  activeSection === "whyHire" ? "" : "hidden"
                }`}
              >
                POR QUE NOS CONTRATAR
              </button>
            </optgroup>
          </li>
        </ul>
      </div>
    </>
  );
};
