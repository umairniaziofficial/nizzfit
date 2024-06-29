import React, { useState } from "react";

const BmiCalculator = () => {
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState("cm");

  const handleHeightChange = (e) => {
    const { name, value } = e.target;
    if (name === "feet") {
      setHeightFeet(value);
    } else if (name === "inches") {
      setHeightInches(value);
    } else if (name === "cm") {
      setHeightCm(value);
    }
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateBMI = () => {
    let heightMeters;
    if (selectedUnit === "cm") {
      heightMeters = heightCm / 100;
    } else if (selectedUnit === "ft") {
      heightMeters = heightFeet * 0.3048 + heightInches * 0.0254;
    }

    if (heightMeters && weight) {
      const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(1);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  const getBMIStatus = () => {
    if (bmi === null) {
      return "";
    } else if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    }
  };

  return (
    <div className="bg-black text-white py-12 px-4 md:py-16 md:px-6" id="BMI">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          BMI Calculator
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="height" className="block text-lg mb-2">
              Height
            </label>
            {selectedUnit === "cm" && (
              <input
                type="number"
                id="heightCm"
                name="cm"
                value={heightCm}
                onChange={handleHeightChange}
                className="bg-transparent border-[1px] border-gray-300 rounded-lg outline-none text-white w-full py-2 px-3"
                placeholder="Enter height in cm"
              />
            )}
            {selectedUnit === "ft" && (
              <div className="flex">
                <input
                  type="number"
                  id="heightFeet"
                  name="feet"
                  value={heightFeet}
                  onChange={handleHeightChange}
                  className="bg-transparent border-[1px] border-gray-300 rounded-l-lg outline-none text-white w-1/2 mr-2 py-2 px-3"
                  placeholder="Feet"
                />
                <input
                  type="number"
                  id="heightInches"
                  name="inches"
                  value={heightInches}
                  onChange={handleHeightChange}
                  className="bg-transparent border-[1px] border-gray-300 rounded-r-lg outline-none text-white w-1/2 py-2 px-3"
                  placeholder="Inches"
                />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="weight" className="block text-lg mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={handleWeightChange}
              className="bg-transparent border-[1px] border-gray-300 rounded-lg outline-none text-white w-full py-2 px-3"
              placeholder="Enter your weight"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <div className="mb-4">
            <label htmlFor="unit" className="block text-lg mb-2">
              Height Unit
            </label>
            <select
              id="unit"
              name="unit"
              value={selectedUnit}
              onChange={handleUnitChange}
              className="bg-transparent border-[1px] border-gray-300 rounded-lg outline-none text-white w-full py-2 px-3"
            >
              <option value="cm" className="bg-black text-white">
                Centimeters
              </option>
              <option value="ft" className="bg-black text-white">
                Feet/Inches
              </option>
            </select>
          </div>
          <button
            onClick={calculateBMI}
            className="bg-cOrange py-3 mt-2 px-6 rounded-lg text-lg text-white hover:bg-opacity-80 transition duration-300"
          >
            Calculate BMI
          </button>
        </div>
        {bmi !== null && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold">Your BMI: {bmi}</p>
            <p className="text-gray-400">Status: {getBMIStatus()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalculator;
