import { Link } from "react-router-dom";
import { StyledFixedWhatsAppButton } from "../styles/StyledFixedWhatsAppButton";

export const FixedWhatsAppButton = () => {
  return (
    <StyledFixedWhatsAppButton>
      <Link to="https://wa.link/koqjnn">
        <i className="fa-brands fa-whatsapp" id="whatsapp-icon"></i>
      </Link>
    </StyledFixedWhatsAppButton>
  );
};
