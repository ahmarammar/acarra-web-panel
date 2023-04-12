import React from 'react'
import cross from "../assets/images/close.svg"
import locationIcon from "../assets/images/location.svg"
import calendarIcon from "../assets/images/calendar.svg"
import CardImage from "../assets/images/mobile-card-photo.png"

const FormMain = ({children}) => {
  return(
    <div className='bg-white pt-6 px-6 pb-20'>
      {children}
    </div>
  )
}

const PaymentProcessing = () => {
  return(
    <main>
      <div className='mt-7'>
        {/* Heading */}
        <h3 className='font-bold text-xl text-text-color'>Selected service</h3>
        <Card />
        {/* Inputs  */}
        <div className='mt-5 font-bold text-text-color'>
          <label htmlFor="address">Enter your location</label>
          <input type="text" placeholder='Enter address' className='border borde-gray-300 text-text-color font-semibold placeholder:font-normal placeholder:text-grayish-blue outline-none pl-4 py-4 mt-2.5 w-full rounded-md' maxLength={"20"} name='address'/>
        </div>
        <div className='mt-5 font-bold text-text-color'>
          <label htmlFor="not">Note (optional)</label>
          <input type="text" placeholder='Enter text here' className='border borde-gray-300 text-text-color font-semibold placeholder:font-normal placeholder:text-grayish-blue outline-none pl-4 py-4 mt-2.5 w-full rounded-md' maxLength={"20"} name='note'/>
        </div>
        {/* Payment gateway */}
        <div className='mt-6'>
          <h2 className='font-bold text-text-color text-[1.75rem]'>Choose a way to pay</h2>
          <div className='flex flex-wrap gap-3 mt-7'>
            <button className='border border-black rounded-md py-4 font-bold text-text-color w-[48%]'>Cash</button>
            <button className='bg-btn-gray rounded-md py-4 font-bold text-text-color w-[48%]'>Credit Card</button>
            <button className='bg-btn-gray rounded-md py-2 font-bold text-text-color w-[48%] px-8'>eWallet/
            Virtual bank</button>
          </div>
          <div className='flex items-start gap-5 mt-6'>
            <input type="checkbox" name='agreed' className='mt-1.5' />
            <label htmlFor="agreed" className='text-grayish-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <span className='text-full-blue underline font-semibold'>do eiusmod</span></label>
          </div>
        </div>
      </div>
    </main>
  )
}

const Card = () => {
  return(
    <div className='border p-4 rounded-lg flex items-center gap-5 mt-6'>
      <img src={CardImage} alt="" className='rounded-xl h-[4.5rem]'/>
      <div className='space-y-2'>
        <h3 className='font-bold text-lg text-text-color'>Japanese lessons</h3>
        <div className='flex items-center gap-2'>
          <img src={calendarIcon} alt="" className='h-4'/>
          <span className='text-grayish-black text-xs font-semibold'>Nov 7, 2020 · 11:30</span>
        </div>
        <div className='flex items-center gap-2'>
          <img src={locationIcon} alt="" className='h-4'/>
          <span className='text-grayish-black text-xs font-semibold'>Client`s place</span>
        </div>
        <h3 className='font-bold text-xl text-text-color'>Rp 350.000</h3>
      </div>
    </div>
  )
}

const UserInfo = () => {
  return(
    <div className='bg-grayish-white border rounded-lg py-4 px-5 flex justify-between'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center h-12 w-12 rounded-full bg-grayish-blue'>
          <span className='mb-1 font-bold text-xl'>J</span>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='font-bold text-xl text-text-color'>John</p>
          <span className='font-semibold text-sm text-[#718096]'>(88) 99602-24-4</span>
        </div>
      </div>
      <button className='bg-btn-gray text-text-color font-bold text-sm py-4 px-3'>Log out</button>
    </div>
  )
}

const PaymentFormFooter = () => {
  
  return (
    <footer className='border-t border-gray-200 p-8 flex items-center justify-between'>
      <h4 className='font-semibold text-text-color text-lg'>Previous</h4>
      <button className='py-4 px-12 rounded-lg text-lg outline-none bg-full-blue text-white disabled:bg-grayish-white disabled:text-white/50'>Next</button>
    </footer>
  )
}

const PaymentFormHeader = () => {
  return (
    <header className='min-h-[7rem] w-full pt-6 pb-5 pl-8 pr-9 bg-header-bg text-white '>
      <h2 className='max-w-xs text-2xl font-semibold'>Choose the form of payment</h2>
      <button className='absolute right-5 top-[2.1rem]' onClick={() => setShowModal(false)}><img src={cross} alt="" className='h-4' /></button>
    </header>
  )
}

const PaymentForm = () => {
  return (
    <>
      <PaymentFormHeader />
      <FormMain>
        <UserInfo />
        <PaymentProcessing />
      </FormMain>
      <PaymentFormFooter />
    </>
  )
}

export default PaymentForm