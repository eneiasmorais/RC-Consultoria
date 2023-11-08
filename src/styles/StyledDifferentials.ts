import { styled } from "styled-components";

export const StyledDifferentials = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("./src/assets/banner-logo-04.jpg");
  background-size: cover;
  height: max-content;
  background-repeat: no-repeat;
  width: 100%;
  padding: 2.5rem;

  .divTop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 4rem 2rem 0 2rem;
    margin: 2rem 0;
  }

  .divDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .divWhite {
    background-color: #ffffff;
    z-index: 10;
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
  }

  .title_differentials-0 {
    color: var(--color-grey-0);
    font-size: var(--font-size-4);
  }

  .title_differentials {
    text-align: left;
    margin: 1.5rem 0;
    font-size: var(--font-size-4);
  }

  .title_differentials_emphasys {
    font-size: var(--font-size-2);
    font-weight: 300;
    color: var(--color-tertiary-0);
  }
  .title_differentials_emphasys-1 {
    font-size: var(--font-size-3);
    font-weight: 300;
    color: var(--color-tertiary-0);
  }

  .divNoBackground {
    color: var(--color-grey-0);
    font-size: var(--font-size-5);
  }

  .differentials_list {
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 1023px) {
    .divDown {
      flex-direction: row;
    }

    .divWhite {
      width: 50%;
    }
  }
`;
