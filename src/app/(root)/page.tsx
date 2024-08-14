import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import RecentProduct from "@/components/home/RecentProduct";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Category/>
    <RecentProduct/>
   </div>
  );
}
