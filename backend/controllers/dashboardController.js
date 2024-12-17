// Get dashboard data


// Logic to show in the frontend..!


export const getDashboardData = (req, res) => {

  console.log("Dashboard route hits successfully");
  console.log("Fill the data");
  // Task: Logic to be Written here
  
    res.json({
      userCount: 100,
      revenue: 5000,
      activeSessions: 20,
    });
  };
  