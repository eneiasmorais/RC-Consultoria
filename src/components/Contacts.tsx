import { Link } from "react-router-dom";
import { StyledContacts } from "../styles/StyledContacts";
import { FormEvent, useContext, useState } from "react";
import { AuthPageContext } from "../providers/pageContext";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
  const { contactRef } = useContext(AuthPageContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: FormEvent) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      message: message,
    };
    emailjs
      .send(
        "service_gcip0ed",
        "template_9u5a69f",
        templateParams,
        "V1Tezio3IURkIA6WI"
      )
      .then(
        (response) => {
          console.log("E-MAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <StyledContacts id="contact" ref={contactRef}>
      <div className="div_all_contacts">
        <div className="div_title_contacts">
          <h2 className="title_contacts">CONTATO</h2>
          <p className="subtitle_contacts">
            Dúvidas, reclamações, sugestões ou elogios?
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
          <Link to="https://wa.link/koqjnn">
            <button className="contacts_whatsapp_button">
              <i className="fa-brands fa-whatsapp"></i> Fale agora pelo
              WhatsApp!
            </button>
          </Link>
        </div>
      </div>
      <div className="div_message">
        <h2 className="title_message">OU ENVIE UMA MENSAGEM</h2>
        <form
          action="/send"
          method="POST"
          className="contact_form"
          onSubmit={sendEmail}
        >
          <div className="input_container">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="input_container">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="input_container">
            <label htmlFor="subject">Assunto</label>
            <input
              type="subject"
              id="subject"
              name="subject"
              placeholder="Digite o assunto"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required
            />
          </div>
          <div className="input_container">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
          </div>

          <button type="submit" className="send_message_button_form">
            Enviar
          </button>
        </form>
      </div>
    </StyledContacts>
  );
};
