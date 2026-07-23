import HeroSection from "@/components/whatWeDo/HeroSection";
import HowWeWork from "@/components/whatWeDo/HowWeWork";
import OurServices from "@/components/whatWeDo/OurServices";


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
    </div>
  );
};

export default page;
