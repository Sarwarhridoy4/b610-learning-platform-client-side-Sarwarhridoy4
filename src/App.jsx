import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import { routes } from "./Routes/Routes/Routes"


const App = () => {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App