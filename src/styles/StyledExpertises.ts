import { styled } from "styled-components";

export const StyledExpertises = styled.section`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  .title_articles {
    font-size: var(--font-size-3);
    margin-bottom: 2rem;
    color: var(--color-primary);
    font-weight: 800;
  }

  .business_img {
    width: 100%;
  }

  .image_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5rem;
  }
  @media (min-width: 1023px) {
    margin: 3rem 6rem;

    .title_articles {
      font-size: var(--font-size-2);
    }

    .image_container {
      flex-direction: row;
    }
  }
`;
