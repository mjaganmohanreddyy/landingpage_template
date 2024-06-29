import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" top-0 py-2 px-5 lg:py-5 w-full bg-transparent lg:relative z-50">
       <Header/>
       <Hero/>
       <Features/>
       <Pricing/>
       <Footer/>
    </div>
  );
}
