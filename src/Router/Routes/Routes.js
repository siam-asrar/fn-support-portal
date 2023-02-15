import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Components from "../../Pages/Components/Components";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Error from "../../Pages/Shared/Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Articles from "../../Pages/Articles/Articles";
import UserType from "../../Pages/MenuType/MenuType";
import ComponentCard from "../../Pages/ComponentCard/ComponentCard";

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
                path: '/articles/:name',
                element: <Articles></Articles>,
                loader: () => fetch(`/articles.json`)
            },
            {
                path: '/:useType/:name',
                element: <UserType></UserType>,
                loader: () => fetch(`/providers.json`)
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
                path: '/dashboard/components',
                element: <Components></Components>
            },
            {
                path: '/dashboard/component/:name',
                element: <ComponentCard></ComponentCard>,
                loader: () => fetch(`/components.json`)
            }
        ]
    }
]);

export default router;