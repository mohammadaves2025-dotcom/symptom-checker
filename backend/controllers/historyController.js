import History from "../models/History.js";

//API TO ADD USER HISTORY
export const addHistory = async (req, res) => {
  try {
    const userId = req.user._id; // from auth middleware
    const { symptoms, healthHistory, age, sex, location, result } = req.body;

    const newHistory = await History.create({
      userId,
      symptoms,
      healthHistory,
      age,
      sex,
      location,
      result
    });


    res.status(201).json({ success: true, data: newHistory });


  } catch (error) {

    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

//API TO FETCH USER HISTORY

export const getUserHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const history = await History.find({ userId }).sort({ date: -1 });
    res.status(200).json({ success: true, data: history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

