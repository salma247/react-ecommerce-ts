/// <reference types="react-scripts" />

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    categories: string[];
    rating: number;
    sizes: number[];
}

interface CartItem {
    cartId: string;
    quantity: number;
    size: number;
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    categories: string[];
    rating: number;
    sizes: number[];
}
interface CartState {
    cartItems: CartItem[];
    getCartItems: () => CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    changeQuantity: (id: string, quantity: number) => void;
}
