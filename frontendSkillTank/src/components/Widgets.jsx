// Widgets.jsx
import React from 'react';

const Widget = ({ title, value, icon, bgColor }) => {
  return (
    <div className={`flex items-center justify-between bg-${bgColor}-500 p-4 rounded-lg shadow-lg text-white`}>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg">{value}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
};

const Widgets = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Widget title="Users" value="1,250" icon="👥" bgColor="blue" />
      <Widget title="Revenue" value="$15,000" icon="💰" bgColor="green" />
      <Widget title="Sessions" value="2,400" icon="📈" bgColor="purple" />
    </div>
  );
};

export default Widgets;
