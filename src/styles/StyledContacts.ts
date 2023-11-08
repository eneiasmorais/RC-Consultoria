import { styled } from "styled-components";

export const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 7rem;

  .div_all_contacts,
  .div_message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfafc;
    border-radius: var(--radius-default);
    width: 90%;
    padding: 1.5rem 0;
  }

  .div_title_contacts,
  .contacts_list,
  .contacts_footer {
    margin: 1rem;
  }

  .title_contacts {
    color: var(--orange-0);
    font-size: var(--font-size-3);
    font-weight: 500;
    margin: 1.5rem;
    text-align: center;
  }

  .subtitle_contacts,
  .text_above_button {
    color: var(--color-grey-1);
    line-height: 24px;
    font-size: var(--font-size-5);
    margin: 1rem;
    text-align: center;
  }

  .subtitle_contacts {
    margin-bottom: 0.5rem;
    font-size: var(--font-size-6);
  }

  .contacts_list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    border: 1px solid var(--color-grey-1);
    padding: 2rem 1rem;
    border-radius: 4px;
    width: max-content;
  }

  .contact_item {
  }

  #whatsapp_icon,
  #instagram_icon,
  #linkedIn_icon,
  #email_icon {
    color: var(--color-grey-2);
    background-color: transparent;
    border: none;
    line-height: 24px;
    font-size: var(--font-size-7);
    font-weight: 600;
  }

  .contacts_footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .contacts_whatsapp_button {
    background-color: var(--color-whatsapp);
    color: #fcfafc;
    border: 1px solid var(--color-grey-0);
    padding: 1rem;
    font-size: var(--font-size-6);
    border-radius: var(--radius-default);
  }

  .title_message {
    color: var(--color-grey-1);
    font-size: var(--font-size-4);
    font-weight: 500;
    margin: 1rem;
    line-height: 42px;
    text-align: center;
  }

  .contact_form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 80%;
  }

  .input_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.3rem;
  }

  input {
    height: 3rem;
    border: 1px solid var(--color-grey-1);
    border-radius: var(--radius-default);
    padding: 0.6rem;
  }

  #message {
    height: 12rem;
    vertical-align: top;
    padding: 0.6rem;
    border-radius: var(--radius-default);
  }

  .send_message_button_form {
    height: 2.5rem;
    width: 10rem;
    border: 1px solid var(--color-grey-1);
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    font-weight: 600;
    border-radius: 6px;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 0.9rem;
  }

  label {
    font-weight: 700;
    color: var(--color-grey-1);
  }

  .text_above_button {
    font-weight: 700;
  }

  @media (min-width: 1023px) {
    flex-direction: row;
    .div_all_contacts,
    .div_message {
      width: 50%;
      margin: 3rem;
    }

    /* .title_message {
      font-size: var(--font-size-5);
    } */

    .contact_form {
      width: 70%;
    }

    button {
      cursor: pointer;
    }

    select {
      cursor: pointer;
    }
  }
`;
