import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-grey-0);
  font-weight: 600;
  height: auto;
  position: fixed;
  z-index: 100;
  width: 100vw;

  .header_up {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .header_up_right_contacts {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-8);
    text-align: center;
    gap: 1rem;
    width: fit-content;
  }

  #header_contacts_phone,
  #header_contacts_email {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  #header_contacts_adress {
    display: flex;
    justify-content: space-around;
    align-items: top;
    gap: 0.5rem;
  }

  #header_p_adress {
    width: fit-content;
  }

  .header_up_right_contacts {
    line-height: 14px;
  }

  #header_nav_list {
    display: none;
  }

  .header_down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: max-content;
    padding: 0.5rem 1rem;
    background-color: white;
  }

  .header_down_left_logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #header_logo {
    height: 4rem;
  }

  #header_logo_anchor {
    display: flex;
  }

  .header_nav_button {
    font-size: var(--font-size-6);
    /* color: var(--color-primary); */
    font-weight: 500;
  }

  .home,
  .whoAreUs,
  .area,
  .clients,
  .contact {
    display: none;
  }

  #instagram_icon,
  #facebook_icon,
  #linkedIn_icon,
  #youTube_icon {
    background-color: transparent;
    color: var(--color-grey-0);
    border: none;
    width: 40px;
    height: max-content;
    font-size: var(--font-size-);
    align-items: center;
  }

  .menu_button {
    width: 55px;
    height: 55px;
    font-size: 30px;
    color: var(--color-grey-1);
    border: 0.25px solid var(--color-grey-1);
    border-radius: 5%;
    display: block;
    background-color: var(--color-grey-0);
  }

  .hidden {
    display: block;
  }

  .display_none {
    display: none;
  }

  .header_nav_button:focus {
    border: none;
    border-radius: none;
  }

  button:focus {
    border: none;
    border-radius: none;
  }

  .nav_mobile {
    display: block;
    width: 100%;
    height: max-content;
    background-color: var(--color-grey-1);
  }

  .nav_mobile.hidden {
    display: none;
  }

  .nav_list_mobile {
    width: 100%;
  }

  .option_nav_button,
  .subtitle_nav {
    width: 100%;
    text-align: center;
    border: none;
    background-color: var(--color-grey-0);
    height: max-content;
    border-bottom: 2px solid var(--color-grey-1);
    font-size: var(--font-size-6);
    padding: 1rem;
    cursor: pointer;
  }

  @media (min-width: 1023px) {
    .header_up {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding: 1rem;
    }
    .header_up_right_contacts {
      flex-direction: row;
      justify-content: center;
      gap: 2.5rem;
    }

    #header_logo {
      margin-left: 1rem;
    }

    #header_nav_list {
      display: flex;
      list-style: none;
      background-color: transparent;
      gap: 2.5rem;
      padding-right: 7rem;
    }

    .header_nav_item {
      margin: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header_nav_item:focus {
      border: none;
      border-radius: none;
    }

    .header_nav_button {
      background-color: transparent;
      border: none;
      font-weight: 600;
      color: var(--color-primary);
      padding: 0.25rem;
      font-size: var(--font-size-7);
      width: 10rem;
    }

    .header_nav_button:hover {
      color: var(--color-grey-1);
      outline: none;
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }

    .option_nav_button {
      padding: 6rem;
      height: 6rem;
      border-bottom: 1px solid #ccc;
    }

    .nav_mobile {
      display: none;
    }
  }
`;
