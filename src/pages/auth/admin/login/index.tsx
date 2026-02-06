import { AuthApi } from "@/api/auth/AuthApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const AdminLoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  return (
    <div className=" w-screen h-screen flex justify-center items-center ">
      <div className=" bg-white w-[25em] rounded-xl shadow-xl">
        {" "}
        <div className="my-10 flex justify-center flex-col items-center">
          <p className="text-xl font-semibold">Login Admin</p>
          <form
            className="w-full px-5  flex flex-col gap-1"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);

              const authBody = {
                email: formData.get("email"),
                password: formData.get("password"),
              };

              try {
                await AuthApi.authLogin(authBody);
                router.push("/admin/home");
              } catch (err) {
                setErrorMessage(err.response.data.message);
                console.error("error gan: ", err);
              }
            }}
          >
            <div className="flex flex-col">
              <label className="">email</label>
              <input
                type="text"
                name="email"
                className="border-2 pl-1 rounded-md py-1"
                placeholder="Input email..."
              />
            </div>
            <div className="flex flex-col">
              <label className="">password</label>
              <input
                type="password"
                name="password"
                className="border-2 pl-1 rounded-md py-1"
                placeholder="Input Password..."
              />
            </div>
            <div className="flex  w-full  justify-between mt-1">
              <Link
                href=""
                className=" text-sm text-blue-400 hover:text-blue-600"
              >
                Forget Password?{" "}
              </Link>
              <Link
                href=""
                className=" text-sm text-blue-400 hover:text-blue-600"
              >
                signup
              </Link>
            </div>
            <button
              className="w-full py-2 bg-blue-400 my-1 rounded-lg text-white hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
