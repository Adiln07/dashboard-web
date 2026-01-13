import AppShell from "@/views/layouts/AppShell";
import TableProduct from "../components/TableProduct";

type typeProducts = {
  id: string;
  category: string;
  image: string;
  name: string;
  price: number;
};

interface adminProducts {
  productsData: typeProducts[];
}

const AdminProductsPage = ({ productsData }: adminProducts) => {
  return (
    <AppShell>
      <TableProduct data={productsData} />
    </AppShell>
  );
};

export default AdminProductsPage;
