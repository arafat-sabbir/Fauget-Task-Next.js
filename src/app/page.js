"use client";
import Category from "@/components/Category/Category";
import Navbar from "@/components/Navbar/Navbar";
import TopBanner from "@/components/TopBanner/TopBanner";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <div className="">
        <TopBanner />
        <Category />
      </div>
    </div>
  );
}
