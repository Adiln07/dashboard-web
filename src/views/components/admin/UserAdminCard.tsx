import { useAdminStore } from "@/store/adminStore";
import React, { useEffect } from "react";

const UserAdminCard = () => {
  const isAddUserByAdmin = useAdminStore((state) => state.isAddUserByAdmin);
  const isAddUserByAdminOpen = useAdminStore(
    (state) => state.isAddUserByAdminOpen,
  );
  const users = useAdminStore((state) => state.users);
  const loading = useAdminStore((state) => state.loading);
  const fecthGetAllUsersAdmin = useAdminStore(
    (state) => state.fecthGetAllUsersAdmin,
  );

  useEffect(() => {
    fecthGetAllUsersAdmin();
  }, []);

  const dataUsers = users.filter((user) => user.role === "user");

  return (
    <div>
      <button
        onClick={() => isAddUserByAdminOpen()}
        className="bg-green-500 hover:bg-green-600 cursor-pointer text-white text-base  mb-2 rounded-lg px-2"
      >
        Add User
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataUsers.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg p-4 bg-white shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <button className="bg-blue-500 text-white px-1  rounded w-full hover:bg-blue-600">
                  Products
                </button>
                <button className="bg-red-500 text-white px-1 rounded w-full hover:bg-red-600 ">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserAdminCard;
