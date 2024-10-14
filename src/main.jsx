import React from "react";
import ReactDOM from 'react-dom/client';

import App from "./App";



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contacts from "./page/contacts/Contacts";
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";
import Calendar from "./page/calendar/Calendar";
import Faq from "./page/faq/Faq";
import Bar from "./page/barChart/bar";
import Pie from "./page/pieChart/Piechart";
import Line from "./page/lineChart/Line";
import Geography from "./page/geography/Geography";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />      
      <Route path="team" element={<Team />} />      
      <Route path="contacts" element={<Contacts />} />      
      <Route path="invoices" element={<Invoices />} />      
      <Route path="form" element={<Form />} />      
      <Route path="calendar" element={<Calendar />} />      
      <Route path="faq" element={<Faq />} />      
      <Route path="bar" element={<Bar/>} />      
      <Route path="pie" element={<Pie />} />      
      <Route path="line" element={<Line/>} />      
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);