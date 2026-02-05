import { create } from "zustand";
import { userProductApi } from "@/api/users/UsersProduct";

type Product = {
  id: string;
  category: string;
  image: string;
  name: string;
  price: number;
  userId: string;
};

type PopAlert = {
  isVisible: boolean;
  status: boolean;
  message: string;
};

type UsersProductStore = {
  products: Product[];
  productById: Product | null;
  loading: boolean;
  error: string | null;
  popAlert: PopAlert;
  isAddProduct: boolean;
  isFilter: boolean;

  fetchGetProducts: () => Promise<void>;
  fetchGetProductById: (id: string) => Promise<void>;
  addProduct: (body: Product) => Promise<void>;
  isAddProductOpen: () => void;
  isAddProducClosed: () => void;
  isFilterOpen: () => void;
  isFilterClosed: () => void;
  popAlertVisibled: () => void;
};

export const useUsersProductStore = create<UsersProductStore>((set) => ({
  products: [],
  productById: null,
  loading: false,
  error: null,
  popAlert: {
    isVisible: false,
    status: false,
    message: "",
  },
  isAddProduct: false,
  isFilter: false,

  fetchGetProducts: async () => {
    try {
      const response = await userProductApi.getAllProducts();
      set({ products: response?.data || [], loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
    }
  },
  fetchGetProductById: async (id: string) => {
    try {
      const response = await userProductApi.getProductById(id);
      set({ productById: response?.data || null, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch product by ID", loading: false });
    }
  },
  addProduct: async (body: Product) => {
    try {
      await userProductApi.addProduct(body);
      const updatedProducts = await userProductApi.getAllProducts();

      set({
        products: updatedProducts?.data || [],
      });
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Berhasil menambahkan Product",
        },
      });
      set({ isAddProduct: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to add product!",
        },
      });
    }
  },

  isAddProductOpen: () => {
    set({ isAddProduct: true });
  },
  isAddProducClosed: () => {
    set({ isAddProduct: false });
  },
  isFilterOpen: () => {
    set({ isFilter: true });
  },
  isFilterClosed: () => {
    set({ isFilter: false });
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
