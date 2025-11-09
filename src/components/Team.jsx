import React from "react";
import group9 from "../assets/team/Group9.png";
import indiaGate from "../assets/team/indiaGate.svg";
import vector from "../assets/team/Vector.svg";
import vectorTop from "../assets/team/VectorTop.svg";
import vectorRight from "../assets/team/VectorRight.svg";
import group2 from "../assets/team/Group2.svg";

const Team = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[rgba(255,157,125,0.7)] min-h-screen px-6 md:px-12 py-16">
      <img
        src={group9}
        alt="Note"
        className="absolute top-0 left-30 w-64 sm:w-80 md:w-[380px] lg:w-[400px]"
      />
      <img
        src={indiaGate}
        alt="India Gate"
        className="absolute hidden md:block lg:block bottom-0 left-6 w-40 sm:w-56 md:w-[280px] lg:w-[320px]"
      />
      <img
        src={group2}
        alt="Group image"
        className="relative z-10 w-72 sm:w-[450px] md:top-[10px] md:w-[400px] lg:w-[350px] mt-20 md:mt-42 lg:mt-32 md:left-10 lg:left-55"
      />
      <img
        src={vectorTop}
        alt="Film Makers vector"
        className="absolute w-24 sm:w-28 md:w-32 lg:w-36 top-60 sm:top-[18%] md:top-[40%] lg:top-[28%] left-10 sm:left-[35%] md:left-[25%] lg:left-[50%]"
      />
      <p className="absolute top-50 sm:top-[10%] md:top-[35%] lg:top-[23%] left-10 sm:left-[40%] md:left-[15%] lg:left-[48%] font-[Island_Moments] text-[#103255] text-3xl sm:text-4xl md:text-[35px] lg:text-3xl">
        Film Makers
      </p>
      <img
        src={vectorRight}
        alt="Art Curators Arrow"
        className="absolute w-15 sm:w-18 md:w-20 lg:w-20 top-60 sm:top-[26%] md:top-[35%] lg:top-[25%] left-85 sm:left-[70%] md:right-[10%] lg:right-[12%]"
      />
      <p className="absolute top-50 sm:top-[22%] md:top-[30%] lg:top-[20%] lg:left-220 left-70 sm:left-[900px] md:left-130  font-[Island_Moments] text-[#103255] text-3xl sm:text-4xl md:text-[35px] lg:text-3xl">
        Art Curators
      </p>
      <img
        src={vector}
        alt="Branding Arrow"
        className="absolute top-117 sm:top-[40%] md:top-[70%] lg:top-[50%] w-30 sm:w-36 md:w-30 lg:w-40 left-12 sm:left-[35%] md:left-[38%] lg:left-[40%]"
      />
      <p className="absolute top-150 sm:top-[62%] md:top-[84%] lg:top-[80%] left-10 sm:left-[28%] md:left-[35%] lg:left-[30%] font-[Island_Moments] text-[#103255] text-3xl sm:text-4xl md:text-[35px] lg:text-3xl">
        Branding Experts
      </p>
      <div className="mt-50 sm:mt-60 md:top-170 md:absolute lg:absolute lg:top-63 text-center pl-0 md:pl-60 lg:pl-100">
        <p className="font-[Halant] text-[#252729] text-lg sm:text-2xl md:text-[24px] lg:text-[26px] max-w-3xl">
          Take a closer look at the stories V bring to life.
        </p>
        <button className="mt-4 bg-[#F15D2B] text-white px-6 py-2 rounded-full text-sm sm:text-base font-medium hover:scale-105 transition-transform font-[Instrument_Sans]">
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default Team;
