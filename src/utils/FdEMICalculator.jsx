import { useState } from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";


export default function FdEMICalculator() {
    const [principal, setPrincipal] = useState(100000);
    const [rate, setRate] = useState(12);
    const [time, setTime] = useState(1);
    const [frequency, setFrequency] = useState(4);
    const [maturity, setMaturity] = useState(null);
    const [interest, setInterest] = useState(null);

    const calculateFD = () => {
        const r = rate / 100;
        const A = principal * Math.pow(1 + r / frequency, frequency * time);
        const interestEarned = A - principal;
        setMaturity(A.toFixed(2));
        setInterest(interestEarned.toFixed(2));
    };

    const chartData = [
        { name: "Principal", value: Number(principal) },
        { name: "Interest", value: Number(interest) },
    ];

    const COLORS = ["#07bdbd", "#15a801"];

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center font-roboto">
                <div className="bg-[#fff] dark:bg-gray-700 rounded-md shadow-md w-full max-w-[1200px] px-4 py-4">
                    <h1 className="text-[30px] font-bold text-center dark:text-white uppercase underline text-gray-700 pb-2">FD Calculator</h1>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-2 lg:px-3 px-3 py-3">
                        {/* Left: Inputs */}
                        <div className="md:col-span-3">
                            <div className="mb-4">
                                <label className="block font-medium dark:text-white">Compounding Frequency</label>
                                <select
                                    className="mt-1 w-full px-3 py-2 border rounded-md dark:bg-gray-500 dark:text-white"
                                    value={frequency}
                                    onChange={(e) => setFrequency(+e.target.value)}
                                >
                                    <option value={1}>Annually</option>
                                    <option value={2}>Half-Yearly</option>
                                    <option value={4}>Quarterly</option>
                                    <option value={12}>Monthly</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium dark:text-white">Principal (₹)</label>
                                <input
                                    type="number"
                                    className="mt-1 w-full px-3 py-2 border rounded-md dark:bg-gray-500 dark:text-white"
                                    value={principal}
                                    onChange={(e) => setPrincipal(+e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium dark:text-white">Interest Rate (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    className="mt-1 w-full px-3 py-2 border rounded-md dark:bg-gray-500 dark:text-white"
                                    value={rate}
                                    onChange={(e) => setRate(+e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium dark:text-white">Time (years)</label>
                                <input
                                    type="number"
                                    className="mt-1 w-full px-3 py-2 border rounded-md dark:bg-gray-500 dark:text-white"
                                    value={time}
                                    onChange={(e) => setTime(+e.target.value)}
                                />
                            </div>
                            <div className="justify-center items-center text-center my-3">
                                <button
                                    className="w-72 text-lg bg-green-500 text-white py-2.5 rounded-lg hover:bg-green-600 shadow-md transition"
                                    onClick={calculateFD}
                                >
                                    Calculate
                                </button>
                            </div>
                        </div>

                        {/* Right: Pie Chart */}
                        <div className="md:col-span-4 flex flex-col items-center h-full justify-center">
                            {maturity > 0 && (
                                <div className="mt-6 p-4 bg-green-100 dark:bg-gray-300 font-roboto rounded-lg text-center space-y-2">
                                    <h2 className="text-lg font-semibold">Your RD Calculator :</h2>
                                    <p className="text-[27px] font-bold text-green-600 dark:text-[#008d8d]">
                                        ₹ {maturity}
                                    </p>
                                    <p className="text-gray-900">
                                        <strong>Principal Amount:</strong> ₹
                                        {/* {totalInterest} */} {principal}
                                    </p>
                                    <p className="text-red-500">
                                        <strong>Total Interest:</strong> ₹
                                        {/* {totalInterest} */} {interest}
                                    </p>
                                    <p className="text-gray-800">
                                        <strong>Total Payment (Principal + Interest):</strong> ₹{" "}
                                        {/* {totalPayment} */} {maturity}
                                    </p>
                                </div>
                            )}
                            {maturity > 0 ? (
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
        </>

    );
}