import { useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";

const ModalEditProduct = () => {
  const productId = useProductStore((state) => state.productId);
  const productById = useProductStore((state) => state.productById);
  const isEditProduct = useProductStore((state) => state.isEditProduct);
  const isEditClosed = useProductStore((state) => state.isEditClosed);
  const editProduct = useProductStore((state) => state.editProduct);
  const fetchAddProductById = useProductStore(
    (state) => state.fetchAddProductById
  );

  const [ediData, setEditData] = useState({
    category: "",
    image: "",
    name: "",
    price: Number,
  });

  useEffect(() => {
    if (isEditProduct && productId) {
      fetchAddProductById(productId);
    }
  }, []);

  useEffect(() => {
    if (productById) {
      setEditData({
        category: productById.category || "",
        image: productById.image || "",
        name: productById.name || "",
        price: productById.price || Number,
      });
    }
  }, [productById]);

  console.log("product id: ", productId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/75">
      <div className="max-h-[90vh] w-1/4 overflow-y-auto rounded-xl bg-white p-2 text-sm">
        <div className=" flex items-center justify-between rounded-xl p-4 shadow-sm">
          <h2 className="text-3xl font-bold text-[#333333]">Edit Data</h2>
          <button
            onClick={() => isEditClosed()}
            className="text-3xl font-semibold text-gray-500 hover:text-gray-700"
          >
            x
          </button>
        </div>

        {/* Modal Content */}
        <form
          className="flex flex-col p-6 w-full "
          onSubmit={(e) => {
            e.preventDefault();
            editProduct(productId, ediData);
          }}
        >
          <div className="flex flex-col ">
            <label htmlFor="" className="text-lg">
              Name
            </label>
            <input
              type="text"
              className="border-2 rounded-lg pl-2 h-10"
              value={ediData?.name}
              onChange={(e) =>
                setEditData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
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
              value={ediData?.category}
              onChange={(e) =>
                setEditData((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="text-lg">
              Image
            </label>
            <input
              type="text"
              className="border-2 rounded-lg pl-2 h-10"
              placeholder="image..."
              value={ediData?.image}
              onChange={(e) =>
                setEditData((prev) => ({
                  ...prev,
                  image: e.target.value,
                }))
              }
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
              value={ediData?.price}
              onChange={(e) =>
                setEditData((prev) => ({
                  ...prev,
                  price: Number(e.target.value),
                }))
              }
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
  );
};

export default ModalEditProduct;
