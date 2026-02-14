import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import Concern from './Concern';
import Heading from './Heading';
import { SymptomContext } from '../context/SymptomContext';

const Sex = () => {

  const currentStep = 5;
  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const navigate = useNavigate();
  const {sex ,setSex} = useContext(SymptomContext);

  const handleNext = () =>{
    if(sex === '') return toast.error("Please Select Your Sex");
    navigate('/location');
  }


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
              src="https://static.vecteezy.com/system/resources/previews/017/178/231/original/sex-symbol-of-men-and-women-on-transparent-background-free-png.png"
              alt="health icon"
              className='h-20'
            />
            <h1 className='text-5xl font-bold ml-10 w-200'>Sex</h1>
          </div>

          <h1 className='text-2xl w-200 h-10 mx-30'>
            What sex were you assigned at birth?
          </h1>
        </div>

        <div className='flex ml-30 mt-10'>
          <button onClick={() => setSex("Male")} className={`${sex === 'Male' ?`bg-blue-100` :`bg-white`} mr-10 text-blue-800 text-md font-semibold px-12 py-2 rounded-full border-2 border-blue-500 flex items-center gap-2`} >Male</button>
          <button onClick={() => setSex("Female")}  className={`${sex === 'Female' ?`bg-blue-100` :`bg-white`} mr-10 text-blue-800 text-md font-semibold px-12 py-2 rounded-full border-2 border-blue-500 flex items-center gap-2`}>Female</button>
          <button onClick={() => setSex("Others")} className={`${sex === 'Others' ?`bg-blue-100` :`bg-white`} mr-10 text-blue-800 text-md font-semibold px-12 py-2 rounded-full border-2 border-blue-500 flex items-center gap-2`} >Prefer not say</button>
        </div>

        <div className='flex justify-between mt-20'>
          <button
            onClick={() => navigate('/history')}
            className='text-blue-800 text-xl font-bold px-10 py-3 rounded-full border-2 border-blue-500 ml-30 flex items-center gap-2'
          >
            <img
              src="https://www.svgrepo.com/show/181964/right-arrow-arrows.svg"
              alt="arrow"
              className='w-6 rotate-180'
              required
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
      <Concern text1={"WHY SEX MATTERS"} text2={"Since certain symptoms affect only people who are genetically male or female, we need to know the sex you were assigned at birth to help guide you."}/>
    </div>
    </>
  )
}

export default Sex
