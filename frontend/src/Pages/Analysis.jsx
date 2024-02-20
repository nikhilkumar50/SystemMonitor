import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const MonitoringDashboard = () => {
  const [usageData, setUsageData] = useState(null);

  useEffect(() => {
    fetchUsageData();
  }, []);

  const fetchUsageData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/usage');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUsageData(data);
    } catch (error) {
      console.error('Error fetching usage data:', error);
    }
  };

  useEffect(() => {
    if (usageData) {
      const ctx = document.getElementById('usageChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['CPU', 'Memory'],
          datasets: [{
            label: 'Usage Percentage',
            data: [usageData.cpu_percent, usageData.memory_percent],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [usageData]);

  const renderStatusMessage = () => {
    if (!usageData) return null;

    const { cpu_percent, memory_percent } = usageData;
    if (cpu_percent > 80 || memory_percent > 80) {
      return <p className="text-red-500">Abnormal</p>;
    }
    return <p className="text-green-500">Normal</p>;
  };

  return (
    <div className="rounded-div">
      <canvas id="usageChart"></canvas>
      {renderStatusMessage()}
    </div>
  );
};

export default MonitoringDashboard;
