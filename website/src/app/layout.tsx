import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
