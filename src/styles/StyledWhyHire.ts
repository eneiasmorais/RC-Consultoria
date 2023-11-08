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
    margin-top: 3rem;
    margin-bottom: 3rem;
    color: var(--color-primary);
    font-weight: 500;
  }

  .title_articles {
    text-align: center;
    margin: 1.5rem 0;
    line-height: 42px;
    font-weight: 600;
  }

  .title_emphasis {
    font-weight: 800;
    font-size: var(--font-size-3);
  }

  .orange_title {
    color: var(--orange-0);
  }

  #whyHire {
    height: max-content;
  }

  .whyList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    color: var(--color-grey-1);
    margin: 1.5rem 2rem;
    line-height: 36px;
    font-size: var(--font-size-5);
    text-align: justify;
    width: 100vw;
  }

  .whyList_item {
    border: 1.5px solid var(--color-grey-1);
    border-radius: 8px;
    background-color: aliceblue;
    padding: 1.5rem;
    background-image: url("./src/assets/banner-logo-04.jpg");
  }

  .div-title-item {
    color: var(--color-grey-0);
    font-weight: 700;
    margin-bottom: 2rem;
    font-size: var(--font-size-5);
    text-align: end;
  }

  .number_item_list {
    font-size: var(--font-size-0);
  }

  .content_item {
    font-size: var(--font-size-7);
  }

  @media (min-width: 1023px) {
    margin: 6rem;

    .div_title_articles {
      font-size: var(--font-size-1);
    }

    .title_emphasis {
      font-size: var(--font-size-0);
    }

    .whyList {
      flex-direction: row;
      flex-wrap: wrap;
      font-size: var(--font-size-6);
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      gap: 5rem;
    }

    .whyList_item {
      width: 25%;
    }
  }
`;
