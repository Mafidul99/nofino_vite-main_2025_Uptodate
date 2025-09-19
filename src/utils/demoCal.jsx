import React, { useState } from "react";

function DemoCal() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState([]);

  const calculateCompoundFD = () => {
    let data = [];
    let currentAmount = principal;

    for (let year = 1; year <= years; year++) {
      const previous = currentAmount;
      currentAmount = previous * (1 + rate / 100);
      const interest = currentAmount - previous;

      data.push({
        year,
        interest: interest.toFixed(2),
        total: currentAmount.toFixed(2),
      });
    }

    setResult(data);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-blue-700">
        SBI FD Investment Plan (Compound Interest)
      </h1>

      {/* Input Form */}
      <div className="w-full max-w-lg p-6 mb-8 bg-white rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Principal Amount (₹):</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Principal"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Interest Rate (% per year):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Interest Rate"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Tenure (Years):</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter number of years"
          />
        </div>

        <button
          onClick={calculateCompoundFD}
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Calculate FD
        </button>
      </div>

      {/* Result Table */}
      {result.length > 0 && (
        <div className="w-full max-w-3xl">
          <table className="w-full overflow-hidden bg-white rounded shadow">
            <thead className="text-white bg-blue-600">
              <tr>
                <th className="px-4 py-3 text-left">Year</th>
                <th className="px-4 py-3 text-left">Interest Earned (₹)</th>
                <th className="px-4 py-3 text-left">Total Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {result.map((row) => (
                <tr key={row.year} className="border-t">
                  <td className="px-4 py-2">{row.year}</td>
                  <td className="px-4 py-2">{row.interest}</td>
                  <td className="px-4 py-2">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary */}
          <div className="p-4 mt-4 text-gray-800 bg-white rounded shadow">
            <p><strong>Total Interest:</strong> ₹{result.reduce((acc, row) => acc + parseFloat(row.interest), 0).toFixed(2)}</p>
            <p><strong>Maturity Amount:</strong> ₹{result[result.length - 1].total}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoCal;
