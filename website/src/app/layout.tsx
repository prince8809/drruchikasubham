import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drruchikasubham.com"),
  title: {
    default: "Dr. Ruchika & Dr. Subham Agarwal | Gynaecologists & Obstetricians in Siliguri",
    template: "%s | Dr. Ruchika & Dr. Subham Agarwal",
  },
  description:
    "Complete women's healthcare by husband-wife specialist duo in Siliguri. High-risk pregnancy, normal & cesarean delivery, IVF, PCOS treatment, & laparoscopic surgery.",
  keywords: [
    "gynaecologist siliguri",
    "obstetrician siliguri",
    "lady gynaecologist siliguri",
    "laparoscopic surgeon siliguri",
    "Dr Ruchika Agarwal",
    "Dr Subham Agarwal",
    "manipal hospital siliguri",
    "zivah fertility siliguri",
    "IVF siliguri",
    "PCOS doctor siliguri",
    "pregnancy doctor siliguri",
    "normal delivery siliguri",
    "cesarean delivery siliguri",
  ],
  alternates: {
    canonical: "https://drruchikasubham.com",
  },
  openGraph: {
    title: "Dr. Ruchika & Dr. Subham Agarwal | Gynaecologists & Obstetricians in Siliguri",
    description:
      "Complete women's healthcare by husband-wife specialist duo in Siliguri. High-risk pregnancy, normal delivery, IVF, PCOS, and advanced laparoscopic surgery.",
    url: "https://drruchikasubham.com",
    siteName: "Dr. Ruchika & Dr. Subham Agarwal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/brand/brand-logo-v2.png",
        width: 886,
        height: 1228,
        alt: "Dr. Ruchika & Dr. Subham Agarwal Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ruchika & Dr. Subham Agarwal | Gynaecologists in Siliguri",
    description:
      "Empathetic maternity, fertility & minimally invasive laparoscopic surgical care in Siliguri at Manipal Hospital & Zivah Centre.",
    images: ["/images/brand/brand-logo-v2.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/images/brand/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/images/brand/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
