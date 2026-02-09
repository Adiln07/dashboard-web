import React from "react";
import AppShell from "../layouts/AppShell";
import UserTableProduct from "../components/users/table/UserTableProduct";
import { useUsersProductStore } from "@/store/usersProductStore";
import ModalAddProductUser from "../components/users/Modals/ModalAddProductUser";
import ModalEditProductUser from "../components/users/Modals/ModalEditProductUser";
import ModalDeleteProductUser from "../components/users/Modals/ModalDeleteProductUser";

const UsersProducts = () => {
  const isEditProduct = useUsersProductStore((state) => state.isEditProduct);
  const isAddProduct = useUsersProductStore((state) => state.isAddProduct);
  const isDeleteProduct = useUsersProductStore(
    (state) => state.isDeleteProduct,
  );

  return (
    <AppShell>
      <UserTableProduct />
      {isEditProduct && <ModalEditProductUser />}
      {isAddProduct && <ModalAddProductUser />}
      {isDeleteProduct && <ModalDeleteProductUser />}
    </AppShell>
  );
};

export default UsersProducts;
