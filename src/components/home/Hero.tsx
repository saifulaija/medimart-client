import assets from "@/app/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-auto ">
      <Image
        src={assets.images.banner}
        alt="Hero background"
        className="object-cover object-center"
        width={1500}
        height={844} // Adjust this to maintain aspect ratio or use an appropriate height
        priority
      />
    </div>
  );
};

export default Hero;
