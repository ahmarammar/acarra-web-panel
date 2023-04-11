import React, { useState, useEffect } from 'react'
import IndonesianFlagIcon from "../assets/images/flag_indonesia.svg"
import cross from "../assets/images/close.svg"


const AuthForm = ({setShowModal, finalStep, sentToAuth}) => {

  const [cellNumber, setCellNumber] = useState("");
  const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const nameRegex = /^[a-zA-Z' -]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(nameRegex.test(name) && emailRegex.test(email) && name != "" && email != ""){
      sentToAuth(true);
    }else{
      sentToAuth(false);
    }
  },[name,email])

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleInputChange = (e) => {

    const regex = /^\(45\) [0-9]{4}-[0-9]{4}$/;

    if(regex.test(e.target.value)){ 
      setLoginBtnDisabled(!loginBtnDisabled);
    }

    if(e.target.value.length <= 13){
      setLoginBtnDisabled(true);
    }

    const maxNumberLength = 10;
    let formattedInput = e.target.value.replace(/[^0-9]/g, ""); 

    if (formattedInput.length > maxNumberLength) {
      formattedInput = formattedInput.substr(0, maxNumberLength);
    }

    if (formattedInput.length >= 2 && formattedInput.substring(0, 2) === "45") {
      formattedInput = "(" + formattedInput.substring(0, 2) + ") " + formattedInput.substring(2);
    }

    if (formattedInput.length >= 9) {
      formattedInput = formattedInput.substring(0, 9) + "-" + formattedInput.substring(9);
    }

    setCellNumber(formattedInput);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      let formattedInput = cellNumber;
      if (formattedInput.endsWith("-")) {
        formattedInput = formattedInput.substring(0, formattedInput.length - 1);
      } else if (formattedInput.endsWith(") ")) {
        formattedInput = formattedInput.substring(0, formattedInput.length - 2);
      } else if (formattedInput.startsWith("(") && formattedInput.endsWith(")") && formattedInput.length > 2) {
        formattedInput = formattedInput.substring(1, formattedInput.length - 1);
      }
      setCellNumber(formattedInput);
    }
  }

  const handleSubmission = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowModal(true);
    },200)
  }

  if(!finalStep){
    return (
      <form className='pt-6 px-5' onSubmit={handleSubmission}>
        <p className='text-sm text-[#718096]'>Enter your mobile number, we will send you a code via SMS for verification</p>
        <div className='w-full border border-gray-200 mt-6 flex gap-4 pl-4 py-3 shadow-inner rounded-sm'>
          <img src={IndonesianFlagIcon} alt="" className='h-6'/>
          <input type="text" className='w-full border-none pl-2 placeholder:text-[#D3DEE9] outline-none' placeholder='(45) 0000-0000' onChange={handleInputChange} onKeyDown={handleKeyDown} value={cellNumber} maxLength={14} />
        </div>
        <button className='w-full mt-6 py-4 rounded-lg outline-none bg-full-blue disabled:bg-grayish-white disabled:text-white/50 text-white' disabled={loginBtnDisabled}>Login</button>
      </form>
    )
  }else{
    return (
      <>
        <form className='pt-6 px-5'>
          <h2 className='text-xl font-bold'>We are almost there</h2>
          <p className='mt-6 text-sm text-[#718096]'>To continue we need some data</p>
          <div className='mt-4 space-y-4'>
            <input type="text" placeholder='Enter your name' className='border borde-gray-300 text-text-color font-semibold placeholder:font-normal outline-none pl-4 py-3 w-full rounded-md' maxLength={"20"} onChange={handleName} value={name}/>
            <input type="email" placeholder='Enter your email' className='border borde-gray-300 text-text-color font-semibold placeholder:font-normal outline-none pl-4 py-3 w-full rounded-md' maxLength={"30"} onChange={handleEmail} value={email}/>
          </div>
        </form>
      </>
    )
  }

}

const AuthHeader = () => {
  return (
    <header className='min-h-[7rem] w-full pt-6 pb-5 pl-8 pr-9 bg-header-bg text-white '>
      <h2 className='max-w-xs text-2xl font-semibold'>Login or create your account</h2>
    </header>
  )
}

const AuthFooter = ({finalStep, datafromAuthForm}) => {
  const [registerBtnDisabled, setRegisterBtnDisabled] = useState();

  useEffect(() => {
    setRegisterBtnDisabled(!datafromAuthForm);
  },[datafromAuthForm])
  
  return (
    <footer className='absolute bottom-0 left-0 right-0 border-t border-gray-200 p-8 flex items-center justify-between'>
      <h4 className='font-semibold'>Come back</h4>
      {finalStep && <button className='py-3 px-8 rounded-lg outline-none bg-full-blue text-white disabled:bg-grayish-white disabled:text-white/50' disabled={registerBtnDisabled}>Register</button>}
    </footer>
  )
}

const Overlay = ({children,showModal}) => {
  return (
    <>
      {showModal && <div className='min-h-screen bg-black/60 w-full z-30 absolute'></div>}
      {children}
    </>
    
  )
}

const AuthModal = ({setShowModal, setFinalStep}) => {

  const [confirmationCode, setConfirmationCode] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });

  const handleCodeChange = (e) => {
    if(e.target.value.length <= 1){
      setConfirmationCode({
        ...confirmationCode,
        [e.target.name]: e.target.value
      });
    }
  }

  const handleCodeSubmit = (e) => {
    if(e.key === "Enter" && Object.values(confirmationCode).every((item) => item !== "")){
      setShowModal(false);
      setFinalStep(true);
    }
  }

  return (
    <div className='bg-white rounded-xl min-h-[16rem] min-w-[80%] absolute top-[35%] left-5 right-5 shadow-xl z-50 p-5'>
      <button className='absolute right-5 top-[2.1rem]' onClick={() => setShowModal(false)}><img src={cross} alt="" className='h-4' /></button>
      <h2 className='max-w-xs text-2xl font-bold'>Login or create your account</h2>
      <p className='text-[#718096] text-sm mt-3 max-w-[90%]'>We send a code via SMS to the sell phone provided. Please enter it to log into your account</p>
      <div className='flex justify-between mt-6 text-xl'>
        <input type="number" className='caret-transparent border border-gray-300 w-10 h-12 text-center font-bold outline-none' placeholder='0' name='code1' onChange={handleCodeChange} value={confirmationCode["code1"]}/>
        <input type="number" className='caret-transparent border border-gray-300 w-10 h-12 text-center font-bold outline-none' placeholder='0' name='code2' onChange={handleCodeChange} value={confirmationCode["code2"]}/>
        <input type="number" className='caret-transparent border border-gray-300 w-10 h-12 text-center font-bold outline-none' placeholder='0' name='code3' onChange={handleCodeChange} value={confirmationCode["code3"]}/>
        <input type="number" className='caret-transparent border border-gray-300 w-10 h-12 text-center font-bold outline-none' placeholder='0' name='code4' onChange={handleCodeChange} value={confirmationCode["code4"]}/>
        <input type="number" className='caret-transparent border border-gray-300 w-10 h-12 text-center font-bold outline-none' placeholder='0' name='code5' onChange={handleCodeChange} value={confirmationCode["code5"]}/>
        <input type="number" className='caret-transparent border border-gray-300 w-10 h-12 text-center font-bold outline-none' placeholder='0' name='code6' onChange={handleCodeChange} value={confirmationCode["code6"]} onKeyDown={handleCodeSubmit}/>
      </div>
    </div>
  )
}

const Auth = () => {

  const [showModal, setShowModal] = useState(false);
  const [finalStep, setFinalStep] = useState(false);
  const [datafromAuthForm, setDataFromAuthForm] = useState(false);

  const handleDataFromAuthForm = (data) => {
    setDataFromAuthForm(data);
  };

  return (
    <>
      {showModal && <AuthModal setShowModal={setShowModal} setFinalStep={setFinalStep}/>}
      <Overlay showModal={showModal}>
        <AuthHeader />
        <AuthForm setShowModal={setShowModal} setFinalStep={finalStep} finalStep={finalStep} sentToAuth={handleDataFromAuthForm} />
        <AuthFooter finalStep={finalStep} datafromAuthForm={datafromAuthForm} />
      </Overlay>
    </>
  )
}

export default Auth