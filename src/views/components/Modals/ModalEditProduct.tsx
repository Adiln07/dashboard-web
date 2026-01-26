import { productApi } from "@/api/products/AdminProductsPage";
import { useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";

const ModalEditProduct = () => {
  const productId = useProductStore((state) => state.productId);
  const productById = useProductStore((state) => state.productById);
  const isEditProduct = useProductStore((state) => state.isEditProduct);
  const isEditClosed = useProductStore((state) => state.isEditClosed);
  const editProduct = useProductStore((state) => state.editProduct);
  const fetchAddProductById = useProductStore(
    (state) => state.fetchAddProductById,
  );

  const [fotoFile, setFotoFile] = useState(null);
  const [editData, setEditData] = useState({
    category: "",
    image: "",
    name: "",
    price: 0,
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

  const url = fotoFile ? URL.createObjectURL(fotoFile) : "";

  const handleFileFoto = (e) => {
    const { files } = e.target;

    setFotoFile(files[0]);
  };

  console.log("url: ", url);
  console.log("edit: ", editData);
  console.log("foto File: ", fotoFile);

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
          onSubmit={async (e) => {
            e.preventDefault();

            if (fotoFile) {
              const upload = await productApi.uploadFile(fotoFile);
              const imageUrl = upload.data.url;
              editProduct(productId, { ...editData, image: imageUrl });
            } else {
              editProduct(productId, editData);
            }
          }}
        >
          <div className="flex flex-col ">
            <label htmlFor="" className="text-lg">
              Name
            </label>
            <input
              type="text"
              className="border-2 rounded-lg pl-2 h-10"
              value={editData?.name}
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
              value={editData?.category}
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
            <img
              src={fotoFile ? url : editData.image}
              alt=""
              className="h-[10em] w-[10em] my-2 rounded-lg object-cover"
            />
            <input
              type="file"
              className="border-2 rounded-lg pl-2 py-2"
              placeholder="image..."
              // value={editData?.image}
              onChange={handleFileFoto}
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
              value={editData?.price}
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
