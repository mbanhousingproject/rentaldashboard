import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const barData = {
    labels: ['findallrentals.ca', 'Zillow', 'apartments.com', 'Kijiji.ca'],
    datasets: [{
      label: 'Average of Monthly Rent by Sitename',
      data: [2447, 2228, 2227, 2220],
      backgroundColor: ['rgba(153, 102, 255, 0.2)'],
      borderColor: ['rgba(153, 102, 255, 1)'],
      borderWidth: 1
    }]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: $${context.parsed.x}`;
          }
        }
      }
    }
  };

  const lineDataBedrooms = {
    labels: [0, 1, 2, 3, 4],
    datasets: [{
      label: 'Average of Monthly Rent by Bedroom',
      data: [1651.3, 1857.0, 2450.5, 2733.5, 4250.0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: true,
      tension: 0.4
    }]
  };

  const lineDataBathrooms = {
    labels: ['1', '2', '3', '4'],
    datasets: [{
      label: 'Average of Monthly Rent by Bathroom',
      data: [2101.75, 2734.19, 3902.00, 2999.00],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      fill: true,
      tension: 0.4
    }]
  };

  const pieData = {
    labels: ['Hammonds Plains', 'Halifax', 'Bedford', 'Sackville'],
    datasets: [{
      label: 'Distribution of Listings by Location',
      data: [10, 50, 25, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)'
      ]
    }]
  };

  return (
    <div className="app">
      <h1>Halifax Rental Dashboard</h1>
      <div className="chart-container">
        <div className="chart">
          <h2>Average Rent by Sitename</h2>
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="chart">
          <h2>Average Rent by Bedroom</h2>
          <Line data={lineDataBedrooms} />
        </div>
        <div className="chart">
          <h2>Average Rent by Bathroom</h2>
          <Line data={lineDataBathrooms} />
        </div>
        <div className="chart">
          <h2>Distribution by Location</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default App;
