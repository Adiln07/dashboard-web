import AppShell from "@/views/layouts/AppShell";
import TableProduct from "../components/TableProduct";
import { useProductStore } from "@/store/productStore";
import ModalEditProduct from "../components/Modals/ModalEditProduct";
import ModalDeleteProduct from "../components/Modals/ModalDeleteProduct";
import ModalAddProduct from "../components/Modals/ModalAddProduct";

const AdminProductsPage = () => {
  const isEditProduct = useProductStore((state) => state.isEditProduct);
  const isDeleteProduct = useProductStore((state) => state.isDeleteProduct);
  const isAddProduct = useProductStore((state) => state.isAddProduct);

  return (
    <AppShell>
      <TableProduct />

      {isEditProduct && <ModalEditProduct />}
      {isDeleteProduct && <ModalDeleteProduct />}
      {isAddProduct && <ModalAddProduct />}
    </AppShell>
  );
};

export default AdminProductsPage;
