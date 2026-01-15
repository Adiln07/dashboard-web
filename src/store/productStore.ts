import { create } from "zustand";
import { productApi } from "@/api/products/AdminProductsPage";

type Product = {
  id: string;
  category: string;
  image: string;
  name: string;
  price: number;
};

type ProductStore = {
  products: Product[];
  productId: "";
  productById: Product | null;
  loading: boolean;
  error: string | null;

  isAddProduct: boolean;
  isEditProduct: boolean;
  isDeleteProduct: boolean;

  fetchAddProducts: () => Promise<void>;
  fetchAddProductById: (id: string) => Promise<void>;
  addProduct: (body: Product) => Promise<void>;

  setProductId: (id: string) => void;
  isEditOpen: () => void;
  isDeleteOpen: () => void;
  isEditClosed: () => void;
  isDeleteClosed: () => void;
  isAddProductOpen: () => void;
  isAddProducClosed: () => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  productId: "",
  productById: null,
  loading: false,
  error: null,
  isAddProduct: false,
  isEditProduct: false,
  isDeleteProduct: false,

  fetchAddProducts: async () => {
    try {
      set({ loading: true });
      const res = await productApi.getAllProducts();
      set({ products: res?.data || [], loading: false });
    } catch (error) {
      set({ error: "error to Fetch Data", loading: false });
    }
  },
  fetchAddProductById: async (id) => {
    try {
      set({ loading: true });
      const res = await productApi.getProductById(id);
      set({ productById: res?.data || null, loading: false });
    } catch (error) {
      set({ error: "error to Fetch Data By Id", loading: false });
    }
  },

  addProduct: async (body) => {
    try {
      await productApi.addProduct(body);
      // Ambil ulang data
      const updated = await productApi.getAllProducts();

      // SIMPAN ke zustand
      set({ products: updated?.data });
      set({ isEditProduct: false });
    } catch (error) {
      set({ error: "error to fetch Data By Id" });
    }
  },

  setProductId: (id) => set({ productId: id }),
  // setProductForm:(e, prev, nameForm)=> set({})
  isEditOpen: () => {
    set({ isEditProduct: true });
  },
  isDeleteOpen: () => {
    set({ isDeleteProduct: true });
  },
  isEditClosed: () => {
    set({ isEditProduct: false });
  },
  isDeleteClosed: () => {
    set({ isDeleteProduct: false });
  },
  isAddProductOpen: () => {
    set({ isAddProduct: true });
  },
  isAddProducClosed: () => {
    set({ isAddProduct: false });
  },
}));
