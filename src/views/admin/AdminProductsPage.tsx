import AppShell from "@/views/layouts/AppShell";
import TableProduct from "../components/TableProduct";
import { useProductStore } from "@/store/productStore";
import ModalEditProduct from "../components/Modals/ModalEditProduct";
import ModalDeleteProduct from "../components/Modals/ModalDeleteProduct";
import ModalAddProduct from "../components/Modals/ModalAddProduct";

// type typeProducts = {
//   id: string;
//   category: string;
//   image: string;
//   name: string;
//   price: number;
// };

// interface adminProducts {
//   productsData: typeProducts[];
//   isEditProduct: boolean;
//   isDeleteProduct: boolean;
// }

const AdminProductsPage = () => {
  const isEditProduct = useProductStore((state) => state.isEditProduct);
  const isDeleteProduct = useProductStore((state) => state.isDeleteProduct);
  const isAddProduct = useProductStore((state) => state.isAddProduct);

  console.log("edit parentki we: ", isEditProduct);
  console.log("delete Parent jga: ", isDeleteProduct);

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
