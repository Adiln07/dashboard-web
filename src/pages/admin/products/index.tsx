// import { productApi } from "@/api/products/AdminProductsPage";

import AdminProductsPage from "@/views/admin/AdminProductsPage";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [dataProduct, setDataProducts] = useState({});

  useEffect(() => {
    async function getProductData() {
      try {
        const data = await axios.get("http://localhost:2000/products");

        setDataProducts(data?.data);
      } catch (error) {
        console.log("Error Get Data from API");
        return error;
      }
    }

    getProductData();
  }, []);

  return <AdminProductsPage productsData={dataProduct?.data} />;
};

export default ProductsPage;
