import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landing_page';
import FieldsPage from './pages/fields_page';
import FieldsDetailPage from './pages/field_detail_page';
import PaymentPage from './pages/payments_page';
import DashboardPage from './pages/dashboard_page';
import DashboardHome from './components/Fragments/Dashboard/dashboard_home';
import DashboardUser from './components/Fragments/Dashboard/dashboard_users';
import DashboardFields from './components/Fragments/Dashboard/dashboard_fields';
import DashboardOrder from './components/Fragments/Dashboard/dashboard_orders';
import DashboardAdmins from './components/Fragments/Dashboard/dashboard_admins';
import LoginPage from './pages/login_page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/fields',
    element: <FieldsPage />,
  },
  {
    path: '/fields/:id',
    element: <FieldsDetailPage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        path: '',
        element: <DashboardHome />,
      },
      {
        path: 'users',
        element: <DashboardUser />,
      },
      {
        path: 'fields',
        element: <DashboardFields />,
      },
      {
        path: 'orders',
        element: <DashboardOrder />,
      },
      {
        path: 'admins',
        element: <DashboardAdmins />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);