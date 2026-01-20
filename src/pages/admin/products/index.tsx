import AdminProductsPage from "@/views/admin/AdminProductsPage";
import { productApi } from "@/api/products/AdminProductsPage";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import Alert from "@/views/components/Alert/Alert";

const ProductsPage = () => {
  const popAlert = useProductStore((state) => state.popAlert);
  const setPopAlerted = useProductStore((state) => state.popAlertVisibled);

  useEffect(() => {
    if (!popAlert.isVisible) return;
    const timer = setTimeout(() => {
      setPopAlerted();
    }, 3500);
    return () => clearTimeout(timer);
  }, [popAlert.isVisible]);

  return (
    <div>
      <Alert />
      <AdminProductsPage />
    </div>
  );
};

export default ProductsPage;
