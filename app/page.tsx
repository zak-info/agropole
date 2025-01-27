// import AccordionFeatures from "./components/accordion-features";
import Image from "next/image";
import Ares from "./components/Ares";
import BeforeAfter from "./components/before-after";
import ContactUsForm from "./components/ContactUsForm";
import { Container } from "./components/container";
// import CTA from "./components/cta";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import { Header } from "./components/header";
import Hero from "./components/hero";
import LogoClouds from "./components/logo-clouds";
import Map from "./components/Map";
// import Pricing from "./components/pricing";
import { renderSchemaTags } from "./lib/seo";

export default function Home() {
  return (
    <Container>
      <div className="w-full relative  ">
        <Image src={"/images/waly.png"} alt="image" width={1980} height={1080} className="absolute -z-10" />
        {/* <div className="w-full h-full absolute -z-0 bg-slate-50/1 backdrop-blur-xs"></div> */}
        <Header />
        <Hero />
      </div>
      <LogoClouds />
      <BeforeAfter />
      <Ares />
      {/* <AccordionFeatures /> */}
      {/* <Pricing /> */}
      <Map />
      <ContactUsForm />
      <FAQ />
      {/* <CTA /> */}
      <Footer />
      {renderSchemaTags()}
    </Container>
  );
}
