import { useState, useEffect } from "react";
import { StyledBanners } from "../styles/StyledBanners";

// export const Banners = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveImageIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <StyledBanners activeImageIndex={activeImageIndex}>
//       <div className="banner_container">
//         <div className="banner_slider">
//           <div
//             className={`banner_img_01 ${
//               activeImageIndex === 0 ? "active" : ""
//             }`}
//           >
//             <div
//               className={`banner_img_02 ${
//                 activeImageIndex === 0 ? "active" : ""
//               } banner_texts_01`}
//             >
//               <h3 className="banner_title1_medium">
//                 Somos contadores especializados em
//               </h3>
//               <h2 className="banner_title2_high">
//                 gestão tributária inteligente
//               </h2>
//               <h4 className="banner_title3_small">
//                 Oferecemos soluções eficientes para redução de custos
//                 tributários.
//               </h4>
//               <div className="banner_button_container">
//                 <button className="banner_button_01">Método de trabalho</button>
//                 <button className="banner_button_01">Fale conosco</button>
//               </div>
//             </div>
//           </div>

//           <img
//             className={`banner_img_01 ${
//               activeImageIndex === 0 ? "active" : ""
//             }`}
//             src={`./src/assets/banner_RC_01_${
//               isMobile ? "mobile" : "desktop"
//             }.jpg`}
//             alt="Banner 01"
//           />

//           <div
//             className={`banner_img_02 ${
//               activeImageIndex === 1 ? "active" : ""
//             }`}
//           >
//             <div
//               className={`banner_img_02 ${
//                 activeImageIndex === 1 ? "active" : ""
//               } banner_texts_02`}
//             >
//               <h3 className="banner_title1_medium">
//                 Domínio tributário e CIGAM juntos
//               </h3>
//               <h2 className="banner_title2_high">Parceria de negócios</h2>
//               <h4 className="banner_title3_small">
//                 Com o objetivo de impulsionar resultados
//               </h4>
//               <div className="banner_button_container">
//                 <button className="banner_button_01">Saiba mais</button>
//                 <button className="banner_button_01">Conheça a CIGAM</button>
//               </div>
//             </div>
//           </div>
//           <img
//             className={`banner_img_02 ${
//               activeImageIndex === 1 ? "active" : ""
//             }`}
//             src={`./src/assets/banner_RC_02_${
//               isMobile ? "mobile" : "desktop"
//             }.jpg`}
//             alt="Banner 02"
//           />
//         </div>
//       </div>
//     </StyledBanners>
//   );
// };

// ...importações e hooks useState/Effect...

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
      <div className="banner_container">
        <div className="banner_slider">
          <div
            className={`banner_slide banner_slide_01 ${
              activeImageIndex === 0 ? "active" : ""
            }`}
          >
            <div className="banner_texts banner_texts_01">
              <h3 className="banner_title1_medium">
                Somos contadores especializados em
              </h3>

              <h2 className="banner_title2_high">
                gestão tributária inteligente
              </h2>

              <h4 className="banner_title3_small">
                Oferecemos soluções eficientes para redução de custos
                tributários.
              </h4>

              <div className="banner_button_container_01">
                <button className="banner_button_01">Método de trabalho</button>
                <button className="banner_button_02">Fale conosco</button>
              </div>
            </div>
            <img
              className={`banner_img_01 ${
                activeImageIndex === 0 ? "active" : ""
              }`}
              src={`./src/assets/banner_RC_01_${
                isMobile ? "mobile" : "desktop"
              }.jpg`}
              alt="Banner 01"
            />
          </div>

          <div
            className={`banner_slide banner_slide_02 ${
              activeImageIndex === 1 ? "active" : ""
            }`}
          >
            <div className="banner_texts banner_texts_02">
              <h3 className="banner_title1_medium">
                Domínio tributário e CIGAM juntos
              </h3>
              <h2 className="banner_title2_high">Parceria de negócios</h2>
              <h4 className="banner_title3_small">
                Com o objetivo de impulsionar resultados
              </h4>

              <div className="banner_button_container_02">
                <button className="banner_button_01 button_alt">
                  Saiba mais
                </button>
                <button className="banner_button_02">Conheça a CIGAM</button>
              </div>
            </div>
            <img
              className={`banner_img_02 ${
                activeImageIndex === 1 ? "active" : ""
              }`}
              src={`./src/assets/banner_RC_03_${
                isMobile ? "mobile" : "desktop"
              }.png`}
              alt="Banner 02"
            />
          </div>
        </div>
      </div>
    </StyledBanners>
  );
};
