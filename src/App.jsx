import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Notfound from "./Pages/Notfound/Notfound"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { getDesignTokens } from "./theme"







function App() {

  const [mode, setMode] = React.useState(localStorage.getItem("currentMode") || "light")
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout setMode={setMode} />, children: [
        { index: true, element: <Home /> },
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
