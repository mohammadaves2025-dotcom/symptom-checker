import { createContext, useState, useEffect } from "react";
import axios from 'axios'
import toast from 'react-hot-toast'

export const SymptomContext = createContext();

const SymptomProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const savedData = JSON.parse(localStorage.getItem("symptomData"));

    const [symptoms, setSymptoms] = useState(savedData?.symptoms || []);
    const [age, setAge] = useState(savedData?.age || "");
    const [sex, setSex] = useState(savedData?.sex || "");
    const [location, setLocation] = useState(savedData?.location || "");
    const [healthHistory, setHealthHistory] = useState(savedData?.healthHistory || []);
    const [result, setResult] = useState(null);

    const fetchResult = async () => {
        try {

            if (!token) {
                toast.error("You must be logged in");
                return;
            }

            if (!symptoms.length || !age || !sex || !location) {
                toast.error("Missing required information");
                return;
            }

            const response = await axios.post(backendUrl + '/api/diagnosis/diagnose', { symptoms, age, sex, location, healthHistory }, { headers: { Authorization: `Bearer ${token}` } })
            console.log(response);

            if (response.data?.success && response.data?.data) {

                setResult(response.data.data);
                console.log(response.data.data);

            } else {
                console.log(response.data);
                toast.error(response.data)
            }

        } catch (error) {
            console.log(error.response?.data?.message || "Server error");
            toast.error(error.response?.data?.message || "Server error")
        }
    };
    useEffect(() => {
        localStorage.setItem("symptomData", JSON.stringify({
            symptoms,
            age,
            sex,
            location,
            healthHistory,

        }));
    }, [symptoms, age, sex, location, healthHistory]);

    useEffect(() => {
        setResult(null);
    }, [symptoms, age, sex, location, healthHistory]);

    const value = {
        symptoms,
        setSymptoms,
        age,
        setAge,
        sex,
        setSex,
        location,
        setLocation,
        healthHistory,
        setHealthHistory,
        result, token,setToken,
        fetchResult,
        backendUrl
    };

    return (
        <SymptomContext.Provider value={value}>
            {children}
        </SymptomContext.Provider>
    );
};

export default SymptomProvider;