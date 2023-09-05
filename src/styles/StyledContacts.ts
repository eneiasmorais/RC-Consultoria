import { styled } from "styled-components";

export const StyledContacts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .div_all_contacts,
  .div_message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfafc;
    padding: 1rem;
    border-radius: var(--radius-default);
    width: 90%;
  }

  .div_title_contacts,
  .contacts_list,
  .contacts_footer {
    margin: 1rem;
  }

  .title_contacts {
    color: var(--orange-0);
    font-size: var(--font-size-3);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .subtitle_contacts,
  .text_above_button {
    color: var(--color-grey-1);
    line-height: 24px;
    font-size: var(--font-size-6);
  }

  .contacts_list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;
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
    font-size: var(--font-size-5);
    font-weight: 600;
    margin: 1rem 2.5rem;
    line-height: 36px;
  }

  .contact_form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    max-width: 100%;
  }

  .input_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.3rem;
  }

  input {
    height: 2.5rem;
    border: 1px solid var(--color-grey-1);
    border-radius: var(--radius-default);
    width: 100%;
  }

  #message {
    height: 15rem;
    vertical-align: top;
    padding: 0.6rem;
    border-radius: var(--radius-default);
  }

  .send_message_button_form {
    height: 2.5rem;
    width: 10rem;
    border: 1px solid var(--color-grey-1);
    /* background-color: var(--color-primary); */
    background-color: var(--color-secondary);
    color: #fcfafc;
    font-weight: 600;
  }

  @media (min-width: 1023px) {
    flex-direction: row;
    margin: 3rem 6rem;
    .div_all_contacts,
    .div_message {
      width: 50%;
      margin: 3rem;
    }
  }
`;
