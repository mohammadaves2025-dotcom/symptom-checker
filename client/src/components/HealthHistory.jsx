import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Concern from './Concern';
import Heading from './Heading';
import { SymptomContext } from '../context/SymptomContext';

const HealthHistory = () => {
    const currentStep = 2;
    const totalSteps = 8;
    const progress = (currentStep / totalSteps) * 100;

    const navigate = useNavigate();
    const {healthHistory, setHealthHistory} = useContext(SymptomContext);
    const [pain, setPain] = useState('');

    const changehandler = (e) => {
        setPain(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && pain.trim() !== "") {
            setHealthHistory(prev => [...prev, pain.trim()]);
            setPain("");
        }
    };

    const removeSymptom = (indexToRemove) => {
        setHealthHistory(prev =>
            prev.filter((_, index) => index !== indexToRemove)
        );
    };

    const skip = () => {
        setHealthHistory([]);
        navigate('/age');
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
                            src="https://static.vecteezy.com/system/resources/previews/023/367/480/non_2x/ekg-and-ecg-line-icon-vector.jpg"
                            alt="health icon"
                            className='h-20'
                        />
                        <h1 className='text-5xl font-bold ml-10 w-200'>
                            Health History <span className='text-2xl'>(Optional)</span>
                        </h1>
                    </div>

                    <h1 className='text-2xl w-200 h-10 mx-30 mt-5'>
                        Have you been diagnosed with any other health conditions?
                        Do you have any recent abnormal test results?
                    </h1>
                </div>

                <input
                    onChange={changehandler}
                    onKeyDown={handleKeyDown}
                    type="text"
                    placeholder='Example : High Cholesterol or Diabetes'
                    value={pain}
                    className='border border-gray-500 w-190 h-10 mx-30 mt-15 bg-gray-200 rounded-full px-10'
                />

                <div className='flex gap-3 w-190 mx-30 mt-4 flex-wrap'>
                    {healthHistory.map((item, index) => (
                        <div
                            key={index}
                            className='rounded-full bg-blue-100 text-blue-800 font-semibold border border-blue-500 px-4 py-2 flex items-center gap-3'
                        >
                            <span>{item}</span>

                            <button
                                onClick={() => removeSymptom(index)}
                                className="hover:scale-110 transition"
                            >
                                <img
                                    className='h-4'
                                    src="https://static.vecteezy.com/system/resources/previews/017/785/293/original/creative-wrong-icon-3d-render-png.png"
                                    alt="remove"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                <div className='flex justify-between mt-10'>
                    <button
                        onClick={() => navigate('/symptoms')}
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
                        onClick={skip}
                        className='mr-10 text-blue-800 text-xl font-bold px-10 py-3 rounded-full border-2 border-blue-500 flex items-center gap-2'
                    >
                        <h1>Skip</h1>
                        <img
                            src="https://www.svgrepo.com/show/181964/right-arrow-arrows.svg"
                            alt="arrow"
                            className='w-6'
                        />
                    </button>
                </div>
            </div>
            <Concern text1={"WHY THIS MATTERS"} text2={"The more medical information you tell us, the more accurate your results will be."}/>
        </div>
        </>
    )
}

export default HealthHistory;


