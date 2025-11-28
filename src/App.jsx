import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Notfound from "./Pages/Notfound/Notfound"
import { createBrowserRouter, RouterProvider } from "react-router-dom"



let routes = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "*", element: <Notfound /> }
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={routes}  ></RouterProvider>
    </>
  )
}

export default App
