import { Banners } from "../components/Banners";
import { Header } from "../components/Header";
import { WhoAreWe } from "../components/WhoAreWe";
import { Differentials } from "../components/Differentials";
import { OurServices } from "../components/OurServices";
import { Expertises } from "../components/Expertises";
import { StyledHomePage } from "../styles/StyledHomePage";
import { WhyHire } from "../components/WhyHire";
import { PhasesWork } from "../components/PhasesWork";
import { Contacts } from "../components/Contacts";
import { FixedWhatsAppButton } from "../components/FixedWhatsAppButton";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <Banners />
      <main>
        <WhoAreWe />
        <Differentials />
        <OurServices />
        <Expertises />
        <WhyHire />
        <PhasesWork />
        <Contacts />
        <FixedWhatsAppButton />
      </main>
    </StyledHomePage>
  );
};
