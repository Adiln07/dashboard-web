import { useEffect, useState } from "react";
import { useUsersProductStore } from "@/store/usersProductStore";

const UserTableProduct = () => {
  const data = useUsersProductStore((state) => state.products);
  const fetchGetProducts = useUsersProductStore(
    (state) => state.fetchGetProducts,
  );
  const loading = useUsersProductStore((state) => state.loading);
  const products = useUsersProductStore((state) => state.products);
  const isAddProductOpen = useUsersProductStore(
    (state) => state.isAddProductOpen,
  );
  const isFilter = useUsersProductStore((state) => state.isFilter);
  const isFilterOpen = useUsersProductStore((state) => state.isFilterOpen);
  const isFilterClosed = useUsersProductStore((state) => state.isFilterClosed);

  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    fetchGetProducts();
  }, []);

  const filterData = data?.filter(
    (product) =>
      product.name.toLowerCase().includes(filterName.toLowerCase()) &&
      product.category.toLowerCase().includes(filterCategory.toLowerCase()),
  );

  console.log("data produk user:", products);

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
          {isFilter ? (
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
                  {isFilter ? (
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
                        // onClick={() => OpenModalEdit(item?.id)}
                        className="rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        // onClick={() => openModaldelete(item?.id)}
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

export default UserTableProduct;
