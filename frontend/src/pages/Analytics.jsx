import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/analytics').then((res) => setData(res.data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink data={data} filename="analytics.csv" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
        Export as CSV
      </CSVLink>
    </div>
  );
};

export default Analytics;
