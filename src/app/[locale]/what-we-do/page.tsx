import HeroSection from "@/components/whatWeDo/HeroSection";
import HowWeWork from "@/components/whatWeDo/HowWeWork";
import OurServices from "@/components/whatWeDo/OurServices";
import ReadyToBuild from "@/components/whatWeDo/ReadyToBuild";
import Technology from "@/components/whatWeDo/Technology";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="headerPadding">
      {/* HeroSection */}
      <HeroSection />

      {/* Our Services */}
      <OurServices />

      {/* how we work */}
      <HowWeWork />

      {/* Technology === hidden*/}
      {/* <Technology /> */}

      {/* Ready to Build Something? === hidden */}
      {/* <ReadyToBuild /> */}
    </div>
  );
};

export default page;
