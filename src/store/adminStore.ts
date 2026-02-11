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
  userId: string;
  isDeleteUserByAdmin: boolean;

  fecthGetAllUsersAdmin: () => Promise<void>;
  registerUserByAdmin: (body: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;

  deleteUserByAdmin: (id: string) => Promise<void>;
  setUserId: (id: string) => void;
  isAddUserByAdminOpen: () => void;
  isAddUserByAdminClosed: () => void;
  isDeleteUserByAdminOpen: () => void;
  isDeleteUserByAdminClosed: () => void;

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
  userId: "",
  isDeleteUserByAdmin: false,

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

  deleteUserByAdmin: async (id: string) => {
    try {
      await adminApi.deleteUserByAdmin(id);
      const updated = await adminApi.getAllUsersAdmin();
      set({ users: updated?.data || [], loading: false });
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully DELETED user by admin",
        },
      });
      set({ isDeleteUserByAdmin: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to DELETED user by admin",
        },
      });
    }
  },

  setUserId: (id: string) => set({ userId: id }),

  isAddUserByAdminOpen: () => {
    set({ isAddUserByAdmin: true });
  },
  isAddUserByAdminClosed: () => {
    set({ isAddUserByAdmin: false });
  },
  isDeleteUserByAdminOpen: () => {
    set({ isDeleteUserByAdmin: true });
  },
  isDeleteUserByAdminClosed: () => {
    set({ isDeleteUserByAdmin: false });
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
