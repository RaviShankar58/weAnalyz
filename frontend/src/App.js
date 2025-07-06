// src/App.js
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard'; // user dashboard
import NewTicket from './pages/NewTicket';
import MyTickets from './pages/MyTickets';
import Profile from './pages/Profile';

// Import Operation Team components from /components/operation
import OperationLayout from './components/operation/OperationLayout';
import OperationDashboard from './components/operation/OperationDashboard';
import OperationTicketApproval from './components/operation/OperationTicketApproval';
import OperationMyTickets from './components/operation/OperationMyTickets';
import OperationPerformance from './components/operation/OperationPerformance';

import TechnicalLayout from './components/technical/TechnicalLayout';
import TechnicalDashboard from './pages/technical/TechnicalDashboard';
import TechnicalMyTickets from './pages/technical/TechnicalMyTickets';
import TechnicalPerformance from './pages/technical/TechnicalPerformance';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* User Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Operation Team */}
    <Route path="/operation" element={<OperationLayout />}>
      <Route path="dashboard" element={<OperationDashboard />} />
      <Route path="ticket-approval" element={<OperationTicketApproval />} />
      <Route path="my-tickets" element={<OperationMyTickets />} />
      <Route path="performance" element={<OperationPerformance />} />
    </Route>

    <Route path="/technical" element={<TechnicalLayout />}>
      <Route path="dashboard" element={<TechnicalDashboard />} />
      <Route path="my-tickets" element={<TechnicalMyTickets />} />
      <Route path="performance" element={<TechnicalPerformance />} />
    </Route>
    </Routes>
  );
}

export default App;
