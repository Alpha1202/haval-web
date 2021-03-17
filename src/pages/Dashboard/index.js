import React, { useState, useEffect } from "react";

import { Navbar } from "../../components";
import { dashboardNavData } from "./Data";
import DashboardComponent from "./components/Dashboard/Dashboard";
import WalletComponent from "./components/Wallet/Wallet";
// import Filescomponent from "./components/Files/index.js";
import UploadComponent from "./components/Upload/Upload";
import ProfileComponent from "./components/Profile/Profile";

import { Files } from './components'
const Dashboard = () => {
  const [current, setCurrent] = useState();

  const handleTabToggle = (name) => {
    const toggleObj = {
      'Dashboard': DashboardComponent(),
      'Wallet': WalletComponent(),
      'Files': Files(),
      'Upload': UploadComponent(),
      'Profile': ProfileComponent(),
    };
    setCurrent(toggleObj[name]);
  };

  useEffect(() => { 
    handleTabToggle('Dashboard')
    // setCurrent(DashboardComponent())
  }, [])

  return (
    <>
      <Navbar
        type="dashboardNav"
        dashboardNavData={dashboardNavData}
        handleTabToggle={handleTabToggle}
      />
      {current}
    </>
  );
};

export default Dashboard;
