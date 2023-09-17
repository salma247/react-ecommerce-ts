import { create } from 'zustand';


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
    removeFromCart: (cartId) => {
        set((state) => {
            const cartItems = state.cartItems.filter((item) => item.cartId !== cartId);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            return { cartItems };
        });
    },
    clearCart: () => {
        set((state) => {
            localStorage.removeItem('cart');
            return { cartItems: [] };
        });
    },
    changeQuantity: (cartId, value) => {
        set((state) => {
            const cartItems = state.cartItems.map((item) => {
                if (item.cartId === cartId) {
                    return { ...item, quantity: item.quantity + value };
                } else {
                    return item;
                }
            });
            localStorage.setItem('cart', JSON.stringify(cartItems));
            return { cartItems };
        });
    }
}));