import { Link } from "react-router-dom";
import { StyledFixedWhatsAppButton } from "../styles/StyledFixedWhatsAppButton";

export const FixedWhatsAppButton = () => {
  return (
    <StyledFixedWhatsAppButton>
      <Link to="https://w.app/RCConsultoriaTributaria">
        <button id="whatsapp-icon">
          <i className="fa-brands fa-whatsapp"></i>
        </button>
      </Link>
    </StyledFixedWhatsAppButton>
  );
};
