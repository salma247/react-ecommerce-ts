import { create } from 'zustand';

type CartItems = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    size: number;
    images: string[];
};

type CartState = {
    cartItems: CartItems[];
    getCartItems: () => CartItems[];
    addToCart: (item: CartItems) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};

//localStorage
const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart')!);
    } else {
        return [];
    }
}

export const useCartStore = create<CartState>((set, get) => ({
    cartItems: getLocalStorage(),
    getCartItems: () => get().cartItems,
    addToCart: (item) => {
        set((state) => {
            const cartItems = [...state.cartItems, item];
            localStorage.setItem('cart', JSON.stringify(cartItems));
            return { cartItems };
        });
    },
    removeFromCart: (id) => {
        set((state) => {
            const cartItems = state.cartItems.filter((item) => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            return { cartItems };
        });
    },
    clearCart: () => {
        set((state) => {
            localStorage.removeItem('cart');
            return { cartItems: [] };
        });
    }
}));