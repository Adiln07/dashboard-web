import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center ">
      <div className=" bg-white w-[25em] rounded-xl shadow-xl">
        {" "}
        <div className="my-10 flex justify-center flex-col items-center">
          <p className="text-xl font-semibold">Login Admin</p>
          <form className="w-full px-5  flex flex-col gap-1">
            <div className="flex flex-col">
              <label className="">email</label>
              <input
                type="text"
                className="border-2 pl-1 rounded-md py-1"
                placeholder="Input email..."
              />
            </div>
            <div className="flex flex-col">
              <label className="">password</label>
              <input
                type="text"
                className="border-2 pl-1 rounded-md py-1"
                placeholder="Input Password..."
              />
            </div>
          </form>
          <div className="flex  w-full px-5 justify-between mt-1">
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
