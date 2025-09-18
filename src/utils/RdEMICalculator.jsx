import { useState } from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";


export default function RdEMICalculator() {
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

    const chartData = [
        { name: "Principal", value: Number(maturityAmount) },
        { name: "Interest", value: Number(totalInterest) },
        { name: "Total Deposited", value: Number(totalDeposited) },
    ];

    const COLORS = ["#07bdbd",  "#F54927", "#15a801"];

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center font-roboto">
                <div className="bg-[#fff] dark:bg-gray-700 rounded-md shadow-md w-full max-w-[1200px] px-4 py-4">
                    <h1 className="text-[30px] font-bold text-center dark:text-white uppercase underline text-gray-700 pb-2">RD Calculator</h1>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-2 lg:px-3 px-3 py-3">                        
                            {/* Left: Inputs */}
                            <div className="md:col-span-3">
                                <div className="mb-4">
                                    <label className="block font-medium dark:text-white py-2">Monthly Deposit (₹)</label>
                                    <input
                                        type="number"
                                        value={monthlyDeposit}
                                        onChange={(e) => setMonthlyDeposit(e.target.value)}
                                        className="w-full border px-3 py-2 rounded mt-1 shadow-sm focus:outline-none 
                                        focus:ring-2 focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-medium dark:text-white py-2">Interest Rate (% p.a.)</label>
                                    <input
                                        type="number"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                        className="w-full border px-3 py-2 rounded mt-1 shadow-sm 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block font-medium dark:text-white py-2">Duration (Months)</label>
                                    <input
                                        type="number"
                                        value={months}
                                        onChange={(e) => setMonths(e.target.value)}
                                        className="w-full border px-3 py-2 rounded mt-1 shadow-sm focus:outline-none 
                                        focus:ring-2 focus:ring-blue-500 dark:bg-gray-500 dark:text-white"
                                    />
                                </div>
                                <div className="justify-center items-center text-center my-3">
                                    <button
                                        onClick={calculateRD}
                                        className="w-72 text-lg bg-green-500 text-white py-2.5 rounded-lg hover:bg-green-600 shadow-md transition"
                                    >
                                        Calculate Maturity
                                    </button>
                                </div>
                            </div>
                        {/* Right: Pie Chart */}
                        <div className="md:col-span-4 flex flex-col items-center h-full justify-center">
                            {maturityAmount > 0 && (
                                <div className="mt-6 p-4 bg-green-100 dark:bg-gray-300 font-roboto rounded-lg text-center space-y-2">
                                    <h2 className="text-lg font-semibold">Your RD Calculator :</h2>
                                    <p className="text-[30px] font-bold text-green-600 dark:text-[#008d8d]">
                                        ₹ {maturityAmount}
                                    </p>
                                    <p className="text-red-500 text-[22px]">
                                        <strong>Total Interest Earned:</strong> ₹
                                        {totalInterest}
                                    </p>
                                    <p className="text-gray-800 text-[22px]">
                                        <strong>Total Deposited Amount:</strong> ₹{" "}
                                        {totalDeposited}
                                    </p>
                                </div>
                            )}
                            {maturityAmount > 0 ? (
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