import { createContext, ReactNode, useState } from "react";

export interface IProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    numberPrice: number;
    description: string;
    defaultPriceId: string;   
}

interface CartContextData {
    cartItems: IProduct[];
    cartQuantity: number;
    cartItemsTotal: number;
    addToCart: (product: IProduct) => void;
    checkItemExistsInCart: (productId: string) => boolean;
    removeCartItem: (productId: string) => void;
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }:CartContextProviderProps) {
    const [ cartItems, setCartItems ] = useState<IProduct[]>([]);

    const cartItemsTotal = cartItems.reduce((total, product) => {
        return total + product.numberPrice
    }, 0);

    const cartQuantity = cartItems.length;

    function addToCart(product: IProduct) {
        setCartItems(state => [...state, product])
    }

    function checkItemExistsInCart(productId: string) {
        return cartItems.some((product) => product.id === productId);
    }

    function removeCartItem(productId: string) {
        setCartItems((state) => state.filter((product) => product.id !== productId))
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, checkItemExistsInCart, removeCartItem, cartQuantity, cartItemsTotal }}>
            {children}
        </CartContext.Provider>
    )
}