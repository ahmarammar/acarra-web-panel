import React, { useState } from 'react'
import cross from "../assets/images/close.svg"
import locationIcon from "../assets/images/location.svg"
import calendarIcon from "../assets/images/calendar.svg"
import CardImage from "../assets/images/mobile-card-photo.png"

const FormMain = ({children}) => {
  return(
    <div className='bg-white pt-6 px-6 pb-20 tablet:container tablet:mx-auto'>
      {children}
    </div>
  )
}

const PaymentProcessing = () => {

  const [activeButton, setActiveButton] = useState({
    cash: true,
    creditCard: false,
    ewallet: false
  });

  const handleActiveButton = (e) => {
    if(e.target.value === "cash"){
      setActiveButton({
        cash: true,
        creditCard: false,
        ewallet: false
      })
    }
    if(e.target.value === "credit-card"){
      setActiveButton({
        cash: false,
        creditCard: true,
        ewallet: false
      })
    }
    if(e.target.value === "e-wallet"){
      setActiveButton({
        cash: false,
        creditCard: false,
        ewallet: true
      })
    }
  }

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
            <button className={`${activeButton.cash && "border border-black bg-white"} bg-btn-gray rounded-md py-4 font-bold text-text-color w-[48%] tablet:w-auto tablet:flex-1 min-h-[4rem]`} onClick={handleActiveButton} value={"cash"}>Cash</button>
            <button className={`${activeButton.creditCard && "border border-black bg-white"} bg-btn-gray rounded-md py-4 font-bold text-text-color w-[48%] tablet:w-auto tablet:flex-1 min-h-[4rem]`} onClick={handleActiveButton} value={"credit-card"}>Credit Card</button>
            <button className={`${activeButton.ewallet && "border border-black bg-white"} bg-btn-gray rounded-md font-bold text-text-color w-[48%] px-8 tablet:w-auto tablet:flex-1 min-h-[4rem]`} onClick={handleActiveButton} value={"e-wallet"}>eWallet/
            Virtual bank</button>
          </div>
          <div className='flex items-start gap-5 mt-8'>
            <input type="checkbox" name='agreed' className='h-8 w-8 tablet:h-5 tablet:w-5 tablet:mt-0.5' />
            <label htmlFor="agreed" className='text-grayish-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <span className='text-full-blue underline font-semibold'>do eiusmod</span></label>
          </div>
        </div>
      </div>
    </main>
  )
}

const Card = () => {
  return(
    <div className='border p-4 rounded-lg flex items-center gap-5 mt-6 min-h-[10rem] relative'>
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
        <h3 className='font-bold text-xl text-text-color tablet:hidden'>Rp 350.000</h3>
      </div>
      <h3 className='absolute right-10 top-10 font-bold text-xl text-text-color hidden tablet:inline'>Rp 350.000</h3>
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
    <header className='min-h-[5.5rem] w-full pt-6 pb-5 pl-8 pr-9 bg-header-bg text-white '>
      <h2 className='max-w-xs tablet:max-w-full text-2xl font-semibold'>Choose the form of payment</h2>
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