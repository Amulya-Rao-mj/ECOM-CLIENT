import AdminTopbar from "@/components/Topbar/AdminTopbar";
import { Outlet } from "react-router-dom";

const AdminLayouts = () => {
  return (
    <div>
      className="flex justify-start items-centre flex-col
      <AdminTopbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayouts;
