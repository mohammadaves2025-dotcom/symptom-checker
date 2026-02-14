import React from 'react'
import { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Concern from './Concern';
import Heading from './Heading';
import { SymptomContext } from '../context/SymptomContext';

const Symptom = () => {

    const navigate = useNavigate();
    const { symptoms, setSymptoms } = useContext(SymptomContext);
    const [pain, setPain] = useState('');

    const changehandler = (e) => {
        setPain(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && pain.trim() !== "") {
            setSymptoms([...symptoms, pain.trim()]);
            setPain("");
        }
    };

    const removeSymptom = (indexToRemove) => {
        setSymptoms(
            symptoms.filter((ele, index) => index !== indexToRemove)
        );
    };

    const handleNext = () => {
        if (symptoms.length === 0) 
            return toast.error("Please Enter Your Symptoms");

        navigate('/history');
    };

    return (
        <>
            <Heading />
            <div className='mx-20'>
                <div className='bg-gray-100 w-full h-2 mb-10'></div>

                <div className='mx-40 w-240 h-100 mb-20'>
                    <div className='flex'>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/7788/7788005.png" 
                            alt="" 
                            className='h-20' 
                        />
                        <h1 className='text-5xl font-bold ml-10 w-200'>
                            What symptoms are you experiencing today?
                        </h1>
                    </div>

                    <input
                        onChange={changehandler}
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder='Example : Stomach Ache'
                        value={pain}
                        className='border border-gray-500 w-190 h-10 mx-20 mt-15 bg-gray-200 rounded-full px-10'
                    />

                    <div className='flex gap-3 flex-wrap w-190 mx-20 mt-4'>
                        {symptoms.map((item, index) => (
                            <div
                                key={index}
                                className='rounded-full bg-blue-100 text-blue-800 font-semibold border border-blue-500 px-4 py-2 flex gap-3 items-center'
                            >
                                <span>{item}</span>
                                <button onClick={() => removeSymptom(index)}>
                                    <img
                                        className='h-4'
                                        src="https://static.vecteezy.com/system/resources/previews/017/785/293/original/creative-wrong-icon-3d-render-png.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='flex'>
                        <button
                            onClick={handleNext}
                            className='mt-20 text-blue-800 text-xl font-bold px-10 py-3 rounded-full border-2 border-blue-500 ml-auto flex items-center gap-2'
                        >
                            <span>Next</span>
                            <img
                                src="https://www.svgrepo.com/show/181964/right-arrow-arrows.svg"
                                alt=""
                                className='w-6'
                            />
                        </button>
                    </div>
                </div>

                <Concern
                    text1={"WHY THIS MATTERS"}
                    text2={"The more symptoms you tell us, the more accurate your results will be."}
                />
            </div>
        </>
    );
};


export default Symptom
