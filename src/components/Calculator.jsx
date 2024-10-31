import React, { useState } from 'react';
import gsap from 'gsap';

const Calculator = () => {
  const [formData, setFormData] = useState({
    age: '',
    Bsalary: '',
    DA: '',
    HRA: '',
    Lta: '',
    OLL: '',
    A80C: '',
    A80CCD: '',
    HIP: '',
    H1checkup: '',
    A80DD: '',
    nm: '',
    mr: '',
    S80E: '',
    S24: '',
    S80G: '',
    S80GGC: '',
    S80CCH: '',
    S80EEB: '',
    LTA: '',
    BOOKS: '',
    RELALL: '',
    CHAL: '',
  });

  const [result, setResult] = useState({
    totalIncome: 0,
    newRegimeTax: 0,
    oldRegimeTax: 0,
    recommendation: '',
    deductions: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateTax = () => {
    const { Bsalary, DA, HRA, Lta, OLL, A80C, A80CCD } = formData;
    
    const Income = parseInt(Bsalary) + parseInt(DA) + parseInt(HRA) + parseInt(Lta) + parseInt(OLL);
    const fntax = Income * 0.1;
    const fotax = Income * 0.15;

    const recommendation = fntax < fotax ? "New Regime recommended" : "Old Regime recommended";

    // Animation for results
    gsap.from(".results-container", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out"
    });

    setResult({
      totalIncome: Income,
      newRegimeTax: fntax.toFixed(2),
      oldRegimeTax: fotax.toFixed(2),
      recommendation: recommendation,
      deductions: [
        `80C Deduction: ${(150000 - A80C) > 0 ? (150000 - A80C) : 0}`,
        `NPS Deduction: ${(50000 - A80CCD) > 0 ? (50000 - A80CCD) : 0}`,
      ]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#03052F] to-[#090A3A] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Indian Tax Calculator
        </h1>
        <p className="mb-8 text-gray-300 text-lg">
          Fill in your details below to calculate the best tax option for you.
        </p>

        {/* Input Form */}
        <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
          <div className="p-8 bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(formData).map((field) => (
              <div key={field} className="flex flex-col space-y-2">
                <label className="text-gray-300 font-medium">
                  {field.toUpperCase()}
                </label>
                <input
                  type="number"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="p-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter amount"
                />
              </div>
            ))}

            <div className="col-span-full">
              <button
                onClick={calculateTax}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Calculate Taxes
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="results-container mt-10 p-8 bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Results
              </h2>
              <div className="space-y-3">
                <p className="text-lg">Total Yearly Income: ₹{result.totalIncome.toLocaleString()}</p>
                <p className="text-lg">New Regime Tax: ₹{parseFloat(result.newRegimeTax).toLocaleString()}</p>
                <p className="text-lg">Old Regime Tax: ₹{parseFloat(result.oldRegimeTax).toLocaleString()}</p>
                <p className="text-xl font-semibold text-purple-400">{result.recommendation}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">Deductions</h3>
              <div className="space-y-3">
                {result.deductions.map((deduction, index) => (
                  <p key={index} className="text-gray-300 text-lg">
                    {deduction}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;