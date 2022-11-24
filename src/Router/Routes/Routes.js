import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Phones from "../../Pages/Phones/Phones";
import Register from "../../Pages/Register/Register";
import Error from "../../Pages/Shared/Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories/:brand',
                element: <PrivateRoute><Phones></Phones></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/categories/${params.brand}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>,
                loader: () => fetch('http://localhost:4000/users')
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>,
                loader: () => fetch('http://localhost:4000/users')
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
            }
        ]
    }
]);

export default router;