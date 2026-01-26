import React, { useState } from "react";
import { useProductStore } from "@/store/productStore";
import { productApi } from "@/api/products/AdminProductsPage";

const ModalAddProduct = () => {
  const isAddProducClosed = useProductStore((state) => state.isAddProducClosed);
  const addProduct = useProductStore((state) => state.addProduct);

  const [addData, setAddData] = useState({
    category: "",
    image: null,
    name: "",
    price: 0,
  });

  const handleInputImage = (e) => {
    const { files } = e.target;

    setAddData((prev) => ({ ...prev, image: files[0] }));
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/75">
        <div className="max-h-[90vh] w-1/4 overflow-y-auto rounded-xl bg-white p-2 text-sm">
          <div className=" flex items-center justify-between rounded-xl p-4 shadow-sm">
            <h2 className="text-3xl font-bold text-[#333333]">Edit Data</h2>
            <button
              onClick={() => isAddProducClosed()}
              className="text-3xl font-semibold text-gray-500 hover:text-gray-700"
            >
              x
            </button>
          </div>

          {/* Modal Content */}
          <form
            className="flex flex-col p-6 w-full "
            onSubmit={async (e) => {
              e.preventDefault();

              const afterUp = await productApi.uploadFile(addData.image);

              const imageUrl = afterUp.data.url;

              await addProduct({
                ...addData,
                image: imageUrl,
              });

              // addProduct(addData);
            }}
          >
            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                Name
              </label>
              <input
                type="text"
                className="border-2 rounded-lg pl-2 h-10"
                value={addData?.name}
                onChange={(e) =>
                  setAddData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Name..."
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                Category
              </label>
              <input
                type="text"
                className="border-2 rounded-lg pl-2 h-10"
                placeholder="input Category..."
                value={addData?.category}
                onChange={(e) =>
                  setAddData((prev) => ({ ...prev, category: e.target.value }))
                }
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                Image
              </label>
              <input
                type="file"
                className="border-2 rounded-lg pl-2 py-2 flex "
                placeholder="image..."
                onChange={handleInputImage}
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                Price
              </label>
              <input
                type="number"
                className="border-2 rounded-lg pl-2 h-10"
                placeholder="price..."
                onChange={(e) =>
                  setAddData((prev) => ({
                    ...prev,
                    price: Number(e.target.value),
                  }))
                }
                required
              />
            </div>

            <button
              className=" bg-blue-600 hover:bg-blue-800 mt-3 h-8 rounded-lg text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAddProduct;
