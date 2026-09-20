import Header from "./components/Header";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Solution from "./components/Solution";
import Pricing from "./components/Pricing";
import Flow from "./components/Flow";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Solution />
        <Pricing />
        <Flow />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
