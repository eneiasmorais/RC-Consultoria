import { styled } from "styled-components";

export const StyledWhyHire = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .div_title_articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-size-4);
    margin-bottom: 3rem;
    color: var(--color-primary);
    font-weight: 500;
  }

  .title_articles {
    text-align: center;
    margin: 1.5rem 0;
    line-height: 42px;
  }

  .title_emphasis {
    font-weight: 800;
    font-size: var(--font-size-3);
  }

  .orange_title {
    color: var(--orange-0);
  }

  .whyList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    color: var(--color-grey-1);
    padding: 1rem;
    margin: 1.5rem 2rem;
    line-height: 36px;
    font-size: var(--font-size-5);
    text-align: justify;
    width: 100vw;
  }

  .title_item {
    color: var(--color-primary);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .number_item_list {
    font-size: var(--font-size-0);
  }

  @media (min-width: 1023px) {
    margin: 3rem 6rem;

    .div_title_articles {
      font-size: var(--font-size-1);
    }

    .title_emphasis {
      font-size: var(--font-size-0);
    }

    .whyList {
      flex-wrap: wrap;
      font-size: var(--font-size-6);
      height: 100vh;
    }

    .whyList_item {
      width: 50%;
    }
  }
`;
