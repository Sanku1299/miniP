import './SalesGraph.css';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesGraph = () => {
    const [salesData, setSalesData] = useState([]);

    // Fetch sales data from the backend
    useEffect(() => {
        fetch('http://localhost:4000/salesdata')  // Replace this with your actual API endpoint
            .then((response) => response.json())
            .then((data) => setSalesData(data));
    }, []);

    // Prepare the data for the chart
    const data = {
        labels: salesData.map(item => item.month), // Example: ['Jan', 'Feb', 'Mar', ...]
        datasets: [
            {
                label: 'Sales',
                data: salesData.map(item => item.sales),  // Example: [500, 700, 300, ...]
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    // Chart configuration options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    };

    return (
        <div className="chart-container">
            <h3 className="text-center">Sales Graph</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default SalesGraph;
