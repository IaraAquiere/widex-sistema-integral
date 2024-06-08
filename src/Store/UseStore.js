import { create } from "zustand";

export const useStore = create((set, get) => ({
  items: [],
  rol: {},
  count: 0,
  token: "",
  nombre: "",
  limiteCredito: 99,
  inc: () => set((state) => ({ count: state.count + 1 })),
  SetToken: (tk) => set(() => ({ token: tk })),
  SetNombre: (nom) => set(() => ({ nombre: nom })),
  SetLimite: (limite) => set(() => ({ limiteCredito: limite })),
  SetRol: (r) => set(() => ({ rol: r })),
  AddProduct: (producto) =>{
    const { items } = get();

    const indice = items.findIndex(item => item.id == producto.id )

    if(indice > -1)
    {
        const newItems = items;
        newItems[indice] = {...newItems[indice], cantidad: newItems[indice].cantidad + producto.cantidad}
        set(newItems)
    } else
    {
      set((state) => ({items: [...state.items, producto] }))
    }
  },
  Delete: (producto) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== producto.id),
    }));
  },
  Vaciar: () => set(() => ({ items: [] })),
  GetNombre: () => {
    const { nombre } = get();
    
    return nombre;
  },
  GetToken: () => {
    const tk = localStorage.getItem("miToken");
    const { token,SetToken } = get();
    if(tk != undefined)
    {
      SetToken(tk) 
      return tk
    }

    return token;
  },
  GetPermiso: (paramPermiso) => {
    const { rol } = get(); 
    
    if(rol.permisos !== undefined)
    {
       const p = rol.permisos.filter((d) => d.nombre_permiso == paramPermiso)
       if(p.length == 1)
        {
          console.log(p[0].activo)
          return p[0].activo
        }
    }
    return false
  
  },
  Total: () => {
    const { items } = get();
    if (items.length)
      return items
        .map((item) => item.precio * item.cantidad)
        .reduce((total, importe) => total + importe);
    return items.length;
  },
}));
