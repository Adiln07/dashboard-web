// import { productApi } from "@/api/products/AdminProductsPage";

import AdminProductsPage from "@/views/admin/AdminProductsPage";
import { productApi } from "@/api/products/AdminProductsPage";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";

const ProductsPage = () => {
  return (
    <div>
      <AdminProductsPage />
    </div>
  );
};

export default ProductsPage;
