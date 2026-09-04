import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import DoctorProfiles from "@/components/home/DoctorProfiles";

export const metadata: Metadata = {
  title: "Our Specialist Doctors | Dr. Ruchika Agarwal & Dr. Subham Agarwal",
  description:
    "Meet Dr. Ruchika Agarwal and Dr. Subham Agarwal — Siliguri's husband-and-wife specialist team in obstetrics, gynaecology, fertility, and laparoscopic surgery.",
  alternates: {
    canonical: "https://drruchikasubham.com/doctors",
  },
  openGraph: {
    title: "Our Specialist Doctors | Dr. Ruchika Agarwal & Dr. Subham Agarwal",
    description:
      "Meet Dr. Ruchika Agarwal and Dr. Subham Agarwal — Siliguri's specialist team in obstetrics, gynaecology, fertility, and advanced laparoscopy.",
    url: "https://drruchikasubham.com/doctors",
    siteName: "Dr. Ruchika & Dr. Subham Agarwal",
    type: "website",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 800,
        height: 800,
        alt: "Dr. Ruchika & Dr. Subham Agarwal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Specialist Doctors | Dr. Ruchika & Dr. Subham Agarwal",
    description: "Consulting Obstetricians, Gynaecologists & Laparoscopic Surgeons in Siliguri.",
    images: ["/images/brand/logo.png"],
  },
};

export default function DoctorsIndexPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#1A2229]">
      <Navbar />
      <div className="flex-1 py-8 sm:py-12">
        <DoctorProfiles isPageHeading={true} />
      </div>
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
