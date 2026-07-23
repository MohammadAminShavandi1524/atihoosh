import ContactInfo from "@/components/contactUs/ContactInfo";
import HeroSection from "@/components/contactUs/HeroSection";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="headerPadding">
      <div className="w90 px-0 sm:px-4 md:px-8 lg:px-16 xl:px-30 2xl:px-50">
        <HeroSection />

        <div className="my-12 flex justify-center md:my-14 lg:my-16 xl:my-18">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default page;
