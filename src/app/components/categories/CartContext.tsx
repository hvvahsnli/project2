"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Book {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
    price?: number;
    quantity?: number;
}

interface CartContextType {
    cart: Book[];
    addToCart: (book: Book) => void;
    removeFromCart: (key: string) => void;
    increaseQuantity: (key: string) => void;
    decreaseQuantity: (key: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Book[]>([]);

    const addToCart = (book: Book) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.key === book.key);
            if (exists) {
                return prev.map((item) =>
                    item.key === book.key ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            }
            return [...prev, { ...book, quantity: 1, price: book.price || 9.99 }];
        });
    };

    const removeFromCart = (key: string) => {
        setCart((prev) => prev.filter((item) => item.key !== key));
    };

    const increaseQuantity = (key: string) => {
        setCart((prev) =>
            prev.map((item) =>
                item.key === key ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            )
        );
    };

    const decreaseQuantity = (key: string) => {
        setCart((prev) =>
            prev.map((item) =>
                item.key === key && (item.quantity || 1) > 1
                    ? { ...item, quantity: (item.quantity || 1) - 1 }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};
