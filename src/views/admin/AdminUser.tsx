import React from "react";
import AppShell from "../layouts/AppShell";
import UserAdminCard from "../components/admin/UserAdminCard";
import { useAdminStore } from "@/store/adminStore";
import ModalAddUserAdmin from "../components/admin/Modals/ModalAddUserAdmin";

const AdminUser = () => {
  const isAddUserByAdmin = useAdminStore((state) => state.isAddUserByAdmin);

  return (
    <AppShell>
      <div className=" w-[65em] m-auto">
        <p className="my-4 tex-lg font-semibold">User Account</p>
        <UserAdminCard />
      </div>

      {isAddUserByAdmin && <ModalAddUserAdmin />}
    </AppShell>
  );
};

export default AdminUser;
