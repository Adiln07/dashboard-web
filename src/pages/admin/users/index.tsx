import { useAdminStore } from "@/store/adminStore";
import AdminUser from "@/views/admin/AdminUser";
import Alert from "@/views/components/Alert/Alert";
import { useEffect } from "react";

const AdminUserPage = () => {
  const popAlert = useAdminStore((state) => state.popAlert);
  const popAlertVisibled = useAdminStore((state) => state.popAlertVisibled);

  useEffect(() => {
    if (!popAlert.isVisible) return;
    const timer = setTimeout(() => {
      popAlertVisibled();
    }, 3500);
    return () => clearTimeout(timer);
  }, [popAlert.isVisible]);

  return (
    <div>
      <Alert />
      <AdminUser />
    </div>
  );
};

export default AdminUserPage;
