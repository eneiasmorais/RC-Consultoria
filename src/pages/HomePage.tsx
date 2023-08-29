import { Banners } from "../components/Banners";
import { Header } from "../components/Header";
import { WhoAreWe } from "../components/WhoAreWe";
import { Differentials } from "../components/Differentials";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Banners />
        <WhoAreWe />
        <Differentials />
      </main>
    </>
  );
};
