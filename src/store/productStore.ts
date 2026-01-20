import { create } from "zustand";
import { productApi } from "@/api/products/AdminProductsPage";

type Product = {
  id: string;
  category: string;
  image: string;
  name: string;
  price: number;
};

type PopAlert = {
  isVisible: boolean;
  status: boolean;
  message: string;
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
  isFilter: boolean;
  popAlert: PopAlert;

  fetchAddProducts: () => Promise<void>;
  fetchAddProductById: (id: string) => Promise<void>;
  addProduct: (body: Product) => Promise<void>;
  editProduct: (body: Product, id: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;

  setProductId: (id: string) => void;
  isEditOpen: () => void;
  isDeleteOpen: () => void;
  isEditClosed: () => void;
  isDeleteClosed: () => void;
  isAddProductOpen: () => void;
  isAddProducClosed: () => void;
  isFilterOpen: () => void;
  isFilterClosed: () => void;
  popAlertVisibled: () => void;
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
  isFilter: false,
  popAlert: {
    isVisible: false,
    status: false,
    message: "",
  },

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
          message: "Gagal menambahkan Product!!",
        },
      });
      set({ error: "error to fetch Data By Id" });
    }
  },

  editProduct: async (id, body) => {
    try {
      await productApi.editProduct(id, body);
      const updated = await productApi.getAllProducts();
      set({ products: updated?.data });
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Berhasil Update Product",
        },
      });
      set({ isEditProduct: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Gagal Update Product",
        },
      });
      set({ error: "error to edit Data" });
    }
  },

  deleteProduct: async (id) => {
    try {
      await productApi.deleteProduct(id);
      const updated = await productApi.getAllProducts();
      set({ products: updated?.data });
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Berhasil Hapus Product",
        },
      });
      set({ isDeleteProduct: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Gagal Hapus Product",
        },
      });
      set({ error: "error to Delete Data" });
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
