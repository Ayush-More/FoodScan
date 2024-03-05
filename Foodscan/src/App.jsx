import "./assets/style/global.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import LandPageOverview from "./pages/HomePage.jsx";
import Upload from './pages/upload.jsx';


function App() {
  const router= createBrowserRouter([{
    path: "/",
    element: <LandPageOverview/>,
    },
    {
    path: "/upload",
    element: <Upload/>,
    },
    
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
