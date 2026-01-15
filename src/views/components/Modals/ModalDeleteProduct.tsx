import React from "react";
import { useProductStore } from "@/store/productStore";

const ModalDeleteProduct = () => {
  const isDeleteClosed = useProductStore((state) => state.isDeleteClosed);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/75">
      <div className="max-h-[90vh] w-1/2 overflow-y-auto rounded-xl bg-white p-2 text-sm">
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
        <div className="flex flex-col p-6"></div>
      </div>
    </div>
  );
};

export default ModalDeleteProduct;
