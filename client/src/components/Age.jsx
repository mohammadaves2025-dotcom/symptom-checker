import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Concern from './Concern';
import Heading from './Heading';
import { SymptomContext } from '../context/SymptomContext';

const Age = () => {
  const currentStep = 3;
  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const navigate = useNavigate();
  const {age, setAge} = useContext(SymptomContext);

  const changehandler = (e) => {
    setAge(e.target.value);
  };

  const handleNext = () => {
    if (!age || age <= 0) return toast.error("Enter Age First");
    navigate('/sex');
  };




  return (
    
    <>
    <Heading />
    <div className='mx-20 animate-fadeIn'>
      <div className='w-full h-2 bg-gray-200 rounded-full mb-10 overflow-hidden'>
        <div
          className='h-2 bg-blue-900 rounded-full transition-all duration-500 ease-in-out'
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className='mx-30 w-240 h-100 mb-20'>
        <div className='flex flex-col'>
          <div className='flex'>
            <img
              src="https://th.bing.com/th/id/OIP.wQwNLndJ8_zwJWgbS0gWuwHaGM?w=231&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="health icon"
              className='h-20'
            />
            <h1 className='text-5xl font-bold ml-10 w-200'>Age</h1>
          </div>

          <h1 className='text-2xl w-200 h-10 mx-30'>
            How old are you?
          </h1>
        </div>

        <input
          onChange={changehandler}
          type="Number"
          placeholder='Enter Your Age'
          value={age}
          className='border border-gray-500 w-80 h-10 mx-30 mt-15 bg-gray-200 rounded-full px-10'
        />

        <div className='flex justify-between mt-10'>
          <button
            onClick={() => navigate('/history')}
            className='text-blue-800 text-xl font-bold px-10 py-3 rounded-full border-2 border-blue-500 ml-30 flex items-center gap-2'
          >
            <img
              src="https://www.svgrepo.com/show/181964/right-arrow-arrows.svg"
              alt="arrow"
              className='w-6 rotate-180'
            />
            <h1>Back</h1>
          </button>

          <button
            onClick={handleNext}
            className='mr-10 text-blue-800 text-xl font-bold px-10 py-3 rounded-full border-2 border-blue-500 flex items-center gap-2'
          >
            <h1>Next</h1>
            <img
              src="https://www.svgrepo.com/show/181964/right-arrow-arrows.svg"
              alt="arrow"
              className='w-6'
            />
          </button>
        </div>
      </div>
      <Concern text1={"WHY THIS MATTERS"} text2={"Depending on your age, you may be more susceptible to certain conditions or more likely to contract specific illnesses."}/>
    </div></>
  )
}

export default Age
