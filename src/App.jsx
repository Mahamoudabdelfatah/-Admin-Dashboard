import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material"
import Layout from "./Components/Layout/Layout"
import Notfound from "./Pages/Notfound/Notfound"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { getDesignTokens } from "./theme"
import Dashboard from "./Pages/Dashboard/Dashboard";
import Team from "./Pages/Team/Team";
import Contacts from "./Pages/Contacts/Contacts";
import Invoices from "./Pages/Invoices/Invoices";
import Form from "./Pages/Form/Form";
import Calendar from "./Pages/Calendar/Calendar";
import FAQ from "./Pages/FAQ/FAQ";
import Bar from "./Pages/Bar/Bar";
import Pie from "./Pages/Pie/Pie";
import Line from "./Pages/Line/Line";
import Geography from "./Pages/Geography/Geography";


function App() {

  const [mode, setMode] = React.useState(localStorage.getItem("currentMode") || "light")
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout setMode={setMode} />, children: [
        { index: true, element: <Dashboard /> },
        { path: "team", element: <Team /> },
        { path: "contacts", element: <Contacts /> },
        { path: "invoices", element: <Invoices /> },
        { path: "form", element: <Form /> },
        { path: "calendar", element: <Calendar /> },
        { path: "faq", element: <FAQ /> },
        { path: "bar", element: <Bar /> },
        { path: "pie", element: <Pie /> },
        { path: "line", element: <Line /> },
        { path: "geography", element: <Geography /> },
        { path: "*", element: <Notfound /> }
      ]
    }
  ])

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes}  ></RouterProvider>
      </ThemeProvider>
    </>
  )
}

export default App
