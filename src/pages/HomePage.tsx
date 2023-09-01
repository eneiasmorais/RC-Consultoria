import { Banners } from "../components/Banners";
import { Header } from "../components/Header";
import { WhoAreWe } from "../components/WhoAreWe";
import { Differentials } from "../components/Differentials";
import { OurServices } from "../components/OurServices";
import { Expertises } from "../components/Expertises";
import { StyledHomePage } from "../styles/StyledHomePage";
import { WhyHire } from "../components/WhyHire";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <main>
        <Banners />
        <WhoAreWe />
        <Differentials />
        <OurServices />
        <Expertises />
        <WhyHire />
      </main>
    </StyledHomePage>
  );
};
