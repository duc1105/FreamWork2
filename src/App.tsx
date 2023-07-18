import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import HomePage from "./pages/client/HomePage";
import ProductList from "./pages/client/products/ProductList";
import About from "./pages/client/About";
import Blogs from "./pages/client/Blogs";
import Contact from "./pages/client/Contact";
import Login from "./pages/client/Login";
import Register from "./pages/client/Register";
import NotFound from "./pages/client/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import AddProduct from "./pages/admin/products/AddProduct";
import ListProduct from "./pages/admin/products/ProductList";
import UpdateProduct from "./pages/admin/products/UpdateProduct";
import ListCategory from "./pages/admin/categories/ListCategory";
import AddCategory from "./pages/admin/categories/AddCategory";
import UpdateCategory from "./pages/admin/categories/UpdateCategory";
import ProductDetail from "./pages/client/products/ProductDetail";
import { getAll } from "./api/product";
import { getAllCate } from "./api/category";
// import "./App.css";

function App() {
  const [products, setProduct] = useState<any>([]);
  const [categories, setCategory] = useState<any>([]);
  useEffect(() => {
    getAll().then((data) => setProduct(data.docs));
  }, []);

  useEffect(() => {
    getAllCate().then((data) => setCategory(data))
  }, []);
  const router = createBrowserRouter([
    // Client
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductList products={products} /> },
        { path: "/products/:id", element: <ProductDetail /> },
        { path: "/about", element: <About /> },
        { path: "/blog", element: <Blogs /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    // Admin
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "/admin", element: <Dashboard /> },
        // Products
        {
          path: "/admin/products",
          element: <ListProduct products={products} />,
        },
        { path: "/admin/products/add", element: <AddProduct /> },
        { path: "/admin/products/update/:id", element: <UpdateProduct /> },

        // Categories
        {
          path: "/admin/categories",
          element: <ListCategory categories={categories} />,
        },
        { path: "/admin/categories/add", element: <AddCategory /> },
        { path: "/admin/categories/update/:id", element: <UpdateCategory /> },
      ],
    },
    //
    { path: "*", element: <NotFound /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
