import { useUsersProductStore } from "@/store/usersProductStore";
import Alert from "@/views/components/Alert/Alert";
import UsersProducts from "@/views/users/UsersProducts";
import React, { useEffect } from "react";

const UsersProduct = () => {
  const popAlert = useUsersProductStore((state) => state.popAlert);
  const setPopAlerted = useUsersProductStore((state) => state.popAlertVisibled);

  useEffect(() => {
    if (!popAlert.isVisible) return;
    const timer = setTimeout(() => {
      setPopAlerted();
    }, 3500);
    return () => clearTimeout(timer);
  }, [popAlert.isVisible]);

  return (
    <div>
      <Alert />
      <UsersProducts />;
    </div>
  );
};

export default UsersProduct;
