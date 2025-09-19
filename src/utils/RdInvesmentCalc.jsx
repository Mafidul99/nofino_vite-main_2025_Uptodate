import React, { useState } from "react";

function RdInvesmentCalc() {
  const [monthlyDeposit, setMonthlyDeposit] = useState("5000");
  const [interestRate, setInterestRate] = useState("12");
  const [tenureYears, setTenureYears] = useState("1");

  const [result, setResult] = useState(null);

  const calculateRD = (P, R, years) => {
    const N = years * 12; // Months
    const r = R / (12 * 100); // Monthly interest rate

    let maturityAmount = 0;
    for (let i = 0; i < N; i++) {
      maturityAmount += P * Math.pow(1 + r, N - i);
    }

    const depositedAmount = P * N;
    const interestEarned = maturityAmount - depositedAmount;

    return {
      depositedAmount: depositedAmount.toFixed(2),
      interestEarned: interestEarned.toFixed(2),
      maturityAmount: maturityAmount.toFixed(2),
      months: N,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!monthlyDeposit || !interestRate || !tenureYears) return;

    const result = calculateRD(
      Number(monthlyDeposit),
      Number(interestRate),
      Number(tenureYears)
    );

    setResult({
      monthlyDeposit,
      interestRate,
      tenureYears,
      ...result,
    });
  };
 

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <div className="bg-[#fff] dark:bg-gray-700 rounded-md shadow-md w-full max-w-[1200px] px-3 py-4">
        <h1 className="text-[30px] font-bold text-center dark:text-white uppercase underline text-gray-700 py-3">
          RD Investment Plan</h1>
        <div className="grid grid-cols-1 gap-4 px-3 py-3">
          <div className="w-full font-roboto">
            {/* Input Form */}
            <div className="w-full px-4 items-center mx-auto my-auto ">
              <form onSubmit={handleSubmit} >
                <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 items-end py-3 justify-end ">
                  <div className="flex flex-col p-2">
                    <label className="block py-1.5 font-semibold dark:text-white">Monthly Deposit (₹)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded"
                      value={monthlyDeposit}
                      onChange={(e) => setMonthlyDeposit(e.target.value)}
                      required
                      min="1"
                    />

                  </div>
                  <div className="flex flex-col p-2">
                    <label className="block py-1.5 font-semibold dark:text-white">Interest Rate (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-3 py-2 border rounded"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      required
                      min="1"
                    />
                  </div>
                  <div className="flex flex-col p-2">
                    <label className="block py-1.5 font-semibold dark:text-white">Tenure (Years)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(e.target.value)}
                      required
                      min="1"
                    />
                  </div>
                  <div className="flex flex-col p-2">
                    <button
                      type="submit"
                      className="block px-4 py-2 text-lg text-white transition bg-pink-600 rounded-lg shadow-md hover:bg-pink-400"
                    >
                      Calculate
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>

          <div className="items-center justify-center w-full h-full px-4 py-6 bg-[#fff] rounded shadow-md  dark:bg-gray-700">
            {result ? (
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-[16px]  font-roboto dark:text-white">
                  <thead className="bg-blue-100 dark:bg-green-600">
                    <tr>
                      <th className="px-4 py-3 border text-center">Description</th>
                      <th className="px-4 py-3 border text-center">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-500">
                      <td className="px-4 py-2 border">Monthly Deposit</td>
                      <td className="px-4 py-2 border">₹{Number(result.monthlyDeposit).toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-500">
                      <td className="px-4 py-2 border">Interest Rate (Annual)</td>
                      <td className="px-4 py-2 border">{result.interestRate}%</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-500">
                      <td className="px-4 py-2 border">Tenure</td>
                      <td className="px-4 py-2 border">
                        {result.tenureYears} year(s) ({result.months} months)
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-500 font-roboto font-bold">
                      <td className="px-4 py-2 border">Deposited Amount</td>
                      <td className="px-4 py-2 border text-blue-600">₹{Number(result.depositedAmount).toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-500 font-roboto font-bold">
                      <td className="px-4 py-2 border">Interest Earned</td>
                      <td className="px-4 py-2 border text-red-600">₹{Number(result.interestEarned).toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-500 font-roboto font-bold">
                      <td className="px-4 py-2 border">Maturity Amount</td>
                      <td className="px-4 py-2 border text-green-600">₹{Number(result.maturityAmount).toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="flex items-center justify-center h-full p-4 text-center text-gray-600 capitalize border-2 border-gray-300 border-dashed rounded-lg dark:text-white">
                Enter values and calculate Data Table Showdown.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>


  );
}

export default RdInvesmentCalc;
