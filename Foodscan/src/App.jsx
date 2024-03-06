import "./assets/style/global.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import LandPageOverview from "./pages/HomePage.jsx";
import Upload from './pages/upload.jsx' 
import Search from './pages/Search.jsx'
import Info from './pages/Info.jsx'
import Login from "./pages/Auth/Login.jsx";
import './index.css'
import Signup from './pages/Auth/Signup.jsx'
import Profile from './pages/Auth/Profile.jsx'

function App() {
  const router= createBrowserRouter([{
    path: "/",
    element: <LandPageOverview/>,
    },
    {
      path: "/upload",
      element: <Upload/>,
    },
    {
      path:'/search',
      element:<Search/>
    },
    {
      path: "/info",
      element: <Info/>,
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
   
    
  

  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
     
    </div>
  )
}

export default App
