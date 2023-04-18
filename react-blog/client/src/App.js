import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import Register from './Pages/Register'
import Category from './Pages/Category'
import Expense from './Pages/Expense'
import Login from './Pages/Login'
const Layout = ()=>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};
const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/category/",
      element:<Category/>
    },
    {
      path:"/expense",
      element:<Expense/>
    }
  ]},
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <Register/>
  },
]);

function App() {
  return (
    <div className="app relative pb-10 min-h-screen">
      <div className="container"></div>
    <RouterProvider router = {router}/>
    </div>
  );
};


export default App;
