import "./assets/style/global.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import LandPageOverview from "./pages/HomePage.jsx";
import Search from "./pages/Search.jsx"
function App() {
  const router= createBrowserRouter([{
    path: "/",
    element: <LandPageOverview/>,
    },
    {
      path: "/search",
      element: <Search/>,
      }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
