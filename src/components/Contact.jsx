import React, { useState } from 'react'
import axios from 'axios'
import topDesign from '../assets/contact/top-design.svg'
import bottomDesign from '../assets/contact/bottom-design.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    const { name, email, phone, message } = formData
    if (!name || !email || !message) {
      setStatus('Please fill all required fields.')
      return
    }
    if (!validateEmail(email)) {
      setStatus('Invalid email address.')
      return
    }
    try {
      const response = await axios.post(
        'https://vernanbackend.ezlab.in/api/contact-us/',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      )
      if (response.status === 201) {
        setStatus('Form Submitted')
        setFormData({ name: '', email: '', phone: '', message: '' })
      }
    } catch (error) {
      console.error(error)
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section className='relative h-210 bg-[rgba(255,157,125,0.7)] flex flex-col items-center justify-center lg:items-start lg:justify-start lg:top-[0px] px-4 sm:px-8 md:px-12'>
      <img src={topDesign} alt="top design" className='w-32 sm:w-40 md:w-48 lg:w-56 h-auto absolute right-0 top-0' />
      <img src={bottomDesign} alt="bottom design" className='w-32 sm:w-40 md:w-48 lg:w-56 h-auto absolute left-0 bottom-0' />

      <p className='max-w-[600px] text-center lg:text-left font-[Instrument_Sans] text-[18px] sm:text-[20px] md:text-[22px] text-[#000000] mt-10 lg:absolute lg:top-[220px] lg:left-[80px]'>
        Whether you have an idea, a question, or simply want <br className='hidden sm:block'/>
        to explore how V can work together, we’re just a <br className='hidden sm:block'/>
        message away. <br className='hidden sm:block'/>
        Let’s catch up over coffee. Great stories always begin with a good conversation
      </p>

      <div className='w-full max-w-[500px] lg:absolute lg:left-[700px] lg:top-[90px] flex flex-col items-center'>
        <div className='w-full text-center'>
          <p className='font-[Halant] text-[30px] sm:text-[36px] md:text-[40px] text-[#252729]'>Join the Story</p>
          <p className='font-[Instrument_Sans] text-[18px] sm:text-[20px] md:text-[24px] text-[#252729]'>Ready to bring your vision to life? Let’s talk.</p>
        </div>

        <form onSubmit={handleSubmit} method="post" className='w-full flex flex-col gap-4 mt-6'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='w-full h-[43px] rounded-xs border border-[#EAEAEA] py-[10.5px] px-[11.5px] bg-[#FFFFFF]'
            placeholder='Your name*'
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='w-full h-[43px] rounded-xs border border-[#EAEAEA] py-[10.5px] px-[11.5px] bg-[#FFFFFF]'
            placeholder='Your email*'
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className='w-full h-[43px] rounded-xs border border-[#EAEAEA] py-[10.5px] px-[11.5px] bg-[#FFFFFF]'
            placeholder='Phone'
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='w-full h-[220px] rounded-xs border border-[#EAEAEA] p-[11.5px] bg-[#FFFFFF]'
            placeholder='Your message*'
          ></textarea>
          <div className='flex justify-center lg:justify-center relative'>
            <button
              className='w-[93px] h-[46px] rounded-[24px] py-[12px] px-[16px] bg-[#F15D2B] shadow-[0px_4px_12px_0px_#00000033] font-[Instrument_Sans] text-[18px] text-[#FFFFFF]'
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        {status && (
          <p className={`text-center mt-3 font-[Instrument_Sans] text-[16px] ${status === 'Form Submitted' ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}

        <div className='w-full flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 mt-6 text-center'>
          <p className='font-[Halant] font-bold text-[16px] sm:text-[17px] text-[#F15D2B]'>vernita@varnanfilms.co.in</p>
          <div className='hidden sm:block w-[1px] h-[30px] bg-[#F15D2B]'></div>
          <p className='font-[Halant] font-bold text-[16px] sm:text-[17px] text-[#F15D2B]'>+91 98736 84567</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
