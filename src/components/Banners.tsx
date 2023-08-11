import { useState, useEffect } from "react";
import { StyledBanners } from "../styles/StyledBanners";

export const Banners = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBanners activeImageIndex={activeImageIndex}>
      <div className="banner_images">
        <div className="banners_images_desktop">
          <img
            className={`banner_img_01 ${
              activeImageIndex === 0 ? "active" : ""
            }`}
            src={`./src/assets/banner_RC_01_${
              isMobile ? "mobile" : "desktop"
            }.jpg`}
            alt="Banner 01"
          />
          <img
            className={`banner_img_02 ${
              activeImageIndex === 1 ? "active" : ""
            }`}
            src={`./src/assets/banner_RC_02_${
              isMobile ? "mobile" : "desktop"
            }.jpg`}
            alt="Banner 02"
          />
        </div>
      </div>
    </StyledBanners>
  );
};
