import Image from "next/image";

type typeProducts = {
  id: string;
  category: string;
  image: string;
  name: string;
  price: number;
};

interface props {
  data: typeProducts[];
}

const TableProduct = ({ data }: props) => {
  return (
    <div className="w-[65em] m-auto ">
      <button className="bg-green-600 text-white py-1 px-2  my-2 hover:bg-green-700 rounded-md ">
        {" "}
        Add Product
      </button>
      <div className="  rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-white-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Category</th>
              <th className="px-4 py-3 text-right font-semibold">Price</th>
              <th className="px-4 py-3 text-center font-semibold">Image</th>
              <th className="px-4 py-3 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3 text-gray-600">{item.category}</td>
                <td className="px-4 py-3 text-right">
                  Rp {item.price.toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-3 text-center">
                  {/* <Image src={item.image} /> */}
                  <img
                    src={item?.image}
                    className="w-24 m-auto h-24 object-cover rounded-xl shadow-lg "
                  />
                </td>
                <td className="text-center">
                  <button className="rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="rounded-md ml-2 bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableProduct;
