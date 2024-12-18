import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";
import { Input } from "../components/ui/input.jsx";
import { Button } from "../components/ui/button.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";

const initialData = [
  { id: 1, date: '2023-06-01', users: 100, revenue: 1000 },
  { id: 2, date: '2023-06-02', users: 120, revenue: 1200 },
  { id: 3, date: '2023-06-03', users: 80, revenue: 800 },
  { id: 4, date: '2023-06-04', users: 150, revenue: 1500 },
  { id: 5, date: '2023-06-05', users: 90, revenue: 900 },
];

const Analytics = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState('');

  const handleFilter = (e) => {
    setFilter(e.target.value);
    const filtered = initialData.filter(item => 
      item.date.includes(e.target.value) || 
      item.users.toString().includes(e.target.value) ||
      item.revenue.toString().includes(e.target.value)
    );
    setData(filtered);
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Date,Users,Revenue\n"
      + data.map(row => `${row.date},${row.users},${row.revenue}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "analytics_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Filter data..."
            value={filter}
            onChange={handleFilter}
            className="max-w-sm"
          />
          <Button onClick={handleExport}>Export to CSV</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Revenue</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.users}</TableCell>
                <TableCell>${row.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Analytics;

