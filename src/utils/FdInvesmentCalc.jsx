import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

function FdInvesmentCalc() {
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(7);
    const [years, setYears] = useState(1);
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

    const chartData = [
        { name: "Principal", value: Number(principal) },
    ];

    const COLORS = ["#07bdbd", "#15a801"];

    return (
        <div className="flex flex-col items-center min-h-screen p-6">
            <div className="bg-[#fff] dark:bg-gray-700 rounded-md shadow-md w-full max-w-[1200px] px-3 py-4">
                <h1 className="text-[30px] font-bold text-center dark:text-white uppercase underline text-gray-700 py-3">FD Investment Plan (Compound Interest)</h1>
                <div className="grid grid-cols-4 gap-4 px-3 py-3 md:grid-cols-2 md:gap-2 md:px-1 md:py-1">
                    <div className="items-center w-full col-span-2 p-6 mb-8 md:col-span-4 md:p-2">
                        <div className="mb-4">
                            <label className="block py-1.5 mb-1 font-semibold dark:text-white">Principal Amount (₹):</label>
                            <input
                                type="number"
                                value={principal}
                                onChange={(e) => setPrincipal(Number(e.target.value))}
                                className="w-full p-2 border-gray-400 rounded-md border-[1px] bg-[#e3e3e3ae] shadow-md dark:bg-gray-500 dark:text-white"
                                placeholder="Enter Principal"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 font-semibold py-1.5 dark:text-white">Annual Interest Rate (%):</label>
                            <input
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full p-2 border-gray-400 rounded-md border-[1px] bg-[#e3e3e3ae] shadow-md dark:bg-gray-500 dark:text-white"
                                placeholder="Enter Interest Rate"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-1 py-1.5 font-semibold dark:text-white">Tenure (Years):</label>
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full p-2 border-gray-400 rounded-md border-[1px] bg-[#e3e3e3ae] shadow-md dark:bg-gray-500 dark:text-white"
                                placeholder="Enter number of years"
                            />
                        </div>
                        <div className="items-center justify-center my-3 text-center">
                            <button
                                className="px-4 py-2 text-lg text-white transition bg-pink-600 rounded-lg shadow-md hover:bg-pink-400"
                                onClick={calculateCompoundFD}
                            >
                                Calculate FD
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full col-span-2">
                        {result.length > 0 && (
                            <div className="w-full max-w-3xl">
                                <div className="p-4 mt-6 space-y-2 text-center bg-green-100 rounded-lg shadow dark:bg-gray-300 font-roboto">
                                    <p className='font-bold text-red-500 font-roboto text-[18px]'>
                                        <strong>Total Interest: </strong> 
                                         ₹{result.reduce((acc, row) => acc + parseFloat(row.interest), 0).toFixed(2)}
                                        </p>
                                    <p className='font-bold text-green-500 font-roboto text-[20px]'>
                                        <strong>Maturity Amount: </strong> 
                                         ₹{result[result.length - 1].total}
                                    </p>
                                </div>
                            </div>
                        )}
                        {result.length > 0 ? (
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
                            <p className="flex items-center justify-center h-full p-4 text-center text-gray-600 capitalize border-2 border-gray-300 border-dashed rounded-lg dark:text-white">
                                Enter values and calculate EMI to see breakdown.
                            </p>
                        )}
                    </div>

                    <div className="w-full col-span-4 pt-3">
                        { result.length > 0 ? (
                        <table className="items-center w-full overflow-hidden text-center rounded dark:bg-gray-300">
                            <thead className="items-center justify-center w-full text-center text-white bg-green-600 justify-items-center ">
                                <tr>
                                    <th className="px-4 py-3">Tenure (Years)</th>
                                    <th className="px-4 py-3">Interest Earned (₹)</th>
                                    <th className="px-4 py-3">Total Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody >
                                {result.map((row) => (
                                    <tr key={row.year} className="border-t">
                                        <td className="px-4 py-2">{row.year}</td>
                                        <td className="px-4 py-2">{row.interest}</td>
                                        <td className="px-4 py-2">{row.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        ) : (
                            <p className="flex items-center justify-center h-full p-4 text-center text-gray-600 capitalize dark:text-white">
                                Enter values and calculate Data Table Showdown.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FdInvesmentCalc;
