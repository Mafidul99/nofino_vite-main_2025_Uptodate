import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend);

function SIPInvesmentCalc() {
    const [monthlyInvestment, setMonthlyInvestment] = useState("5000");
    const [interestRate, setInterestRate] = useState("12");
    const [tenureYears, setTenureYears] = useState("1");
    const [result, setResult] = useState(null);

    const calculateSIP = (P, R, years) => {
        const n = years * 12;
        const r = R / 12 / 100;

        const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        const investedAmount = P * n;
        const interestEarned = maturityAmount - investedAmount;

        return {
            investedAmount: investedAmount.toFixed(2),
            interestEarned: interestEarned.toFixed(2),
            maturityAmount: maturityAmount.toFixed(2),
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const calc = calculateSIP(
            Number(monthlyInvestment),
            Number(interestRate),
            Number(tenureYears)
        );
        setResult(calc);
    };

    const chartData = result && {
        labels: ["Invested Amount", "Interest Earned", "Maturity Amount"],        
        datasets: [
            {
                data: [result.investedAmount, result.interestEarned, result.maturityAmount],
                backgroundColor: ["#00FF00",  "#FF00FF", "#FF0000"],
                hoverBackgroundColor: ["#2563eb", "#00FFFF", "#059669"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <div className="flex flex-col items-center min-h-screen p-6 font-roboto">
                <div className="bg-[#fff] dark:bg-gray-700 rounded-md shadow-md w-full max-w-[1200px] px-3 py-4">
                    <h1 className="text-[30px] font-bold text-center dark:text-white uppercase underline text-gray-700 py-3">
                        SIP (Systematic Investment Plan) Investment Plan</h1>
                    <div className="grid grid-cols-3 gap-4 px-3 py-3 md:grid-cols-1 lg:grid-cols-1">
                        <div className="w-full font-roboto">
                            {/* Input Form */}
                            <div className="w-full px-4 items-center font-roboto">
                                <form onSubmit={handleSubmit} >
                                    <div className="flex flex-col p-2 w-full">
                                        <label className="block mb-1 font-semibold py-2 dark:text-white">Monthly Investment (₹)</label>
                                        <input
                                            type="number"
                                            value={monthlyInvestment}
                                            onChange={(e) => setMonthlyInvestment(e.target.value)}
                                            className="w-full p-2 border-gray-400 rounded-md border-[1px] bg-[#e3e3e3ae] shadow-md dark:bg-gray-500 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col p-2">
                                        <label className="block mb-1 font-semibold py-2 dark:text-white">Interest Rate (% per year)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
                                            className="w-full p-2 border-gray-400 rounded-md border-[1px] bg-[#e3e3e3ae] shadow-md dark:bg-gray-500 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col p-2">
                                        <label className="block mb-1 font-semibold py-2 dark:text-white">Tenure (years)</label>
                                        <input
                                            type="number"
                                            value={tenureYears}
                                            onChange={(e) => setTenureYears(e.target.value)}
                                            className="w-full p-2 border-gray-400 rounded-md border-[1px] bg-[#e3e3e3ae] shadow-md dark:bg-gray-500 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col py-3 mt-2">
                                        <button
                                            onClick={handleSubmit}
                                            className="block px-4 py-2 text-lg text-white transition bg-pink-600 rounded-lg shadow-md hover:bg-pink-400"
                                        >
                                            Calculate SIP
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="items-center col-span-2 justify-center w-full h-full px-4 py-6 bg-[#fff] font-roboto rounded shadow-md  dark:bg-gray-700">
                            {result ? (
                                <div className="w-full flex flex-col md:flex-row sm:flex-col sm:gap-4 gap-8 items-center justify-center">
                                    {/* Doughnut Chart */}
                                    <div className="w-full max-w-xs dark:text-[#fff]">
                                        <Doughnut data={chartData}/>
                                    </div>

                                    {/* Results */}
                                    <div className="w-full font-roboto">
                                        <table className="min-w-full text-md border border-gray-300 dark:text-white text-center">
                                            <thead className="bg-blue-100 dark:bg-green-600">
                                                <tr>
                                                    <th className="px-4 py-2.5 border text-center">Description</th>
                                                    <th className="px-4 py-2.5 border text-center">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b">
                                                    <td className="p-2 border font-bold">Invested Amount</td>
                                                    <td className="p-2 border font-semibold text-blue-600">₹{Number(result.investedAmount).toLocaleString()}</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="p-2 border font-bold">Interest Earned</td>
                                                    <td className="p-2 border font-semibold text-red-600">₹{Number(result.interestEarned).toLocaleString()}</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 border font-bold">Total Value</td>
                                                    <td className="p-2 border font-semibold text-green-600">₹{Number(result.maturityAmount).toLocaleString()}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
        </>

    );
}

export default SIPInvesmentCalc;
