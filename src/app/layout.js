import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import "./page.css";
import Footer from "./components/Footer";





export const metadata = {
  title: "Zbyszek App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App">
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
