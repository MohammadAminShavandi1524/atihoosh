import ContactInfo from "@/components/contactUs/ContactInfo";
import HeroSection from "@/components/contactUs/HeroSection";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="headerPadding">
      <div>
        <HeroSection />

        <div className="w90 my-18 flex justify-center px-50">
          {/* <SendMessageForm /> */}
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default page;
