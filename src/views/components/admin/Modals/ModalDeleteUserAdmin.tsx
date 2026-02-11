import { useAdminStore } from "@/store/adminStore";
import React from "react";

const ModalDeleteUserAdmin = () => {
  const isDeleteUserByAdminClosed = useAdminStore(
    (state) => state.isDeleteUserByAdminClosed,
  );
  const userId = useAdminStore((state) => state.userId);
  const deleteUserByAdmin = useAdminStore((state) => state.deleteUserByAdmin);

  //   console.log("user ID: ", userId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/75">
      <div className="max-h-[90vh] w-1/4 overflow-y-auto rounded-xl bg-white p-2 text-sm">
        <div className=" flex items-center justify-between rounded-xl p-4 shadow-sm">
          <h2 className="text-3xl font-bold text-[#333333]">Delete User</h2>
          <button
            onClick={() => isDeleteUserByAdminClosed()}
            className="text-3xl font-semibold text-gray-500 hover:text-gray-700"
          >
            x
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col p-6 items-center justify-center gap-4">
          <h1 className="text-lg">Apakah Anda ingin menghapus user ini?</h1>
          <div className="flex w-full gap-2">
            <button
              onClick={() => isDeleteUserByAdminClosed()}
              className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg h-8 text-center"
            >
              Kembali
            </button>
            <button
              onClick={() => deleteUserByAdmin(userId)}
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

export default ModalDeleteUserAdmin;
