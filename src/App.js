import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Cart from "./components/Cart";

import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/<LocalMallRoundedIcon />" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-poppins  text-white">
      <div className="">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
