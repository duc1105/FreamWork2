import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/css/admin/dashboard.css";
import MessageProvider from "../store/message-context";
import Sidebar from "../components/admin/Sidebar";
import HeaderAdmin from "../components/admin/HeaderAdmin";

const AdminLayout = () => {
  return (
    <MessageProvider>
      <div>
        <Sidebar />
        <HeaderAdmin />
        <Outlet />
      </div>
    </MessageProvider>
  );
};

export default AdminLayout;
