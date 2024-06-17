import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landing_page';
import FieldsPage from './pages/fields_page';
import FieldsDetailPage from './pages/field_detail_page';

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
    path: '/detailfield',
    element: <FieldsDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
