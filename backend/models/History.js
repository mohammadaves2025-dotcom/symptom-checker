import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  symptoms: [{ type: String }],
  healthHistory: { type: String },
  age: { type: Number },
  sex: { type: String },
  location: { type: String },
  result: { type: String }
});

const History = mongoose.models.History || mongoose.model("History" ,historySchema);

export default History;
