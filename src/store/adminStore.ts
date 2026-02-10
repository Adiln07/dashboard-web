import { create } from "zustand";
import { adminApi } from "@/api/admin/adminApi";
import { PopAlert } from "@/types/typePopAlert";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Timestamp;
};

type AdminStore = {
  users: User[];
  loading: boolean;
  error: string | null;
  popAlert: PopAlert;
  isAddUserByAdmin: boolean;

  fecthGetAllUsersAdmin: () => Promise<void>;
  registerUserByAdmin: (body: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  isAddUserByAdminOpen: () => void;
  isAddUserByAdminClosed: () => void;
  popAlertVisibled: () => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  users: [],
  loading: false,
  error: null,
  popAlert: {
    isVisible: false,
    status: false,
    message: "",
  },
  isAddUserByAdmin: false,

  fecthGetAllUsersAdmin: async () => {
    try {
      const response = await adminApi.getAllUsersAdmin();
      set({ users: response?.data || [], loading: false, error: null });
    } catch (error) {
      set({ error: "Failed to fetch users", loading: false });
    }
  },

  registerUserByAdmin: async (body: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      await adminApi.registerUserByAdmin(body);
      const updated = await adminApi.getAllUsersAdmin();
      set({ users: updated?.data || [], loading: false });
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully added user by admin",
        },
      });
      set({ isAddUserByAdmin: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to add user by admin",
        },
      });
    }
  },

  isAddUserByAdminOpen: () => {
    set({ isAddUserByAdmin: true });
  },
  isAddUserByAdminClosed: () => {
    set({ isAddUserByAdmin: false });
  },
  popAlertVisibled: () => {
    set((state) => ({
      popAlert: {
        ...state.popAlert,
        isVisible: false,
      },
    }));
  },
}));
