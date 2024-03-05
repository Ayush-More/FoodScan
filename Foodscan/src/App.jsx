import "./assets/style/global.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import LandPageOverview from "./pages/HomePage.jsx";
function App() {
  const router= createBrowserRouter([{
    path: "/",
    element: <LandPageOverview/>,
    },
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
