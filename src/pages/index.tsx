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
import Logo from "../../public/bespokebuildslogo.png";

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

      <main
        className={`flex h-screen w-full items-center bg-black justify-center flex-col ${montserrat.className}`}
      >
        <div>
          <img src={Logo.src} alt="Logo" className="-mt-40" />
        </div>
        <div className="flex -mt-20 items-center gap-2 justify-center flex-col">
          <p className="text-white font-light">Services we offer:</p>

          <div className="flex text-white items-center px-4 justify-center flex-row">
            <p>
              Plumbing, Drainage, Electrical, Handyman, Heating, Ventilation,
              Air Conditioning, Painting & Decorating, Building & Cleaning
            </p>
          </div>
          <p className="text-white font-light mt-6">0753 5957 179</p>

          <p className="text-white font-light">Website coming soon</p>
        </div>
      </main>
    </>
  );
}
