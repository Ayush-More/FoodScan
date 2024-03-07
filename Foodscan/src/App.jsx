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
import { Navigate } from "react-router-dom";
export function PrivateRoute(props) {
  let { component: Component } = props;
  const token = localStorage.getItem("jwt");
  console.log(token);
  const isLoggedIn = token != null && token != undefined;

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}
function App() {
  const router= createBrowserRouter([{
    path: "/",
    element: <PrivateRoute component={LandPageOverview}/>,
    },
    {
      path: "/upload",
      element:<PrivateRoute component={Upload}/>,
    },
    {
      path:'/search',
      element:<PrivateRoute component={Search}/>
    },
    {
      path: "/info",
      // element: <PrivateRoute component={Info}/>,
      element: <Info/>
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
      element: <PrivateRoute component={Profile}/>,
    },
   
    
  

  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
     
    </div>
  )
}

export default App
