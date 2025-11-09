import React from 'react'
import line from '../../assets/service/line.svg'
import film from '../../assets/service/film.png'
import lefttape from '../../assets/service/left-tape.png'
import centertape from '../../assets/service/center-tape.png'
import righttape from '../../assets/service/right-tape.png'
import branding from '../../assets/service/branding.png'
import art from '../../assets/service/art.png'
import design from '../../assets/service/design.svg'

const Service = ({ onMouseEnter}) => {
  return (
    <section className='bg-[rgba(255,157,125,0.7)] min-h-screen relative text-center flex items-center flex-col py-10 px-4'>
      <p className='font-[Halant] text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-tight'>The storyboard reveals the breadth of our craft.</p>
      <img src={line} alt="line" className='h-[20px] sm:h-[24px] lg:h-[28.71px] w-[90%] sm:w-[600px] md:w-[750px] lg:w-[878.05px] mt-2' />

      <div className='flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 mt-10 relative lg:static'>

        <div className="relative w-[90%] sm:w-[300px] md:w-[320px] lg:w-[329.4px] h-[320px] sm:h-[340px] lg:h-[348.38px] bg-white rounded-xl shadow-[0px_11.4px_38px_rgba(0,0,0,0.25)] transition-transform duration-300 rotate-0 lg:rotate-8 flex flex-col items-center justify-center mx-auto" onMouseEnter={onMouseEnter}>
          <img src={film} alt="Film Production" className="w-[90%] h-[280px] sm:h-[300px] lg:w-[310.4px] lg:h-[325.38px] rounded-[10px] py-3 object-cover" />
          <img src={lefttape} alt="left tape" className='absolute w-[180px] sm:w-[200px] lg:w-[234px] h-[80px] sm:h-[90px] lg:h-[106px] -top-10 sm:-top-12 -left-10 sm:-left-16 lg:-left-20 rotate-0 lg:-rotate-8' />
          <p className="font-halant text-[18px] sm:text-[20px] lg:text-[22px] text-[#0F3255] pb-3">Film Production</p>
        </div>

        <div className="relative w-[90%] sm:w-[300px] md:w-[320px] lg:w-[329.4px] h-[320px] sm:h-[340px] lg:h-[348.38px] bg-white rounded-xl shadow-[0px_11.4px_38px_rgba(0,0,0,0.25)] transition-transform duration-300 rotate-0 flex flex-col items-center justify-center mx-auto">
          <img src={branding} alt="Branding" className="w-[90%] h-[280px] sm:h-[300px] lg:w-[310.4px] lg:h-[325.38px] rounded-[10px] py-3 object-cover" />
          <img src={centertape} alt="left tape" className='absolute w-[180px] sm:w-[200px] lg:w-[234px] h-[80px] sm:h-[90px] lg:h-[106px] -top-10 sm:-top-12 lg:-top-14 left-[20%] sm:left-[25%] md:left-[30%] lg:left-17' />
          <p className="font-halant text-[18px] sm:text-[20px] lg:text-[22px] text-[#0F3255] pb-3">Branding</p>
        </div>

        <div className="relative w-[90%] sm:w-[300px] md:w-[320px] lg:w-[329.4px] h-[320px] sm:h-[340px] lg:h-[348.38px] bg-white rounded-xl shadow-[0px_11.4px_38px_rgba(0,0,0,0.25)] transition-transform duration-300 rotate-0 lg:-rotate-8 flex flex-col items-center justify-center mx-auto">
          <img src={art} alt="art creation" className="w-[90%] h-[280px] sm:h-[300px] lg:w-[310.4px] lg:h-[325.38px] rounded-[10px] py-3 object-cover" />
          <img src={righttape} alt="left tape" className='absolute w-[180px] sm:w-[200px] lg:w-[234px] h-[80px] sm:h-[90px] lg:h-[106px] -top-10 sm:-top-12 lg:-top-11 left-[60%] sm:left-[65%] md:left-[70%] lg:left-47 rotate-0 lg:rotate-38' />
          <p className="font-halant text-[18px] sm:text-[20px] lg:text-[22px] text-[#0F3255] pb-3">Art Curation</p>
        </div>
      </div>

      <div className='mt-10 grid grid-cols-3  '>
        <img src={design} alt="" className='h-[60px] sm:h-[80px] md:h-[100px] lg:h-[119px]'/>
        <img src={design} alt="" className='h-[60px] sm:h-[80px] md:h-[100px] lg:h-[119px]'/>
        <img src={design} alt="" className='h-[60px] sm:h-[80px] md:h-[100px] lg:h-[119px]'/>
      </div>
    </section>
  )
}

export default Service
