import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import TopSection from "@/components/TopSection/TopSection";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fauget",
  description: "Fauget Prodcast Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <AuthProvider>
       <div className="flex">
          <Navbar />
          <div className="flex flex-col w-full  px-10">
            <TopSection />
            <div className="flex-grow">{children}</div>
            <Toaster />
          </div>
        </div>
       </AuthProvider>
      </body>
    </html>
  );
}
