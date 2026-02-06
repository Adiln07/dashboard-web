import { create } from "zustand";
import { userProductApi } from "@/api/users/UsersProduct";
import { PopAlert } from "@/types/typePopAlert";
type Product = {
  id: string;
  category: string;
  image: string;
  name: string;
  price: number;
  userId: string;
};

type UsersProductStore = {
  products: Product[];
  productById: Product | null;
  productId: string;
  loading: boolean;
  error: string | null;
  popAlert: PopAlert;
  isAddProduct: boolean;
  isEditProduct: boolean;
  isFilter: boolean;

  fetchGetProducts: () => Promise<void>;
  fetchGetProductById: (id: string) => Promise<void>;
  addProduct: (body: Product) => Promise<void>;
  editProduct: (body: Product, id: string) => Promise<void>;
  setProductId: (id: string) => void;
  isAddProductOpen: () => void;
  isAddProducClosed: () => void;
  isEditProductOpen: () => void;
  isEditProductClosed: () => void;
  isFilterOpen: () => void;
  isFilterClosed: () => void;
  popAlertVisibled: () => void;
};

export const useUsersProductStore = create<UsersProductStore>((set) => ({
  products: [],
  productById: null,
  productId: "",
  loading: false,
  error: null,
  popAlert: {
    isVisible: false,
    status: false,
    message: "",
  },
  isAddProduct: false,
  isEditProduct: false,
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
      set({ productId: "" });
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
  editProduct: async (body: Product, id: string) => {
    try {
      await userProductApi.editProductById(id, body);
      const updatedProducts = await userProductApi.getAllProducts();
      set({ products: updatedProducts?.data || [] });
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Berhasil mengedit Product",
        },
      });
      set({ isEditProduct: false });
      set({});
    } catch (error) {}
  },

  setProductId: (id: string) => set({ productId: id }),
  isAddProductOpen: () => {
    set({ isAddProduct: true });
  },
  isAddProducClosed: () => {
    set({ isAddProduct: false });
  },
  isEditProductOpen: () => {
    set({ isEditProduct: true });
  },
  isEditProductClosed: () => {
    set({ isEditProduct: false });
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
