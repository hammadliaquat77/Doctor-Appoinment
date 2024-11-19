import Header from "@/components/Header";
import Hero from "@/components/heroSection";
import Cards from "@/components/doctorsCards";
import Footer from "@/components/Footer";

import Slider from "@/components/Slider";

export const metadata = {
  title: 'Doctor Appoiment System'
}

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero/>
      <Cards isHome={true} />
      <Footer />


    </div>
  );
}
