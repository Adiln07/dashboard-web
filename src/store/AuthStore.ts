import { AuthApi } from "@/api/auth/AuthApi";
import { profile } from "console";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import { create } from "zustand";

type profile = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAdt: Timestamp;
};

type AuthStore = {
  profileData: profile[];
  loading: boolean;
  error: string | null;
  fetchProfile: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  profileData: [],
  loading: false,
  error: null,
  fetchProfile: async () => {
    try {
      set({ loading: true });
      const res = await AuthApi.getProfile();
      set({ profileData: res?.data || [], loading: false });
    } catch (error) {
      if (error.response?.status === 401) {
        set({ error: "unauthorized", loading: false });
      } else {
        set({ error: "Error to get Profile ", loading: false });
      }
    }
  },
}));
