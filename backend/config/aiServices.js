import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const generateDiagnosis = async ({ symptoms, age, sex, location ,healthHistory }) => {
    try {
        const prompt = `
                        You are a professional medical triage assistant.

                        Patient Information:
                        Age: ${age}
                        Sex: ${sex}
                        Location: ${location}
                        Health history : ${healthHistory}
                        Symptoms: ${symptoms.join(", ")}

                        Respond ONLY in valid JSON format:

                        {
                        "possibleConditions": [
                            {
                            "name": "Condition Name",
                            "likelihood": 0,
                            "redFlag": false,
                            "specialty": "Relevant Specialist"
                            }
                        ],
                        "triageLevel": "Low | Moderate | High",
                        "emergency": false,
                        "advice": "Short medical advice (2-3 sentences)"
                        }

                        No markdown.
                        No explanation.
                        Only raw JSON.
                        `;

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt
        });
         console.log(response.text);

        const text = response.text;

        return JSON.parse(text);

    } catch (error) {
        console.log("AI SERVICE ERROR:", error.message);
        throw new Error("AI Diagnosis Failed");
    }
};

