import Diagnosis from "../models/Diagnosis.js";
import {generateDiagnosis} from '../config/aiServices.js'


export const checkSymptoms = async (req, res) => {
    try {

        const { symptoms, age, sex, location ,healthHistory } = req.body;
        const userId = req.userId;  // from middleware

        //check if input is valid
        // ✅ Basic validation
        if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Symptoms are required"
            });
        }

        if (!age || !sex) {
            return res.status(400).json({
                success: false,
                message: "Age and Sex are required"
            });
        }

        //MAIN AI SERVICES
        const aiResult = await generateDiagnosis({ symptoms, age, sex, location ,healthHistory });
        console.log(aiResult);

        //save this to database

        const newDiagnosis = await Diagnosis.create({
            userId,
            symptoms,
            age,
            sex,
            location,
            aiResponse: aiResult,
            triageLevel: aiResult.triageLevel,
            emergency: aiResult.emergency,
        });

        // ✅ Return response
        res.status(200).json({ success: true, data: aiResult });


    } catch (error) {

        console.log("SYMPTOM CHECK ERROR:", error.message);

        res.status(500).json({success: false, message: "Failed to process diagnosis"});
    }


};