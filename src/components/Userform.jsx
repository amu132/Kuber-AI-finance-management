import React, { useState,useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
const UserForm = () => {
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);
  const portfolioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    age: '',
    sex: '',
    income: '',
    incomeAfterTax: '',
    marriageStatus: '',
    numOfKids: '',
    ageOfParents: '',
    riskAppetite: '',
    healthConditions: '',
  });
  
  const generatePDF = () => {
    setIsPdfGenerating(true);
    
    // Create new PDF document
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.setTextColor(107, 70, 193); // Purple color
    doc.text('Investment Portfolio Report', 105, 20, { align: 'center' });
    
    // Add date
    doc.setFontSize(10);
    doc.setTextColor(100);
    const date = new Date().toLocaleString();
    doc.text(`Generated on: ${date}`, 195, 30, { align: 'right' });

    // Add user profile section
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text('User Profile', 20, 45);

    // User profile details
    const userProfileData = [
      ['Age', userData.age],
      ['Risk Appetite', userData.riskAppetite],
      ['Income', userData.income],
      ['Marriage Status', userData.marriageStatus],
      ['Number of Kids', userData.numOfKids]
    ];

    doc.autoTable({
      startY: 50,
      head: [['Parameter', 'Value']],
      body: userProfileData,
      theme: 'striped',
      headStyles: { fillColor: [107, 70, 193] },
      margin: { left: 20 }
    });

    // Portfolio allocation section
    doc.setFontSize(14);
    doc.text('Portfolio Allocation', 20, doc.lastAutoTable.finalY + 20);

    // Convert portfolio data to table format
    const portfolioData = Array.isArray(portfolio) 
      ? portfolio.map(item => [item.category, item.allocation])
      : [];

    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 25,
      head: [['Asset Class', 'Allocation']],
      body: portfolioData,
      theme: 'striped',
      headStyles: { fillColor: [107, 70, 193] },
      margin: { left: 20 }
    });

    // Add disclaimer
    doc.setFontSize(10);
    doc.setTextColor(100);
    const disclaimer = 'This portfolio allocation is based on your provided information and risk profile. Please consult with a financial advisor before making investment decisions.';
    doc.text(disclaimer, 20, doc.lastAutoTable.finalY + 20, {
      maxWidth: 170,
      align: 'justify'
    });

    // Save the PDF
    doc.save('investment-portfolio.pdf');
    setIsPdfGenerating(false);
  };

  // Options for dropdowns
  const options = {
    sex: ['Male', 'Female', 'Other'],
    marriageStatus: ['Single', 'Married', 'Divorced', 'Widowed'],
    riskAppetite: ['Conservative', 'Moderate', 'Aggressive']
  };

  const [portfolio, setPortfolio] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/get-portfolio-allocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setPortfolio(formatPortfolioData(data.portfolio));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const formatPortfolioData = (text) => {
    // Assuming the portfolio data comes in a format like:
    // "Asset Class: X%, Description: ABC"
    const lines = text.split('\n');
    const formattedData = lines.map(line => {
      const [category, allocation] = line.split(':').map(item => item.trim());
      return { category, allocation };
    });
    return formattedData;
  };
  const convertMarkdownToHTML = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  const renderInput = (key) => {
    if (['sex', 'marriageStatus', 'riskAppetite'].includes(key)) {
      return (
        <select
          id={key}
          name={key}
          value={userData[key]}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</option>
          {options[key].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={key === 'income' || key === 'age' || key === 'numOfKids' || key === 'ageOfParents' ? 'number' : 'text'}
        id={key}
        name={key}
        value={userData[key]}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">Investment Portfolio</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(userData).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
              </label>
              {renderInput(key)}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Get Portfolio Allocation
          </button>
        </form>
        {isLoading && (
          <div className="mt-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
            <div className="mt-4 text-purple-600 font-semibold">
              Analyzing your profile...
              <div className="text-sm text-gray-500 mt-2">
                This may take a few moments
              </div>
            </div>
          </div>
        )}
        {portfolio && !isLoading && (
          <div className="mt-6" ref={portfolioRef}>
            <h3 className="text-xl font-bold text-purple-800 mb-4">Your Personalized Portfolio Allocation</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-purple-200 rounded-lg">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-purple-900 border-b">
                      Asset Class
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-purple-900 border-b">
                      Allocation
                    </th>
                  </tr>
                </thead>
                <tbody className='text-black'>
                  {Array.isArray(portfolio) && portfolio.map((item, index) => (
                    <tr 
                      key={index}
                      className={`hover:bg-purple-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-purple-50'
                      }`}
                    >
                      <td className="py-3 px-4 border-b border-purple-100">
                        {item.category}
                      </td>
                      <td className="py-3 px-4 border-b border-purple-100">
                        {item.allocation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">Risk Profile</h4>
                <p className="text-purple-700">{userData.riskAppetite}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-purple-900 mb-2">Total Allocation</h4>
                <p className="text-purple-700">100%</p>
              </div>
            </div>

            {/* Download/Share Buttons */}
            <div className="mt-6 flex gap-4">
              <button onClick={generatePDF} className="flex-1 py-2 px-4 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                Download PDF
              </button>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
// import React, { useState } from 'react';

// const UserForm = () => {
//   const [userData, setUserData] = useState({
//     age: '',
//     sex: '',
//     income: '',
//     incomeAfterTax: '',
//     marriageStatus: '',
//     numOfKids: '',
//     ageOfParents: '',
//     riskAppetite: '',
//     healthConditions: '',
//   });

//   // Options for dropdowns
//   const options = {
//     sex: ['Male', 'Female', 'Other'],
//     marriageStatus: ['Single', 'Married', 'Divorced', 'Widowed'],
//     riskAppetite: ['Conservative', 'Moderate', 'Aggressive']
//   };

//   const [portfolio, setPortfolio] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/get-portfolio-allocation', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     const data = await response.json();
//     setPortfolio(convertMarkdownToHTML(data.portfolio));
//   };

//   const convertMarkdownToHTML = (text) => {
//     return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
//   };

//   const renderInput = (key) => {
//     if (['sex', 'marriageStatus', 'riskAppetite'].includes(key)) {
//       return (
//         <select
//           id={key}
//           name={key}
//           value={userData[key]}
//           onChange={handleChange}
//           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
//           required
//         >
//           <option value="">Select {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</option>
//           {options[key].map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       );
//     }

//     return (
//       <input
//         type={key === 'income' || key === 'age' || key === 'numOfKids' || key === 'ageOfParents' ? 'number' : 'text'}
//         id={key}
//         name={key}
//         value={userData[key]}
//         onChange={handleChange}
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
//         required
//       />
//     );
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6">
//       <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">Investment Portfolio</h2>
//         <form onSubmit={handleSubmit}>
//           {Object.keys(userData).map((key) => (
//             <div key={key} className="mb-4">
//               <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor={key}>
//                 {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
//               </label>
//               {renderInput(key)}
//             </div>
//           ))}
//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             Get Portfolio Allocation
//           </button>
//         </form>
//         {portfolio && (
//           <div
//             className="mt-6 p-4 bg-purple-100 text-purple-900 border border-purple-300 rounded-lg"
//             dangerouslySetInnerHTML={{ __html: portfolio }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserForm;