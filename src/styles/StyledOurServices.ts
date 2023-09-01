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
  @media (min-width: 1023px) {
    margin: 3rem 6rem;
    .title_articles {
      font-size: var(--font-size-2);
    }

    .image_container {
      flex-direction: row;
    }

    .business_img {
      width: 33%;
    }
  }
`;
