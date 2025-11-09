import React from 'react'
import box from '../assets/about/box.png'
import pmserve from '../assets/about/pmserve.png'
import r from '../assets/about/r.png'
import serve from '../assets/about/serve.png'
import object from '../assets/about/object.png'
import ted from '../assets/about/ted.png'
import coco from '../assets/about/coco-cola.png'
import d from '../assets/about/d.png'
import c from '../assets/about/c.png'
import fdesign from '../assets/about/fdesign.svg'

const About = () => {
    return (
        <section className='relative bg-[rgba(255,157,125,0.7)] h-auto lg:h-160 py-10 overflow-hidden transition-all duration-500'>
            <p className="font-[Halant] text-base sm:text-lg md:text-2xl lg:text-[26px] max-w-3xl mx-auto lg:absolute lg:top-[100px] lg:left-30 text-center px-4">
                A montage of familiar faces and names.
            </p>

            <p className="font-[Instrument_Sans] text-[#252729] text-sm sm:text-base md:text-lg lg:text-[20px] max-w-3xl mx-auto lg:absolute lg:top-[190px] lg:left-40 text-center leading-relaxed px-6 mt-4 lg:mt-0">
                Some stories come from the biggest names. <br />
                Others begin with bold, rising voices. <br />
                We’ve been fortunate to walk alongside both - <br />
                listening, creating, and building stories that matter.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 md:gap-0 mt-16 lg:mt-0 lg:absolute lg:top-[400px] lg:left-20'>
                <div className='relative lg:transform lg:left-10 lg:top-0 left-20 rotate-10  sm:rotate-0 md:rotate-10 lg:rotate-10 md:left-10  '>
                    <img src={box} alt="left box" className='h-[180px] w-[200px] sm:h-[200px] sm:w-[235px] shadow-[0px_12px_40px_0px_#00000026]' />
                    <p className='absolute text-[32px] sm:text-[40px] font-[Instrument_sans] font-weight-400 text-[#103255] top-[25%] left-[20%] rotate-10 md:top-[30%] md:left-[40%]'>85+</p>
                    <p className='absolute text-[22px] sm:text-[24px] text-[#F15D2B] top-[50%] left-[15%] rotate-10 md:top-[55%] md:text-[26px] lg:left-[30%] md:left-20'>Projects</p>
                </div>

                <div className='relative lg:transform lg:left-0 lg:top-0 left-20 rotate-10 -top-15 sm:rotate-0 md:rotate-10 lg:rotate-10 md:top-4 md:left-2'>
                    <img src={box} alt="middle box" className='h-[180px] w-[200px] sm:h-[200px] sm:w-[235px] shadow-[0px_12px_40px_0px_#00000026]' />
                    <p className='absolute text-[32px] sm:text-[40px] font-[Instrument_sans] text-[#103255] top-[25%] left-[20%] rotate-10 md:top-[30%] md:left-[40%]'>50+</p>
                    <p className='absolute text-[22px] sm:text-[24px] text-[#F15D2B] top-[50%] left-[10%] rotate-10 md:top-[55%] md:text-[26px] lg:left-[20%] md:left-10 '>Happy Clients</p>
                </div>

                <div className='relative lg:transform lg:left-0  lg:top-0 left-20 rotate-10 -top-25 sm:rotate-0 md:rotate-10 lg:rotate-10  md:left-0 md:top-8 '>
                    <img src={box} alt="right box" className='h-[180px] w-[200px] sm:h-[200px] sm:w-[235px] shadow-[0px_12px_40px_0px_#00000026]' />
                    <p className='absolute text-[32px] sm:text-[40px] font-[Instrument_sans] text-[#103255] top-[25%] left-[20%] rotate-10 md:top-[30%] md:left-[40%]'>10+</p>
                    <p className='absolute text-[22px] sm:text-[24px] text-[#F15D2B] top-[50%] left-[10%] rotate-10 md:top-[55%] md:text-[26px] lg:left-[20%] md:left-10'>Experts Team</p>
                </div>
            </div>

            <p className='font-[Island_Moments] text-[24px] sm:text-xl md:text-2xl lg:text-[40px] text-center text-[#0F3255]  lg:absolute lg:top-0 lg:left-[700px] px-4 md:mt-10 md:text-[32px] '>
                Every project is more than just a brief - <br />
                it’s a new chapter waiting to be written. <br />
                Together, we've crafted tales that inspire, <br />
                connect, and endure.
            </p>

            <div className='relative flex justify-center mt-10 lg:mt-0 lg:absolute lg:h-100 lg:w-120 lg:right-2 lg:top-60 h-90 w-80 md:ml-40'>
                <img src={object} alt="" className='w-[345px] h-[261.71px] top-34 left-10 absolute' />

                <div className='absolute bottom-0.5 -right-35 h-10 w-[100px] rotate-90 md:left-100 md:bottom-0 lg:bottom-10'>
                    <img src={pmserve} alt="pm serve" className='h-10 w-[219.86px] -rotate-90 left-7.5 -bottom-5 absolute' />
                    <img src={r} alt="r" className='h-[3.33px] w-[6.43px] -rotate-90 top-[25px] left-14.5 absolute' />
                </div>

                <img src={ted} alt="ted" className='w-[111px] h-10 top-[240px] left-[380px] rotate-60 absolute' />

                <div className='h-[40px] w-[91px] top-[120px] left-[320px] rotate-30 absolute'>
                    <svg className='w-[20.76px] h-[23.66px] absolute top-1 left-1' viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9325 0.954311L30.0512 0.472753C22.0867 -1.55438 10.3971 2.93844 4.05029 13.9315L-2.67029e-05 20.9469L2.54871 22.4184L6.59902 15.403C6.94519 14.8034 7.32188 14.2294 7.70279 13.6752L17.8181 19.5152L12.7436 28.3044L15.2924 29.7759L30.9623 2.63479L31.9325 0.954311ZM27.3124 3.0705L19.2965 16.9545L9.52638 11.3137C14.7881 5.29748 22.0525 2.68158 27.3124 3.0705Z" fill="#FF9D7D" />
                    </svg>
                    <svg className='w-[20.76px] h-[23.66px] absolute top-2 left-4' viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0664 0L11.3272 1.28037L0.0001688 20.8993L2.5489 22.3708L6.66852 15.2355C7.07211 15.3998 7.47538 15.5235 7.87467 15.6295L7.53804 25.2869L10.4319 26.9577L10.8193 15.9248C13.5027 15.7301 15.802 14.2831 17.066 12.1869C19.1435 8.74167 18.3083 3.60375 13.3408 0.735756L12.0664 0ZM13.0751 4.13894C15.7368 6.24792 15.7042 8.77435 14.5613 10.6697C13.4263 12.5519 11.1351 13.8096 8.13926 12.6881L13.0751 4.13894Z" fill="#FF9D7D" />
                    </svg>
                    <svg className='w-[20.76px] h-[23.66px] absolute top-2.5 left-7' viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66064 0L8.1822 2.56074L10.6646 3.99393L-0.000236452 22.4659L2.54849 23.9374L13.2133 5.46544L15.908 7.02125L17.3865 4.46052L9.66064 0Z" fill="#FF9D7D" />
                    </svg>
                    <svg className='w-[26px] h-[32px] absolute top-4 left-10' viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3947 2.27465C17.2978 -2.4001 6.90963 0.363 2.25198 8.43029C-2.40568 16.4976 0.395475 26.8755 8.49238 31.5503L9.95949 29.0092C3.24252 25.1311 0.938554 16.5952 4.80241 9.90278C8.66626 3.21039 17.2106 0.937713 23.9276 4.81575L25.3947 2.27465Z" fill="#FF9D7D" />
                    </svg>
                    <svg className='w-[25px] h-[25px] absolute top-5.5 left-11.5' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.2239 1.61188C12.4418 -1.72641 4.98678 0.289947 1.63276 6.09925C-1.72125 11.9086 0.260052 19.373 6.04214 22.7113C11.8242 26.0496 19.2792 24.0332 22.6333 18.2239C25.9873 12.4146 24.006 4.95017 18.2239 1.61188ZM16.7454 4.17261C21.1485 6.71472 22.6386 12.3286 20.0845 16.7524C17.5304 21.1762 11.9236 22.6926 7.52058 20.1505C3.11752 17.6084 1.62741 11.9946 4.18149 7.57077C6.73558 3.14697 12.3424 1.6305 16.7454 4.17261Z" fill="#FF9D7D" />
                    </svg>
                    <svg className='w-[25px] h-[25px] absolute top-9 left-15' viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1895 0L11.4502 1.28037L1.23978e-05 21.1127L2.54875 22.5842L13.1827 4.16562C14.3826 5.20428 15.5015 6.70831 16.1304 8.41039C16.966 10.6721 17.0118 13.1989 15.5539 15.7242L9.33209 26.5006L11.8808 27.9721L18.1026 17.1957C20.0199 13.8748 19.9733 10.305 18.8895 7.37151C17.8057 4.43807 15.7654 2.06455 13.4638 0.735754L12.1895 0Z" fill="#FF9D7D" />
                    </svg>


                </div>

                <img src={ted} alt="ted" className='w-[111px] h-10 top-[70px] left-[210px] absolute' />

                <img src={coco} alt="coco cola" className='w-[127px] h-[40px] -rotate-30 absolute top-[110px] left-[70px]' />

                <div className='h-[40px] w-[159px] top-[240px] -left-[20px] -rotate-60 absolute '>
                    <img src={d} alt="D" className='w-[11.76px] h-[16.66px] rotate-40 absolute top-5 left-1' />
                    <img src={c} alt="C" className='w-[28.18px] h-[35px] rotate-60 absolute top-3' />
                    {/* <img src={fdesign} alt="F design" className='w-[159px] h-10'/> */}
                    <img src={fdesign} alt="f design" className='rotate-50 w-[159px] h-35 left-0 absolute -top-13' />
                </div>

                <div className='absolute bottom-0.5 left-2 h-10 w-[100px] rotate-90 md:left-100 md:bottom-0 lg:bottom-8 '>
                    <img src={serve} alt="serve" className='h-10 w-[219.86px] left-7.5 top-113 -rotate-90 absolute' />
                    <img src={r} alt="r" className='h-[3.33px] w-[6.43px] rotate-90 top-114 left-15 absolute' />
                </div>
            </div>
        </section>
    )
}

export default About
