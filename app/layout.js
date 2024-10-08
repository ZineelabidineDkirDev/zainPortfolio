import Header from "@/components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import { Raleway } from "next/font/google";
import StairTransition from "@/components/StairTransition";
import Footer from "../components/Footer";
const raleway = Raleway({ subsets: ['latin'],
   weight: ['200','300','400','500','600','700'],
   variable: '--font-Raleway'
  });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} sm:overflow-x-hidden`}>
        <Header/>
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
        <Footer/>
        </body>
    </html>
  );
}
