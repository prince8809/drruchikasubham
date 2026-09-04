import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drruchikasubham.com"),
  title: "Dr. Subham & Dr. Ruchika | Gynaecologist & Obstetrician in Siliguri",
  description:
    "Complete women's healthcare by husband-wife specialist duo. High-risk pregnancy, normal & cesarean delivery, IVF, PCOS treatment, laparoscopic surgery in Siliguri.",
  keywords: [
    "gynaecologist siliguri",
    "obstetrician siliguri",
    "IVF siliguri",
    "PCOS doctor siliguri",
    "pregnancy care siliguri",
    "manipal hospital siliguri",
    "Dr Subham Agarwal",
    "Dr Ruchika Agarwal",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/brand/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
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
