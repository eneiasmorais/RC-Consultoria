import styled from "styled-components";

export const StyledWhoAreWe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  margin-top: 3rem;
  padding-top: 10rem;

  .title_company {
    display: flex;
    justify-content: center; /* Alinha horizontalmente ao centro */
    align-items: center; /* Alinha verticalmente ao centro */
    font-size: var(--font-size-2);
    font-weight: 800;
    width: 100%;
    text-align: center;
    color: var(--orange-0);
  }

  article {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .title_articles {
    font-size: var(--font-size-4);
    margin: 1.5rem 0;
    color: var(--color-grey-0);
    font-weight: 800;
    text-align: center;
    padding-bottom: 2rem;
  }

  .content_articles_container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    color: var(--color-grey-0);
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
  }

  @media (min-width: 1023px) {
    padding: 3rem 6rem;
    justify-content: flex-start;
    align-items: center;

    .title_company {
      text-align: center;
    }

    article {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }
    .title_articles {
      font-size: var(--font-size-2);
      text-align: left;
    }

    .content_articles_container {
      width: 50%;
      text-align: justify;
      gap: 1rem;
      /* color: var(--color-grey-1); */
    }

    .business_div_img {
      width: 50%;
      margin-bottom: 3rem;
      padding-top: 2rem;
    }

    .business_img {
      margin: 2rem;
      width: 400px;
      padding-top: 5rem;
    }
    .content_articles_item {
      font-size: 1.2rem;
    }
  }
`;
