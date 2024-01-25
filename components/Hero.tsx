"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover, reserve, or lease a car — swiftly and effortlessly!
        </h1>

        <p className="hero__subtitle">
          Make your car rental experience hassle-free with our streamlined
          booking process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={"/hero.png"}
            alt={"hero"}
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
