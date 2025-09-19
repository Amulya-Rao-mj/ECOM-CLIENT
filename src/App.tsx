import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminOrders from "./pages/admin/AdminOrders";
import UserProducts from "./pages/user/UserProducts";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/admin/products" element = {<AdminProducts/>} />
        <Route path="/admin/users" element = {<AdminUsers/>} />
        <Route path="/admin/orders" element = {<AdminOrders/>} />
        <Route path="/user/products" element = {<UserProducts/>} />

    
      </Routes>
    </div>
  );
};

export default App;
