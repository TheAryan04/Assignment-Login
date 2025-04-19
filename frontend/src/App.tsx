import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import Register from "./pages/Register";
import Home from "./pages/Home";


const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <Register />,
  }
])


function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App;