import React from 'react'
import cross from "../assets/images/close.svg"

const FormMain = ({children}) => {
  return(
    <div className='bg-white p-6'>
      {children}
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
      </FormMain>
    </>
  )
}

export default PaymentForm