import React from "react";
import AppShell from "../layouts/AppShell";
import UserAdminCard from "../components/admin/UserAdminCard";
import { useAdminStore } from "@/store/adminStore";
import ModalAddUserAdmin from "../components/admin/Modals/ModalAddUserAdmin";
import ModalDeleteUserAdmin from "../components/admin/Modals/ModalDeleteUserAdmin";

const AdminUser = () => {
  const isAddUserByAdmin = useAdminStore((state) => state.isAddUserByAdmin);
  const isDeleteUserByAdmin = useAdminStore(
    (state) => state.isDeleteUserByAdmin,
  );

  return (
    <AppShell>
      <div className=" w-[65em] m-auto">
        <p className="my-4 tex-lg font-semibold">User Account</p>
        <UserAdminCard />
      </div>

      {isAddUserByAdmin && <ModalAddUserAdmin />}
      {isDeleteUserByAdmin && <ModalDeleteUserAdmin />}
    </AppShell>
  );
};

export default AdminUser;
