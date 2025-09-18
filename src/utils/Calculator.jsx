import { useState } from "react";

function Calculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [interestRate, setInterestRate] = useState(12);
  const [months, setMonths] = useState(12);
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalDeposited, setTotalDeposited] = useState(null);

  const calculateRD = () => {
    const P = parseFloat(monthlyDeposit);
    const r = parseFloat(interestRate) / 100 / 12; // monthly rate
    const n = parseInt(months);

    // Calculate maturity using RD formula (monthly compounding)
    const maturity =
      P *
      (((Math.pow(1 + r, n) - 1) / (1 - Math.pow(1 + r, -1))) * (1 + r));

    const totalDeposited = P * n;
    const interestEarned = maturity - totalDeposited;

    setMaturityAmount(maturity.toFixed(2));
    setTotalDeposited(totalDeposited.toFixed(2));
    setTotalInterest(interestEarned.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">SBI RD Calculator</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Monthly Deposit (₹)</label>
            <input
              type="number"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(e.target.value)}
              className="w-full border px-3 py-2 rounded mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Interest Rate (% p.a.)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border px-3 py-2 rounded mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Duration (Months)</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full border px-3 py-2 rounded mt-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={calculateRD}
            className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </div>

        {maturityAmount && (
          <div className="mt-6 bg-gray-50 p-4 rounded shadow-inner text-center">
            <p className="text-lg font-semibold text-gray-700">
              Total Deposited Amount: <span className="text-black">₹{totalDeposited}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Total Interest Earned: <span className="text-green-600">₹{totalInterest}</span>
            </p>
            <p className="text-xl font-bold text-blue-700 mt-2">
              Maturity Amount: ₹{maturityAmount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
