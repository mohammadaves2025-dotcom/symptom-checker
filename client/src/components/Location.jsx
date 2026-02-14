import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Concern from './Concern';
import Heading from './Heading';
import { SymptomContext } from '../context/SymptomContext';

const Location = () => {
  const currentStep = 6;
  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const navigate = useNavigate();
  const {location, setLocation} = useContext(SymptomContext);

  const changehandler = (e) => {
    setLocation(e.target.value);
  };

  const handleNext = () => {
    if (!location.trim()) return toast.error("Enter Location");
    navigate('/result');
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
              src="https://tse1.mm.bing.net/th/id/OIP.HaOxadrSlmAk0pnUJ-rHAwHaKI?pid=ImgDet&w=184&h=251&c=7&dpr=1.3&o=7&rm=3"
              alt="globe icon"
              className='h-25'
            />
            <h1 className='text-5xl font-bold ml-10 w-200'>Location</h1>
          </div>

          <h1 className='text-2xl w-200 h-10 mx-30'>
           Where do you live?
          </h1>
        </div>

        <input
          onChange={changehandler}
          type="text"
          placeholder='Location'
          value={location}
          className='border border-gray-500 w-200 h-10 mx-30 mt-15 bg-gray-200 rounded-full px-10'
        />

        <div className='flex justify-between mt-10'>
          <button
            onClick={() => navigate('/sex')}
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
      <Concern text1={"WHY LOCATION MATTERS"} text2={"Some conditions can be more common depending on where you live. If you recently traveled abroad and became ill soon afterwards, you should enter that country instead of your home country."}/>
    
    </div>
    </>
  )
}

export default Location
