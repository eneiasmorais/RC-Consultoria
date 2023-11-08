import { Banners } from "../components/Banners";
import { Header } from "../components/Header";
import { WhoAreWe } from "../components/WhoAreWe";
import { Differentials } from "../components/Differentials";
import { OurServices } from "../components/OurServices";
import { StyledHomePage } from "../styles/StyledHomePage";
import { WhyHire } from "../components/WhyHire";
import { PhasesWork } from "../components/PhasesWork";
import { Contacts } from "../components/Contacts";
import { FixedWhatsAppButton } from "../components/FixedWhatsAppButton";
import { Footer } from "../components/Footer";
import { Message } from "../components/Message";
import { CallMeNow } from "../components/CallMeNow";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Header />
      <Banners />
      <main>
        <WhoAreWe />
        <CallMeNow />
        <Message />
        <OurServices />
        <Differentials />
        <WhyHire />
        <PhasesWork />
        <Contacts />
        <Footer />
        <FixedWhatsAppButton />
      </main>
    </StyledHomePage>
  );
};
