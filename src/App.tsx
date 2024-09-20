import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar'; // Use NavigationBar from tejuproject
import { Sidebar } from './components/Sidebar'; // Sidebar from projectticket (optional for layout)
import AppRoutes from './routes/Routes';// Unified routes for both projects
import './App.css'; // Common CSS for layout styling


const App = () => {
  return (
    <Router>
      <div className="app-layout">
        {/* Constant NavigationBar from tejuproject */}
        <NavigationBar />

        {/* Optionally include Sidebar (if needed for extra navigation/ticket-related pages) */}
        <div className="main-content">
          <Sidebar />  {/* Include if Sidebar is necessary, otherwise remove this */}
          
          {/* Content Area where routing occurs */}
          <div className="content-area">
            <AppRoutes />  {/* This will render the routes and pages */}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
