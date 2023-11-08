import { styled } from "styled-components";

export const StyledPhasesWork = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-primary-2);
  background-color: #ffffff;

  .div_big_title {
    background-image: url("./src/assets/logo_banner_01.png");
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 8rem;
    color: var(--color-grey-0);
    text-align: center;
    font-size: var(--font-size-4);
    margin-bottom: 2rem;
  }

  .big_title {
  }

  .div_title_phases {
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: var(--font-size-7);
    margin-bottom: 3rem;
    font-weight: 800;
    width: 100%;
  }

  .title_phases-0 {
    font-size: var(--font-size-6);
    color: var(--color-grey-1);
    margin-top: 2rem;
  }

  .title_phases {
    text-align: left;
    margin: 1.5rem 0;
    font-size: var(--font-size-4);
  }

  .title_phases_emphasys {
    font-size: var(--font-size-2);
    font-weight: 300;
    color: var(--color-tertiary-0);
  }

  .phases_list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .phase_item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 200px;
    width: 20rem;
    height: max-content;
    margin: 1rem;
    border-radius: 40px;
    color: var(--color-grey-2);
  }

  .title_item {
    font-size: var(--font-size-4);
    font-weight: 800;
    margin: 0.5rem;
  }

  .content_item {
    text-align: center;
    font-weight: 500;
  }

  @media (min-width: 1023px) {
    .div_title_phases {
      padding-left: 10rem;
    }

    .phases_list {
      flex-direction: row;
      padding: 0 6rem;
    }
    .title_item {
      font-size: var(--font-size-3);
    }

    .content_item {
      font-size: var(--font-size-6);
    }
  }
`;
