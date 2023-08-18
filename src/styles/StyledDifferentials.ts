import { styled } from "styled-components";

export const StyledDifferentials = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .business_img {
    width: 100%;
  }

  .differentials_container {
    margin: 3rem;
  }

  .title_articles {
    font-size: var(--font-size-3);
    margin-bottom: 3rem;
    color: var(--color-primary);
    font-weight: 800;
  }

  .differentials_item {
    line-height: 36px;
    font-size: var(--font-size-5);
    text-align: justify;
    color: var(--color-grey-1);
    line-height: 3rem;
  }
  @media (min-width: 1023px) {
    .differentials_container {
      width: 100%;
    }

    .title_articles {
      font-size: var(--font-size-2);
      text-align: left;
    }

    .differentials_item {
      font-size: var(--font-size-4);
    }
  }
`;
