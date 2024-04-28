import { create } from "zustand";

export const useStore = create((set, get) => ({
  items: [],
  count: 0,
  token: "",
  inc: () => set((state) => ({ count: state.count + 1 })),
  SetToken: (tk) => set(() => ({ token: tk })),
  AddProduct: (producto) =>
    set((state) => ({ items: [...state.items, producto] })),
  Delete: (producto) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== producto.id),
    }));
  },
  Vaciar: () => set(() => ({ items: [] })),
  Total: () => {
    const { items } = get();
    if (items.length)
      return items
        .map((item) => item.precio * item.cantidad)
        .reduce((total, importe) => total + importe);
    return items.length;
  },
}));
