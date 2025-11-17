import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import Search from "../pages/Search.jsx";
import Create from "../pages/Create.jsx";
import BookDetail from "../pages/BookDetail.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        {
            path: "",
            element: <Home />
        },{
            path: "/create",
            element: <Create />
        },{
            path: "/search",
            element: <Search />
        },{
            path: "/BookDetail/:id",
            element: <BookDetail />
        },
    ]
    },
]);

export default router;