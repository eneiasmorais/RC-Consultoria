import styled from "styled-components";

export const StyledWhoAreWe = styled.section`
  display: flex;
  flex-direction: column;
  article {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .title_articles {
    font-size: var(--font-size-3);
    margin-bottom: 1.5rem;
    color: var(--color-primary);
    font-weight: 800;
  }

  .content_articles_container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    color: var(--color-grey-1);
    padding: 1rem;
    margin: 1.5rem 2rem;
  }

  .content_articles_item {
    line-height: 36px;
    font-size: var(--font-size-5);
    text-align: justify;
  }

  .business_div_img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .business_img {
    margin: 2rem;
    width: 80%;
    margin: 1rem;
  }

  @media (min-width: 1023px) {
    margin: 3rem 6rem;
    flex-direction: row;
    justify-content: flex-start;
    article {
      flex-direction: row;
      align-items: end;
      gap: 2rem;
    }
    .title_articles {
      font-size: var(--font-size-2);
      text-align: left;
    }

    .content_articles_container {
      width: 50%;
      text-align: justify;
      gap: 2rem;
      /* color: var(--color-grey-1); */
    }

    .business_div_img {
      width: 50%;
      margin-bottom: 3rem;
    }

    .business_img {
      margin: 2rem;
      width: 600px;
    }
    .content_articles_item {
      font-size: var(--font-size-5);
    }
  }
`;
