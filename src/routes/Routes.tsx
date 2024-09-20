import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Coupons from '../pages/Coupons';
import Users from '../pages/Users';
import Stats from '../pages/Stats';

import Settings from '../pages/Settings';
// src/Routes.tsx

import Open from '../components/Open';
import InProgress from '../components/InProgress';
import Solved from '../components/Solved';
import Closed from '../components/Closed';
import RecentTickets from '../components/RecentTickets';
import TicketsToHandle from '../components/TicketsToHandle';
import MyOpenTickets from '../components/MyOpenTickets';
import MyTicketsLast7Days from '../components/MyTicketsLast7Days';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/users" element={<Users />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/open" element={<Open />} />
      <Route path="/inprogress" element={<InProgress/>} />
      <Route path="/solved" element={<Solved />} />
      <Route path="/closed" element={<Closed />} />
      <Route path="/all-recent-tickets" element={<RecentTickets />} />
      <Route path="/tickets-to-handle" element={<TicketsToHandle />} />
      <Route path="/my-open-tickets" element={<MyOpenTickets />} />
      <Route path="/my-tickets-last-7-days" element={<MyTicketsLast7Days />} />
    </Routes>
  );
};

export default AppRoutes;



