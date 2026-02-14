import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SymptomContext } from "../context/SymptomContext";
import toast from "react-hot-toast";

const Result = () => {
  const { result, fetchResult, setSymptoms, setAge, setSex, setLocation, setHealthHistory } = useContext(SymptomContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [sortBy, setSortBy] = useState("likelihood");
  const [view, setView] = useState("");

  const dropdownRef = useRef(null);

  const handleStartOver = () => {

    localStorage.removeItem("symptomData");
    setSymptoms([]);
    setAge(null);
    setSex(null);
    setLocation('');
    setHealthHistory([]);
    setOpen(false);
    navigate("/");

  };

  // If result not present (page refresh case), fetch again
  useEffect(() => {
    if (!result) {
      fetchResult();
    }
  }, [result]);

  // Close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-lg w-full">

          <div className="mx-auto w-16 h-16 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin"></div>

          <h2 className="mt-6 text-2xl font-bold text-blue-800">
            Running AI Diagnosis
          </h2>

          <p className="mt-3 text-gray-600">
            Please wait while we carefully analyze your symptoms
            and medical history. this may take 10 to 15 seconds
          </p>

          <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-700 animate-pulse w-3/4"></div>
          </div>

        </div>
      </div>
    );
  }


  // Sort + Filter
  let conditions = [...result.possibleConditions];

  if (sortBy === "likelihood") {
    conditions.sort((a, b) => b.likelihood - a.likelihood);
  }

  if (view === "red") {
    conditions = conditions.filter((c) => c.redFlag);
  }

  if (sortBy === "specialty") {
    conditions.sort((a, b) =>
      a.specialty.localeCompare(b.specialty)
    );
  }

  // Specialty count
  const specialtyCount = {};
  result.possibleConditions.forEach((c) => {
    specialtyCount[c.specialty] =
      (specialtyCount[c.specialty] || 0) + 1;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-20 py-8">

      {/* HEADER */}
      <div className="bg-blue-50 rounded-2xl p-6 mb-10 shadow-sm">
        <div className="flex justify-between items-center">

          {/* LEFT SIDE */}
          <div className="flex gap-4 items-center flex-col">
            <div>
              <h1 className="text-3xl font-bold text-blue-800 ">
                Symptom Checker
              </h1>
            </div>

            <div className="flex items-center gap-5 pl-10 mt-3">
              {/* Back */}
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 border border-blue-400 text-blue-700 rounded-full hover:bg-blue-100 transition"
              >
                ← Back
              </button>

              {/* Start Over */}
              <button
                onClick={handleStartOver}
                className="px-4 py-2 border border-blue-400 text-blue-700 rounded-full hover:bg-blue-100 transition"
              >
                ⟳ Start Over
              </button>

              {/* EDIT DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="px-4 py-2 border border-blue-400 text-blue-700 rounded-full hover:bg-blue-100 transition"
                >
                  ✎ Edit Input ▼
                </button>

                {open && (
                  <div className="absolute top-12 left-0 bg-white shadow-lg rounded-xl w-48 py-2 z-50">
                    <button
                      onClick={() => navigate("/symptoms")}
                      className="block w-full text-blue-600 text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Symptoms
                    </button>

                    <button
                      onClick={() => navigate("/history")}
                      className="block text-blue-600 w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Health History
                    </button>
                    <button
                      onClick={() => navigate("/age")}
                      className="block text-blue-600 w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Age
                    </button>
                    <button
                      onClick={() => navigate("/sex")}
                      className="block text-blue-600 w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sex
                    </button>
                    <button
                      onClick={() => navigate("/location")}
                      className="block text-blue-600 w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      location
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex gap-4">

            {/* Save */}
            <button
              onClick={() => {
                localStorage.setItem("savedDiagnosis", JSON.stringify(result));
                alert("Diagnosis Saved!");
                toast.success("Diagnosis Saved");
              }}
              className="px-6 py-2 border border-blue-400 text-blue-700 rounded-full hover:bg-blue-100 transition"
            >
              💾 Save
            </button>

            {/* Share */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
                 toast.success("Link copied to clipboard!")
              }}
              className="px-6 py-2 border border-blue-400 text-blue-700 rounded-full hover:bg-blue-100 transition"
            >
              📤 Share
            </button>

          </div>

        </div>
      </div>


      <div className="grid grid-cols-4 gap-8">
        {/* LEFT PANEL */}
        <div className="col-span-2 bg-white rounded-2xl shadow-md px-8 py-6">
          <h2 className="text-xl font-bold mb-4">
            POSSIBLE CAUSES
          </h2>

          {/* TRIAGE */}
          <div
            className={`p-4 rounded-xl mb-6 ${result.emergency
              ? "bg-red-100 text-red-700"
              : result.triageLevel === "High"
                ? "bg-orange-100 text-orange-700"
                : "bg-green-100 text-green-700"
              }`}
          >
            <p className="font-bold">
              Triage Level: {result.triageLevel}
            </p>
            {result.emergency && (
              <p className="mt-2 font-semibold">
                ⚠ Immediate medical attention recommended.
              </p>
            )}
          </div>

          {/* SORT */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSortBy("likelihood")}
              className={`px-4 py-1 rounded-full border transition ${sortBy === "likelihood"
                ? "bg-blue-100 text-blue-800 border-blue-200"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
            >
              LIKELIHOOD
            </button>

            <button
              onClick={() => setView("all")}
              className={`px-4 py-1 rounded-full border transition ${view === "all"
                ? "bg-blue-100 text-blue-800 border-blue-200"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
            >
              ALL
            </button>

            <button
              onClick={() => setView("red")}
              className={`px-4 py-1 flex gap-2 items-center rounded-full border transition ${view === "red"
                ? "bg-blue-100 text-blue-800 border-blue-200"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
            >
              <span>RED FLAG</span>
              <div className="h-2 w-2 bg-red-600 rounded-full"></div>
            </button>

            <button
              onClick={() => setSortBy("specialty")}
              className={`px-4 py-1 rounded-full border transition ${sortBy === "specialty"
                ? "bg-blue-100 text-blue-800 border-blue-200"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}

            >
              SPECIALTY
            </button>
          </div>


          {/* CONDITIONS */}
          <div className="space-y-4">
            {conditions.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold text-blue-700">
                    {item.name}
                    {item.redFlag && (
                      <span className="text-red-500 ml-2">●</span>
                    )}
                  </p>

                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {item.likelihood}%
                  </span>
                </div>

                <p className="text-sm text-gray-600">
                  Specialty: {item.specialty}
                </p>
              </div>
            ))}
          </div>

          {/* AI Advice */}
          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <h3 className="font-bold text-blue-800 mb-2">
              Medifind Advice
            </h3>
            <p>{result.advice}</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-2 bg-white rounded-2xl shadow-md p-8 space-y-6">
          <h2 className="font-bold text-gray-700">
            FIND THE RIGHT DOCTOR
          </h2>

          {
            Object.entries(specialtyCount).map(([spec, count]) => (
              <div key={spec}>
                <p className="mb-3">
                  <span className="font-bold">{spec}</span> specialists
                  often diagnose {count} of your likely results.
                </p>

                <button className="w-full bg-blue-800 text-white py-3 rounded-full hover:bg-blue-900 transition">
                  Find a Top {spec}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Result;




