import styled from "styled-components";

export const StyledBanners = styled.section<{ activeImageIndex: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  .banner_images {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: auto;
  }

  .banners_images_desktop {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(-${(props) => props.activeImageIndex * 100}%);
  }

  .banner_img_01,
  .banner_img_02 {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 1023px) {
  }
`;
