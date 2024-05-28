import Badges from "@/components/Badges";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import MobileNavBar from "@/components/MobileNavBar";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import ServiceHero from "@/components/ServiceHero";
import NavBarNew from "@/components/NavBarNew";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="We offer local pest control treatments for rats, mice, bed bugs, cockroaches and other insects."
        />
        <title>
          London Based Building Facilities Solution | Bespoke Builds
        </title>
      </Head>

      <main className={`flex flex-col ${montserrat.className}`}>
        <NavBar />
        <NavBarNew />
        <MobileNavBar />
        <Hero />
        <Badges />
        <Testimonials />
        <ServiceHero />
        <MidSection />
        {/* <ServicesSection /> */}

        <FAQ />
        <Footer />
      </main>
    </>
  );
}
