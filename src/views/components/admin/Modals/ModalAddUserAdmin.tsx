import { useAdminStore } from "@/store/adminStore";

const ModalAddUserAdmin = () => {
  const isAddUserByAdminClosed = useAdminStore(
    (state) => state.isAddUserByAdminClosed,
  );
  const registerUserByAdmin = useAdminStore(
    (state) => state.registerUserByAdmin,
  );

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/75">
        <div className="max-h-[90vh] w-1/4 overflow-y-auto rounded-xl bg-white p-2 text-sm">
          <div className=" flex items-center justify-between rounded-xl p-4 shadow-sm">
            <h2 className="text-3xl font-bold text-[#333333]">Add User</h2>
            <button
              onClick={() => isAddUserByAdminClosed()}
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
              const formData = new FormData(e.target);
              const body = {
                name: formData.get("name"),
                email: formData.get("email"),
                password: formData.get("password"),
              };

              try {
                await registerUserByAdmin(body);
              } catch (error) {
                console.error("error Gan: ", error);
              }
            }}
          >
            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border-2 rounded-lg pl-2 h-10"
                placeholder="Name..."
                required
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                email
              </label>
              <input
                type="text"
                name="email"
                className="border-2 rounded-lg pl-2 h-10"
                placeholder="input email..."
                required
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="" className="text-lg">
                Password{" "}
              </label>
              <input
                type="password"
                name="password"
                className="border-2 rounded-lg pl-2 h-10"
                placeholder="Password..."
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

export default ModalAddUserAdmin;
