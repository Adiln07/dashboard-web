import Image from "next/image";
import { useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";

// type typeProducts = {
//   id: string;
//   category: string;
//   image: string;
//   name: string;
//   price: number;
// };

// interface props {
//   data: typeProducts[];
//   isEdit: boolean;
//   isDelete: boolean;
// }

const TableProduct = () => {
  const data = useProductStore((state) => state.products);
  const loading = useProductStore((state) => state.loading);
  const fetchAddProducts = useProductStore((state) => state.fetchAddProducts);
  const setProductId = useProductStore((state) => state.setProductId);
  const isEditOpen = useProductStore((state) => state.isEditOpen);
  const isDeleteOpen = useProductStore((state) => state.isDeleteOpen);
  const isAddProductOpen = useProductStore((state) => state.isAddProductOpen);
  const iSFilter = useProductStore((state) => state.isFilter);
  const isFilterOpen = useProductStore((state) => state.isFilterOpen);
  const isFilterClosed = useProductStore((state) => state.isFilterClosed);
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    fetchAddProducts();
  }, []);

  const OpenModalEdit = (id: string) => {
    setProductId(id);
    isEditOpen();
  };

  const openModaldelete = (id: string) => {
    setProductId(id);
    isDeleteOpen();
  };

  const filterData = data?.filter(
    (product) =>
      product.name.toLowerCase().includes(filterName.toLowerCase()) &&
      product.category.toLowerCase().includes(filterCategory.toLowerCase())
  );

  return (
    <div className="w-[65em] m-auto mb-10 ">
      {loading ? (
        <div>Masih Loading Gan</div>
      ) : (
        <div>
          <button
            className="bg-green-600 text-white py-1 px-2  my-2 hover:bg-green-700 rounded-md "
            onClick={() => isAddProductOpen()}
          >
            {" "}
            Add Product
          </button>
          {iSFilter ? (
            <button
              className="bg-red-600 text-white py-1 px-2  my-2 hover:bg-red-700 rounded-md ml-2"
              onClick={() => isFilterClosed()}
            >
              {" "}
              Kembali
            </button>
          ) : (
            <button
              className="bg-gray-600 text-white py-1 px-2  my-2 hover:bg-gray-700 rounded-md ml-2"
              onClick={() => isFilterOpen()}
            >
              {" "}
              Filter Product
            </button>
          )}
          <div className="  rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-white-100 text-gray-700">
                <tr className="text-left">
                  {iSFilter ? (
                    <tr className="flex">
                      <th className="px-3 py-2 flex flex-col">
                        <span>Name</span>
                        <input
                          type="text"
                          className="border-1 "
                          value={filterName}
                          onChange={(e) => setFilterName(e.target.value)}
                        />
                      </th>
                      <th className="px-3 py-2 text-gray-600 flex-col flex ">
                        <span>Category</span>

                        <input
                          type="text"
                          className="border-1"
                          value={filterCategory}
                          onChange={(e) => setFilterCategory(e.target.value)}
                        />
                      </th>
                    </tr>
                  ) : (
                    <>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3 text-gray-600">Category</th>
                    </>
                  )}
                  <th className="px-4 py-3 text-right font-semibold">Price</th>
                  <th className="px-4 py-3 text-center font-semibold">Image</th>
                  <th className="px-4 py-3 text-center font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filterData?.map((item) => (
                  <tr
                    key={item?.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">{item?.name}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {item?.category}
                    </td>

                    <td className="px-4 py-3 text-right">
                      Rp {item?.price.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <img
                        src={item?.image}
                        className="w-24 m-auto h-24 object-cover rounded-xl shadow-lg "
                      />
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => OpenModalEdit(item?.id)}
                        className="rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModaldelete(item?.id)}
                        className="rounded-md ml-2 bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableProduct;
