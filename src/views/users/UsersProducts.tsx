import React from "react";
import AppShell from "../layouts/AppShell";
import UserTableProduct from "../components/users/table/UserTableProduct";
import { useUsersProductStore } from "@/store/usersProductStore";
import ModalAddProductUser from "../components/users/Modals/ModalAddProductUser";
import ModalEditProductUser from "../components/users/Modals/ModalEditProductUser";

const UsersProducts = () => {
  const isEditProduct = useUsersProductStore((state) => state.isEditProduct);
  const isAddProduct = useUsersProductStore((state) => state.isAddProduct);

  return (
    <AppShell>
      <UserTableProduct />
      {isEditProduct && <ModalEditProductUser />}
      {isAddProduct && <ModalAddProductUser />}
    </AppShell>
  );
};

export default UsersProducts;
