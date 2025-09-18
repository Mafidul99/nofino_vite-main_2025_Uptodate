import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { setPrincipal, setRate, setTime, calculateEMI } from "../redux/emiSlice";

export default function EMICalculator() {
  const dispatch = useDispatch();
  // access redux state
  const { principal, rate, time, emi, totalInterest, totalPayment } =
    useSelector((state) => state.emi);

  // Keep a local string so users can type with leading zeros without flicker
  const [principalInput, setPrincipalInput] = useState(String(principal ?? 0));

  // Sync local input string when principal changes from other sources (e.g., range)
  useEffect(() => {
    setPrincipalInput(String(principal ?? 0));
  }, [principal]);

  const chartData = [
    { name: "Principal", value: Number(principal) },
    { name: "Interest", value: Number(totalInterest) },
  ];

  const COLORS = ["#07bdbd", "#15a801"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-roboto my-4">
      <div className="bg-[#fff] dark:bg-gray-700 rounded-md shadow-md w-full max-w-[1200px] px-4 py-4 ">
        <h1 className="text-[30px] font-bold text-center dark:text-white uppercase underline text-gray-700 pb-2">FD EMI Calculator</h1>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-2 lg:px-3 px-3 py-3">
          {/* Left: Inputs */}
          <div className="md:col-span-3">
            <div className="mb-4">
              <label className="block font-medium dark:text-white">Loan Amount (₹)</label>
              <input
                type="text"
                inputMode="numeric"
                value={principalInput}
                onChange={(e) => {
                  const raw = e.target.value;
                  // Allow empty string for typing convenience
                  if (raw === "") {
                    setPrincipalInput("");
                    dispatch(setPrincipal(0));
                    return;
                  }
                  // Keep only digits
                  const digits = raw.replace(/\D/g, "");
                  setPrincipalInput(digits);
                  const numeric = Number(digits || "0");
                  const clamped = Math.min(5000000, Math.max(0, numeric));
                  dispatch(setPrincipal(clamped));
                }}
                onBlur={() => {
                  // Normalize on blur: strip leading zeros but keep 0
                  const normalized = (principalInput || "0").replace(/^0+/, "");
                  setPrincipalInput(normalized === "" ? "0" : normalized);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    // Normalize before calculate
                    const normalized = (principalInput || "0").replace(/^0+/, "");
                    setPrincipalInput(normalized === "" ? "0" : normalized);
                    dispatch(calculateEMI());
                  }
                }}
                className="w-full p-2 border rounded-md dark:bg-gray-500 dark:text-white"
                min="0"
                max="5000000"
              />
              {/* Range Slider Below Input */}
              <input
                type="range"
                min="0"
                max={Math.max(5000000, Number((principalInput || "0").replace(/^0+/, "") || "0"))}
                step="10000"
                value={principal}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  const clamped = Math.min(
                    Math.max(5000000, Number((principalInput || "0").replace(/^0+/, "") || "0")),
                    Math.max(0, next || 0)
                  );
                  dispatch(setPrincipal(clamped));
                }}
                className="w-full mt-2 dark:bg-gray-500 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium dark:text-white">Interest Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  const clamped = Math.min(30, Math.max(1, next || 0));
                  dispatch(setRate(clamped));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    dispatch(calculateEMI());
                  }
                }}
                className="w-full p-2 border rounded-md dark:bg-gray-500 dark:text-white"
              />
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={rate}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  const clamped = Math.min(30, Math.max(1, next || 0));
                  dispatch(setRate(clamped));
                }}
                className="w-full mt-2"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium dark:text-white">Time (Months)</label>
              <input
                type="number"
                value={time}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  const clamped = Math.min(360, Math.max(6, next || 0));
                  dispatch(setTime(clamped));
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    dispatch(calculateEMI());
                  }
                }}
                className="w-full p-2 border rounded-md dark:bg-gray-500 dark:text-white"
              />
              <input
                type="range"
                min="6"
                max="360"
                step="6"
                value={time}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  const clamped = Math.min(360, Math.max(6, next || 0));
                  dispatch(setTime(clamped));
                }}
                className="w-full mt-2"
              />
            </div>
            <div className="justify-center items-center text-center">
              <button
                onClick={() => dispatch(calculateEMI())}
                className="w-72 text-lg bg-green-500 text-white py-2.5 rounded-lg hover:bg-green-600 shadow-md transition"
              >
                Calculate
              </button>    
            </div>        
          </div>

          {/* Right: Pie Chart */}
          <div className="md:col-span-4 flex flex-col items-center h-full justify-center">
            {emi > 0 && (
              <div className="mt-6 p-4 bg-green-100 dark:bg-gray-300 font-roboto rounded-lg text-center space-y-2">
                <h2 className="text-lg font-semibold">Your EMI Calculator :</h2>
                <p className="text-[27px] font-bold text-green-600 dark:text-[#008d8d]">₹ {emi}</p>

                <p className="text-red-500">
                  <strong>Total Interest:</strong> ₹ {totalInterest}
                </p>
                <p className="text-gray-800">
                  <strong>Total Payment (Principal + Interest):</strong> ₹{" "}
                  {totalPayment}
                </p>
              </div>
            )}
            {emi > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {chartData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center p-4 border-dashed border-2 rounded-lg border-gray-300 h-full flex items-center justify-center text-gray-600 dark:text-white">
                Enter values and calculate EMI to see breakdown.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}