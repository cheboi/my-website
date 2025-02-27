import "../styles/globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Moses Cheboi Portfolio</title>
      </head>
      <body>{children}</body>
      <Footer />
    </html>
  );
}
