import React from 'react'
import cam from '../assets/portfolio/cam.svg'
import design from '../assets/portfolio/design.svg'
import subtract from '../assets/portfolio/subtract.svg'
import shoot from '../assets/portfolio/shot.png'
import leftArrow from '../assets/portfolio/left-arrow.svg'
import rightArrow from '../assets/portfolio/right-arrow.svg'

const Portfolio = () => {
    return (
        <section className='relative min-h-screen min-w-screen bg-[rgba(255,157,125,0.7)] flex flex-col items-center lg:block lg:top-[0px] px-4 sm:px-8'>

            <div className='w-full max-w-[364px] text-center mt-10 lg:absolute lg:top-[50px] lg:left-[440px]'>
                <p className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-[Halant] text-[#252729]'>The Highlight Reel</p>
                <p className='font-[Instrument_Sans] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#252729]'>Watch the magic we’ve captured.</p>
            </div>

            <img src={cam} alt="camera" className='w-24 sm:w-40 md:w-48 lg:w-56 h-auto lg:absolute lg:top-[140px] lg:left-20 mt-10 lg:mt-0' />

            <div className='relative w-full max-w-[600px] h-auto lg:w-[601px] lg:h-[367px] lg:absolute lg:top-[200px] lg:left-[369px] bg-[radial-gradient(62.03%_164.17%_at_50%_50%,#000000_0%,rgba(37,39,41,0.5)_50%,rgba(129,136,143,0)_100%)] mt-10 lg:mt-0'>

                <img src={subtract} alt="subtract design" className='w-full h-auto' />

                <div className='absolute top-[40px] left-[10px] w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[165px] sm:h-[220px] md:h-[240px] lg:h-[255px] bg-[#FFFFFF] lg:top-[60px] md:top-[60px]'></div>
                <img src={leftArrow} alt="left arrow" className='absolute top-[100px] sm:top-[120px] md:top-[130px] left-4 w-[30px] sm:w-[80px] md:w-[50px] lg:w-[50px] lg:left-5 h-auto' />

                <img src={shoot} alt="shooting video" className='absolute top-[40px] left-[50px] sm:left-[80px] md:left-[75px] lg:left-[90px] w-[300px] sm:w-[350px] md:w-[450px] md:h-[240px] lg:w-[421px] h-[165px] lg:h-[256px] lg:top-[60px] md:top-[60px]' />
                <svg className='absolute w-[40px] sm:w-[65px] md:w-[70px] lg:w-[78.33px] h-auto top-[100px] sm:top-[150px] md:top-[160px] left-[180px] sm:left-[220px] md:left-[240px] lg:left-[260px]' viewBox="0 0 99 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96.1919 11.1925C95.0639 6.95554 92.5912 3.36932 88.3542 2.24139C80.6756 0.187988 49.166 0 49.166 0C49.166 0 17.6564 0.187988 9.97781 2.24139C5.74086 3.36932 3.28255 6.95554 2.14017 11.1925C0.0867636 18.8711 0 34.7054 0 34.7054C0 34.7054 0.0867636 50.5398 2.14017 58.2183C3.26809 62.4553 5.74086 66.0415 9.97781 67.1694C17.6564 69.2229 49.166 69.4108 49.166 69.4108C49.166 69.4108 80.6756 69.2229 88.3542 67.1694C92.5912 66.0415 95.0639 62.4553 96.1919 58.2183C98.2453 50.5398 98.332 34.7054 98.332 34.7054C98.332 34.7054 98.2453 18.8711 96.1919 11.1925Z" fill="#FF0033" />
                    <path d="M65.073 34.7057L39.0439 20.2451V49.1663" fill="white" />
                </svg>

                <div className='absolute top-[40px] right-[10px] w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[165px] sm:h-[220px] md:h-[240px] lg:h-[255px] bg-[#FFFFFF] lg:top-[60px] md:top-[60px]'></div>
                <img src={rightArrow} alt="right arrow" className='absolute top-[100px] sm:top-[120px] md:top-[130px] right-4 w-[30px] sm:w-[80px] md:w-[50px] lg:w-[50px] h-auto lg:right-[20px]' />
            </div>

            <img src={design} alt="design" className='w-32 sm:w-40 md:w-48 lg:w-56 h-auto right-0 bottom-0 lg:mt-0 absolute lg:top-[235px] lg:left-[1040px]' />

        </section>
    )
}

export default Portfolio
