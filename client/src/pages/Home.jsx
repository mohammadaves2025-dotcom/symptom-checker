import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    question: "What is a symptom checker?",
    answer:
      "A symptom checker is a tool that allows users to enter symptoms, as well as other medical and demographic information, to get a list of possible medical conditions."
  },
  {
    question: "How does the symptom checker work?",
    answer:
      "Our system uses AI and medical knowledge databases to analyze symptoms and generate a list of potential conditions."
  },
  {
    question: "Should I trust the results?",
    answer:
      "This tool is for informational purposes only and is not a substitute for professional medical advice."
  },
  {
    question: "Do I still need to see a doctor?",
    answer:
      "Yes. Always consult a qualified healthcare professional for proper diagnosis and treatment."
  },
  {
    question: "What are Red Flag Conditions?",
    answer:
      "Red Flag conditions are serious symptoms that may require immediate medical attention."
  }
];

const FAQItem = ({ item, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div
        onClick={toggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {item.question}
        </h3>

        <span className="text-blue-600 text-2xl font-light transition">
          {isOpen ? <img src="https://cdn-icons-png.flaticon.com/512/4226/4226820.png" alt="" className="h-7"/> : <img src="https://tse3.mm.bing.net/th/id/OIP.L5GbwVwtigOTKA3a_NW55gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className="h-7"/>}
        </span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 mt-4" : "max-h-0"
          }`}
      >
        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      <div className="flex px-20 pt-20 pb-28">

        {/* LEFT SIDE MENU */}
        <div className="w-1/4">
          <p className="text-gray-500 font-bold mb-8 leading-tight">
            MediFind can help you <br />
            find better care, faster.
          </p>

          <ul className="space-y-4 text-sm font-medium">
            <li className="text-red-500 text-[12px] font-bold">● SYMPTOM CHECKER</li>
            <li className="text-gray-500 text-[12px] font-bold">●  CONDITION SEARCH</li>
            <li className="text-gray-500 text-[12px] font-bold">●  SECOND OPINION</li>
            <li className="text-gray-500 text-[12px] font-bold">●  LATEST ADVANCES</li>
            <li className="text-gray-500 text-[12px] font-bold">●  CLINICAL TRIALS</li>
          </ul>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-3/4 flex items-start">

          {/* ICON */}
          <div className="mr-12">
            <div className="">
              <img src="https://th.bing.com/th/id/OIP.q8Dq0yteJUTv6of0dVPFywHaIn?w=153&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" className="h-40" />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-7xl text-red-600 mb-20">
              Symptom Checker
            </h1>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get to the root of the cause
            </h3>

            <div className="w-110">
              <p className="text-gray-600 text-sm max-w-xl leading-tight mb-20">
                When medical symptoms appear, we help you understand what might
                be the cause. Just share a few details about your symptoms and
                some basic health info, and we’ll show you a list of the most
                likely diagnoses.
              </p>
            </div>

            <button
              onClick={() => navigate("/symptoms")}
              className="bg-red-600 text-white text-sm px-6 py-2 rounded-full shadow-lg hover:bg-red-800 transition font-semibold ml-20"
            >
              GET STARTED →
            </button>
          </div>
        </div>
      </div>

      {/* LEARN MORE */}
      <div className="flex flex-col items-center justify-center text-center pb-16">
        <p className="text-gray-500 tracking-widest text-xs font-semibold">
          LEARN MORE
        </p>
        <p className="text-gray-500 tracking-widest text-xs mb-2 font-semibold">
          ABOUT MEDIFIND
        </p>

        <img src="https://tse1.explicit.bing.net/th/id/OIP.EPc9oX8wEMyqBeqH41Ux5AAAAA?w=320&h=455&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className="h-4 mt-5 text-gray-600" />

      </div>
      <hr className="text-gray-200 mx-30"/>

      {/* ================= INFO SECTION ================= */}
      <div className="py-20 px-10 max-w-5xl mx-auto text-center ">
        <h2 className="text-2xl font-semibold mb-6">
          Using the Symptom Checker
        </h2>
        <p className="text-gray-500 leading-tight text-sm px-32">
          Our symptom checker takes just a few minutes to complete and it is completely anonymous. You will be asked to enter all of your symptoms and some basic health information. If you have results from any medical tests those are helpful too. We also need to know your age, sex and country of residency. In order to get the best results it is important that you carefully consider all of your symptoms and health conditions. Your information will be carefully analyzed in order to provide a comprehensive list of causes for your symptoms.
        </p>
      </div>

<hr className="text-gray-200 mx-30"/>

      {/* ================= FAQ SECTION ================= */}
      <div className="bg-white py-3 px-10">
        <div className="w-full mr-10 px-20 ">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>


      <div  className="bg-white flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl text-gray-800 font-semibold">Still have Questions ?</h1>
        <button className="flex flex-col bg-blue-800 text-white px-8 py-3 rounded-full text-md mt-5">
          <h1>Contact Us</h1>
        </button>
      </div>

    </div>
  );
};

export default Home;

