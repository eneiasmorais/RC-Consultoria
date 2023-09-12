import { styled } from "styled-components";

export const StyledFixedWhatsAppButton = styled.div`
  position: absolute;

  #whatsapp-icon {
    position: fixed;
    top: 27%;
    left: 25%;
    font-size: 60px;
    line-height: 50px; /* Centralizar verticalmente o ícone */
    color: var(--color-grey-0);
    background-color: var(--color-whatsapp);
    border: none;
    border-radius: 50%;
  }

  @media (min-width: 1023px) {
    #whatsapp-icon {
      top: 88%;
      left: 93%;
      cursor: pointer;
    }
  }
`;
