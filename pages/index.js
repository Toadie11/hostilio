import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import ControlPanel from "../components/ControlPanel";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hostilio - Premium Web Hosting Services</title>
        <meta
          name="description"
          content="Fast, secure, and reliable web hosting for your business. Get started today with our affordable hosting plans."
        />
        <link rel="icon" href="logo/hostilioLogo.png" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <ControlPanel />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
