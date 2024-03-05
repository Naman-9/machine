import React, { useEffect, useRef, useState } from 'react';

function OtpInput({ length, onOtpSubmit = () => {} }) {

  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if(inputRefs.current[0]){
        inputRefs.current[0].focus();
    }
  },[])

  const handleChange = (idx, e) => {
    const value = e.target.value;
    if(isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[idx] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    // **using newOtp bcoz setOtp is asynchronous so, we may not have the latest value
    if(combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next empty input feild if current feild is filled
    const emptyIdx = newOtp.indexOf("");
    if(value && idx < length-1 && emptyIdx !== -1){
        inputRefs.current[emptyIdx].focus();
    }

   };
  const handleClick = (idx) => {

    // put cursor on the very next to input
    inputRefs.current[idx].setSelectionRange(1,1);

    // optional validation
    if(idx > 0 && !otp[idx-1]){
        inputRefs.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (idx, e) => {

    // if Backspace
    if((e.key === "Backspace" && !otp[idx] && idx > 0 && inputRefs.current[idx - 1])){
        inputRefs.current[idx - 1].focus();
    }
  };

  return (
    <div className="">
      {otp.map((value, idx) => {
        return (
          <input
            key={idx}
            type="text"
            ref={(input) => (inputRefs.current[idx] = input)}
            value={value}
            onChange={(e) => handleChange(idx, e)}
            onClick={() => handleClick(idx)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            className='otpInput border-2 border-black w-10 h-10 m-5 text-center text-lg'
          />
        );
      })}
    </div>
  );
}

function PhoneOtp() {
    
  const onOtpSubmit = (otp) => {
    console.log('------login Success-----', otp);
  };

  return (
    <div>
      <p className="">Enter OTP</p>
      <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
    </div>
  );
}

export default PhoneOtp;
