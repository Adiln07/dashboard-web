import React from "react";
import AppShell from "../layouts/AppShell";
import UserTableProduct from "../components/users/table/UserTableProduct";
import { useUsersProductStore } from "@/store/usersProductStore";
import ModalAddProductUser from "../components/users/Modals/ModalAddProductUser";

const UsersProducts = () => {
  const isAddProduct = useUsersProductStore((state) => state.isAddProduct);

  return (
    <AppShell>
      <UserTableProduct />
      {isAddProduct && <ModalAddProductUser />}
    </AppShell>
  );
};

export default UsersProducts;
