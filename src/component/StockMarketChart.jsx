import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockMarketChart = ({ symbol, title }) => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`
      )
      .then((response) => {
        const monthlyData = response.data["Monthly Time Series"];
        const labels = Object.keys(monthlyData)
          .reverse()
          .map((date) => date.substr(0, 7));
        const dataPoints = Object.values(monthlyData)
          .reverse()
          .map((item) => parseFloat(item["4. close"]));

        setData({
          labels,
          datasets: [
            {
              label: title,
              data: dataPoints,
              fill: false,
              borderColor: "blue",
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error fetching data from Alpha Vantage API:", error);
      });
  }, [symbol, title]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title} Monthly Chart</h2>
      <div className="w-full">
        <Line data={data} />
      </div>
    </div>
  );
};

export default StockMarketChart;
