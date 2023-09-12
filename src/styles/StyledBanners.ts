import styled from "styled-components";

export const StyledBanners = styled.div<{ activeImageIndex: number }>`
  position: relative;
  top: 13rem;
  .banner_slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${(props) => props.activeImageIndex * 100}%);
    width: 100vw;
  }

  .banner_slide {
    position: relative;
  }

  .banner_img_01,
  .banner_img_02,
  .banner_img_03 {
    width: 100vw;
    height: auto;
    object-fit: cover;
    z-index: 1;
    height: 65vh;
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
    left: 50%; /* Posição esquerda para o slide 01 */
  }

  .banner_slide_02 .banner_texts,
  .banner_button_container_02 {
    left: 50%; /* Posição direita para o slide 02 */
  }

  .banner_slide_01 .banner_texts,
  .banner_slide_02 .banner_texts {
    display: flex;
  }

  .banner_button_container_01,
  .banner_button_container_02 {
    margin-top: 1rem;
  }

  .banner_title1_medium {
    font-size: var(--font-size-7);
    font-weight: 600;
  }

  .banner_title2_high {
    font-size: var(--font-size-4);
    font-weight: 800;
  }

  .banner_title3_small {
    font-size: var(--font-size-7);
    font-weight: 400;
  }

  .banner_button_container {
    display: flex;
    gap: 2rem;
  }

  .banner_button_01,
  .banner_button_02 {
    width: max-content;
    color: var(--color-grey-0);
    font-size: var(--font-size-7);
    font-weight: 700;
    border-radius: 4px;
    padding: 0.6rem;
  }

  .banner_button_01 {
    background-color: transparent;
    border: 2px solid var(--color-grey-0);
  }
  .banner_button_02 {
    background-color: var(--color-primary);
    border: 2px solid var(--color-grey-0);
  }

  @media (min-width: 1023px) {
    position: relative;
    top: 7rem;
    .banner_button_01,
    .banner_button_02 {
      cursor: pointer;
    }

    .banner_img_01,
    .banner_img_02,
    .banner_img_03 {
      height: 85vh;
    }

    .banner_texts {
      width: 100%;
    }

    .banner_title1_medium {
      font-size: var(--font-size-5);
    }

    .banner_title2_high {
      font-size: var(--font-size-1);
    }

    .banner_title3_small {
      font-size: var(--font-size-5);
    }

    .banner_button_01,
    .banner_button_02 {
      width: 15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      font-size: var(--font-size-7);
      padding: 1rem;
    }

    .banner_slide_01 .banner_texts,
    .banner_button_container_01 {
      left: 60%; /* Posição esquerda para o slide 01 */
    }
    .banner_slide_02 .banner_texts,
    .banner_button_container_02 {
      left: 55%;
    }
  }
`;
