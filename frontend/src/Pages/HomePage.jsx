// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [abnormal, setAbnormal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        const { cpu, memory } = response.data;
        
        setCpuUsage(cpu);
        setMemoryUsage(memory);
        // Determine if usage is abnormal (for demo purposes, CPU usage over 80% is considered abnormal)
        setAbnormal(cpu > 80 || memory > 80);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 10000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="rounded-div p-4 mt-8 mb-8">
      <h1 className="text-2xl font-bold mb-4 text-center pb-4">Welcome to CPU Monitoring System</h1>
      <h2 className="text-xl font-semibold pb-4">Anomaly Detection</h2>
      <p >
        We detect your system's CPU and memory usage and categorize them into abnormal and normal brackets.
      </p> 
        {abnormal ? (
          <span className="text-red-600 pb-4"> Your system's CPU or memory usage is abnormal.</span>
        ) : (
          <span className="text-green-600 pb-4"> Your system's CPU and memory usage are normal.</span>
        )}
      
      <h2 className="text-xl font-semibold mt-4 mb-4">Benefits of CPU Monitoring:</h2>
      <ul className="list-disc ml-6 mt-4">
        <li className="pt-1">Improved system performance</li>
        <li className="pt-1">Early detection of performance issues</li>
        <li className="pt-1">Optimized resource allocation</li>
        <li className="pt-1">Better decision-making for upgrades</li>
      </ul>
      {/* Add animation for displaying bunch of images */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4"></h2>
       
      </div>
    </div>
  );
}

export default HomePage;
