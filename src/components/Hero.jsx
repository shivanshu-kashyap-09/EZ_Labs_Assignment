import React from "react";
import HeroMandala from "../assets/HeroMandala.png";
import image from "../assets/image.png";

const Hero = ({ heroShift }) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-[rgba(255,157,125,0.7)] min-h-screen px-6 md:px-12 lg:px-20 py-16 gap-12">

      <div className="relative flex justify-center items-center w-full lg:w-1/2">
        <img
          src={HeroMandala}
          alt="Hero Mandala"
          className="w-64 sm:w-80 md:w-[500px] opacity-70"
        />
        <img
          src={image}
          alt="V Films Logo"
          className="absolute w-36 sm:w-52 md:w-[250px]"
        />
      </div>

      <div className="flex flex-col  items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6">
        <h1 className="font-[Island_Moments] text-[#0F3255] text-1xl sm:text-3xl md:text-[50px] leading-tight text-center">
          Varnan is where stories find
          <br />
          their voice and form
        </h1>

        <p className="text-[#F15D2B] font-[Halant] text-lg sm:text-2xl md:text-[32px] text-center">
          Films . Brands . Art
        </p>

        <p className={`text-[#252729] font-[Instrument_Sans] text-sm sm:text-base md:text-lg leading-relaxed max-w-lg text-center transition-all duration-300 ${heroShift ? "mt-[20px]" : "mt-0"
          }`}>
          Since 2009, we’ve been telling stories — stories of people,
          their journeys, and the places that shape them. Some begin in
          polished boardrooms, others in humble village squares. But every
          story starts the same way — by listening with intention. We
          believe it takes trust, patience, and an eye for the unseen to
          capture what truly matters. We don’t just tell stories — we honor
          them.
        </p>
      </div>
    </section>
  );
};

export default Hero;
