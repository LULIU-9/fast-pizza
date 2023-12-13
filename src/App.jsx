import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/CreateOrder";
import User from "./features/user/CreateUser";
import Error from "./ui/Error";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },

      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },

      // { path: "/user", element: <User /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
