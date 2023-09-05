import { Link } from "react-router-dom";
import { StyledContacts } from "../styles/StyledContacts";

export const Contacts = () => {
  return (
    <StyledContacts>
      <div className="div_all_contacts">
        <div className="div_title_contacts">
          <h2 className="title_contacts">CONTATO</h2>
          <p className="subtitle_contacts">
            Dúvidas? Reclamações? Sugestões? Elogios?
          </p>
          <p className="subtitle_contacts">Entre em contato conosco!</p>
        </div>
        <ul className="contacts_list">
          <li className="contact_item">
            <Link to="https://w.app/RCConsultoriaTributaria">
              <button id="whatsapp_icon">
                <i className="fa-brands fa-whatsapp"></i> (17) 99171-7370
              </button>
            </Link>
          </li>
          <li className="contact_item">
            <Link to="https://www.instagram.com/rc_consultoriatributaria/">
              <button id="instagram_icon">
                <i className="fa-brands fa-instagram"></i>{" "}
                rc_consultoriatributaria
              </button>
            </Link>
          </li>
          <li className="contact_item">
            <Link to="https://www.linkedin.com/in/rc-consultoria-tributaria-26b59628b/">
              <button id="linkedIn_icon">
                <i className="fa-brands fa-linkedin"></i> rc consultoria
                tributaria
              </button>
            </Link>
          </li>
          <li className="contact_item">
            <Link to="https://www.linkedin.com/in/rc-consultoria-tributaria-26b59628b/">
              <button id="email_icon">
                <i className="fa-regular fa-envelope-open"></i>{" "}
                contato@rcconsultoriatributaria.com.br
              </button>
            </Link>
          </li>
        </ul>
        <div className="contacts_footer">
          <p className="text_above_button">Fale com um de nossos consultores</p>
          <Link to="https://w.app/RCConsultoriaTributaria">
            <button className="contacts_whatsapp_button">
              <i className="fa-brands fa-whatsapp"></i> Fale agora pelo
              WhatsApp!
            </button>
          </Link>
        </div>
      </div>
      <div className="div_message">
        <h2 className="title_message">
          Ou envie uma mensagem que logo entraremos em contato!
        </h2>
        <form action="" className="contact_form">
          <div className="input_container">
            <label htmlFor="name">Seu nome</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input_container">
            <label htmlFor="email">Seu e-mail</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="input_container">
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="input_container">
            <label htmlFor="message">Sua mensagem</label>
            <textarea id="message" name="message" />
          </div>

          <button type="submit" className="send_message_button_form">
            Enviar
          </button>
        </form>
      </div>
    </StyledContacts>
  );
};
