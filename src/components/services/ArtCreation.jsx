import React from 'react'
import line from '../../assets/service/line.svg'
import artCreation from '../../assets/service/art-creation.jpg'
import leftArt from '../../assets/service/left-art.svg'
import arrow from '../../assets/service/arrow.svg'
import rightTopArt from '../../assets/service/right-top-art.svg'
import rightMiddleArt from '../../assets/service/right-middle-art.svg'
import rightBottomArt from '../../assets/service/right-bottom-art.svg'

const ArtCreation = () => {
    return (
        <section className='bg-[rgba(255,157,125,0.7)] h-240 lg:h-170 relative text-center flex items-center flex-col px-4 lg:px-0 py-10 lg:py-10'>
            <p className='font-[Halant] text-[22px] sm:text-[26px] lg:text-[30px] leading-snug'>
                "V take art where it belongs, to the people.” - Vernita Verma
            </p>
            <img src={line} alt="line" className='h-[20px] sm:h-[25px] lg:h-[28.71px] w-[90%] sm:w-[700px] lg:w-[878.05px] mt-2' />

            {/* Back Button */}
            <button className='w-[90px] sm:w-[100px] lg:w-[105px] h-[40px] sm:h-[45px] lg:h-[48px] rounded-[24px] font-[Instrument_Sans] text-[16px] sm:text-[17px] lg:text-[18px] text-[#F15D2B] border-[#F15D2B] border-1 flex flex-row items-center justify-center gap-2 absolute left-4 sm:left-10 lg:left-[90px] top-[160px] sm:top-[80px] lg:top-[105px] md:top-[180px]'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#F15D2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
            </button>

            {/* Center Image Card */}
            <div className="absolute lg:top-[170px] lg:left-[210px] w-[260px] sm:w-[300px] lg:w-[339.4px] h-[300px] sm:h-[340px] lg:h-[368.38px] bg-white shadow-[0px_11.4px_38px_rgba(0,0,0,0.25)] transition-transform duration-300 rotate-0 flex flex-col items-center justify-center gap-[9.5px] py-[11.4px] px-[9.5px] mx-auto top-[230px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:mx-0">
                <img
                    src={artCreation}
                    alt="Art Creation"
                    className="w-[240px] sm:w-[280px] lg:w-[310.4px] h-[260px] sm:h-[300px] lg:h-[325.38px]"
                />
                <p className="font-halant text-[18px] sm:text-[20px] lg:text-[22px] text-[#0F3255]">
                    Art Creation
                </p>
            </div>

            {/* Left Decoration */}
            <img src={leftArt} alt="left art" className='w-[80px] sm:w-[100px] lg:w-[115px] h-[80px] sm:h-[95px] lg:h-[110px] absolute top-[500px] sm:top-[480px] lg:top-[495px] left-[30px] sm:left-[45px] lg:left-[56px]' />

            {/* Text Description */}
            <div className='h-auto w-[90%] sm:w-[80%] lg:w-[400px] absolute top-[600px] sm:top-[160px] lg:top-[160px] left-1/2 lg:left-[610px] -translate-x-1/2 lg:translate-x-0 md:top-150'>
                <p className='font-[Instrument_Sans] text-[16px] sm:text-[18px] lg:text-[20px] text-[#252729] text-left leading-relaxed'>
                    Art isn’t meant to sit on distant walls — it’s <br />
                    meant to breathe, to travel, to belong. <br />
                    Through every festival, every performance, <br />
                    and every gathering, we help stories find <br />
                    their stage and their people. <br />
                    V curates: <br />
                    <ul className='list-disc ml-4 mt-1'>
                        <li>Live Performances</li>
                        <li>Community Events</li>
                        <li>Cultural Storytelling</li>
                    </ul>
                </p>
            </div>

            {/* Explore Now */}
            <div className='w-[120px] sm:w-[130px] lg:w-[139px] h-[25px] sm:h-[27px] lg:h-[29px] absolute bottom-10 lg:bottom-30 left-1/2 -translate-x-1/2'>
                <p className='font-[Instrument_Sans] text-[18px] sm:text-[20px] lg:text-[22px]'>
                    Explore Now
                </p>
                <img src={arrow} alt="arrow" className='mx-auto' />
            </div>

            {/* Right Decorative Images */}
            <img src={rightTopArt} alt="right top art" className='hidden lg:block w-[115px] h-[141px] absolute right-20 top-20 md:block md:top-30' />
            <img src={rightMiddleArt} alt="right middle art" className='hidden lg:block w-[115px] h-[141px] absolute lg:left-220 top-80 md:block md:top-90 md:left-140' />
            <img src={rightBottomArt} alt="right bottom art" className='hidden lg:block w-[115px] h-[141px] absolute right-20 lg:top-120 md:block md:top-150' />
        </section>
    )
}

export default ArtCreation
