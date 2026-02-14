import mongoose from "mongoose";

const DiagnosisSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    symptoms: { type: [String], required: true },
    age: {
        type: Number,
        required: true
    },

    sex: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    location: {
        type: String,
        required: true,
        default: "Unknown"
    },
    aiResponse: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    triageLevel: {
        type: String,
        enum: ["Low", "Moderate", "High"],
        required: true
    },

    emergency: {
        type: Boolean,
        required: true
    }

}, { timestamps: true });

DiagnosisSchema.index({ userId: 1 });



const Diagnosis = mongoose.models.Diagnosis || mongoose.model("Diagnosis", DiagnosisSchema);

export default Diagnosis;