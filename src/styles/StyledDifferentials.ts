import { styled } from "styled-components";

export const StyledDifferentials = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .business_img {
    width: 100vw;
  }

  .image_container {
    position: relative;
    height: fit-content;
  }

  .title_articles {
    font-size: var(--font-size-3);
    color: var(--color-grey-0);
    font-weight: 800;
    position: relative;
    bottom: 7rem;
    margin: 0 1rem;
  }
  .differentials_lists {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 2rem;
  }

  .differentials_list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .differentials_item {
    line-height: 36px;
    font-size: var(--font-size-5);
    text-align: left;
    color: var(--color-primary);
    line-height: 3rem;
    font-weight: 500;
    list-style: none;
  }
  @media (min-width: 1023px) {
    .differentials_container {
      width: 100%;
    }

    .differentials_lists {
      flex-direction: row;

      gap: 10rem;
      padding: 3rem 6rem;
    }

    .differentials_list {
      width: 50%;
    }

    .title_articles {
      font-size: var(--font-size-0);
      font-weight: 800;
      text-align: left;
      margin: 0 6rem;
    }

    .differentials_item {
      font-size: var(--font-size-5);
      font-weight: 500;
    }
  }
`;
