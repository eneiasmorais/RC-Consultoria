import styled from "styled-components";

export const StyledBanners = styled.section<{ activeImageIndex: number }>`
  /* .banner_images {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: auto;
  }

  .banner_slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${(props) => props.activeImageIndex * 100}%);
  }

  .banner_img_01,
  .banner_img_02 {
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: 0;
  }

  .banner_texts_01,
  .banner_texts_02 {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    color: white;
    padding: 20px;
    line-height: 48px;
    font-family: "Inter", sans-serif;
  }

  .banner_title {
    font-size: 24px;
    margin-top: 10px;
  }

  .banner_description {
    font-size: 18px;
    margin-top: 5px;
  }

  .banner_title1_medium {
    font-size: var(--font-size-3);
    font-weight: 600;
  }

  .banner_title2_high {
    font-size: var(--font-size-1);
    font-weight: 700;
  }

  .banner_title3_small {
    font-size: var(--font-size-5);
    font-weight: 300;
  }

  .banner_button_container {
    display: flex;
    gap: 2rem;
  }

  .banner_button_01,
  .banner_button_02 {
    width: 12rem;
    color: var(--color-grey-0);
    font-size: var(--font-size-7);
    font-weight: 600;
    border-radius: 4px;
  }

  .banner_button_01 {
    background-color: transparent;
    border: 1px solid var(--color-grey-0);
  }
  .banner_button_02 {
    background-color: var(--color-primary);
    border: 1px solid var(--color-grey-0);
    width: 12rem;
  }
  @media (min-width: 1023px) {
    .banner_texts_01,
    .banner_texts_02 {
      line-height: 5rem;
      width: 100%;
      text-align: left;
    }
    .banner_title1_medium {
      font-size: var(--font-size-5);
    }

    .banner_title2_high {
      font-size: var(--font-size-0);
    }

    .banner_title3_small {
      font-size: var(--font-size-6);
    }
    .banner_button_01,
    .banner_button_02 {
      cursor: pointer;
    }
  } */

  .banner_slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${(props) => props.activeImageIndex * 100}%);
  }

  .banner_slide {
    position: relative;
  }

  .banner_img_01,
  .banner_img_02 {
    width: 100vw;
    height: auto;
    object-fit: cover;
    z-index: 1;
    height: 70vh;
  }

  .banner_texts {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    /* text-align: left; */
    color: white;
    padding: 20px;
    line-height: 1.5;
    font-family: "Inter", sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .banner_button_container_01,
  .banner_button_container_02 {
    display: flex;
    gap: 2rem;
  }

  /* Estilos específicos para os dois slides */
  .banner_slide_01 .banner_texts,
  .banner_button_container_01 {
    left: 60%; /* Posição esquerda para o slide 01 */
  }

  .banner_slide_02 .banner_texts,
  .banner_button_container_02 {
    left: 97%; /* Posição direita para o slide 02 */
    /* color: var(--color-grey-3); */
  }

  .banner_texts_02 {
    color: var(--color-primary);
  }
  .banner_title1_medium {
    font-size: var(--font-size-5);
    font-weight: 600;
  }

  .banner_title2_high {
    font-size: var(--font-size-1);
    font-weight: 700;
  }

  .banner_title3_small {
    font-size: var(--font-size-5);
    font-weight: 300;
  }

  .banner_button_container {
    display: flex;
    gap: 2rem;
  }

  .banner_button_01,
  .banner_button_02 {
    width: 12rem;
    color: var(--color-grey-0);
    font-size: var(--font-size-7);
    font-weight: 500;
    border-radius: 4px;
    padding: 0.75rem 1rem;
  }

  .banner_button_01 {
    background-color: transparent;
    border: 1px solid var(--color-grey-0);
  }
  .banner_button_02 {
    background-color: var(--color-primary);
    border: 1px solid var(--color-grey-0);
  }

  .button_alt {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;
