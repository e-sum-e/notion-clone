import { Button } from "@/components/ui/button";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Footer from "./_components/footer";

const MarketingPage = () => {
  return (
    <div className="flex min-h-full flex-col">
      <div
        className="items-center flex-col justify-items-center
      md:justify-start text-center gap-y-8 flex flex-1 px-6 pb-10"
      >
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
