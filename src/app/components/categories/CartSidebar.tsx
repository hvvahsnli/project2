"use client";
import { useCart } from "./CartContext";
import Image from "next/image";

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const totalPrice = cart.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
        0
    );

    return (
        <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-between items-center p-4 border-b-2 border-b-purple-600">
                <h2 className="text-lg font-bold">Cart</h2>
                <button onClick={onClose} className="text-2xl">&times;</button>
            </div>
            <div className="p-4 space-y-4">
                {cart.length === 0 ? (
                    <p className="text-gray-500">No items in your cart</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div key={item.key} className="flex items-center space-x-4">
                                {item.cover_i ? (
                                    <Image
                                        src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}
                                        alt={item.title}
                                        width={50}
                                        height={70}
                                        className="rounded"
                                    />
                                ) : (
                                    <div className="w-[50px] h-[70px] bg-gray-200" />
                                )}
                                <div className="flex-1">
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="text-sm text-gray-500">
                                        {(item.author_name || []).join(", ") || "Unknown"}
                                    </p>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <button onClick={() => decreaseQuantity(item.key)} className="px-2 border">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.key)} className="px-2 border">+</button>
                                    </div>
                                    <p className="text-sm mt-1">{(item.price || 0).toFixed(2)} $</p>
                                </div>
                                <button onClick={() => removeFromCart(item.key)} className="text-red-500 text-sm">
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="border-t pt-2 font-bold">Total: {totalPrice.toFixed(2)} $</div>
                    </>
                )}
            </div>
        </div>
    );
}
