import React from "react";
import { useProductStore } from "@/store/productStore";

const ModalDeleteProduct = () => {
  const isDeleteClosed = useProductStore((state) => state.isDeleteClosed);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const productId = useProductStore((state) => state.productId);

  console.log("isi dari productID: ", productId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/75">
      <div className="max-h-[90vh] w-1/4 overflow-y-auto rounded-xl bg-white p-2 text-sm">
        <div className=" flex items-center justify-between rounded-xl p-4 shadow-sm">
          <h2 className="text-3xl font-bold text-[#333333]">Delete Data</h2>
          <button
            onClick={() => isDeleteClosed()}
            className="text-3xl font-semibold text-gray-500 hover:text-gray-700"
          >
            x
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col p-6 items-center justify-center gap-4">
          <h1 className="text-lg">Apakah Anda ingin menghapus Data?</h1>
          <div className="flex w-full gap-2">
            <button
              onClick={() => isDeleteClosed()}
              className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg h-8 text-center"
            >
              Kembali
            </button>
            <button
              onClick={() => deleteProduct(productId)}
              className="w-1/2 bg-red-500 hover:bg-red-700 text-white rounded-lg h-8 text-center"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteProduct;
