import { styled } from "styled-components";

export const StyledOurServices = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title_articles {
    font-size: var(--font-size-3);
    margin-bottom: 3rem;
    color: var(--color-primary);
    font-weight: 800;
    text-align: center;
  }

  .image_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .business_img {
    width: 100%;
  }

  .div-our-services {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    gap: 2rem;
  }

  .services-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
  }

  .services-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .fa-circle-arrow-right {
    font-size: var(--font-size-4);
    color: var(--option-1);
  }
  .services-content {
    font-size: var(--font-size-5);
    color: var(--color-primary);
  }

  @media (min-width: 1023px) {
    margin: 6rem 3rem;

    .image_container {
      flex-direction: row;
    }

    .div-our-services {
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
