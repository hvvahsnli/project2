"use client";

import { useState } from "react";
import { FiSearch, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import CartSidebar from "@/app/components/categories/CartSidebar";
import { useCart } from "@/app/components/categories/CartContext";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { cart } = useCart();

    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    return (
        <header className="font-semibold bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image src="/logo.png" alt="KitabSat loqosu" width={50} height={50} priority />
                    </Link>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-purple-400">Home</Link>
                    <Link href="/categories" className="text-gray-700 hover:text-purple-400">Categories</Link>
                    <Link href="/#about" className="text-gray-700 hover:text-purple-400">About us</Link>
                    <Link href="/#contact" className="text-gray-700 hover:text-purple-400">Contact</Link>
                </nav>

                <div className="flex items-center space-x-4">

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative text-gray-700 hover:text-purple-600"
                        aria-label="Cart"
                    >
                        <FiShoppingCart size={20} />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-700 hover:text-purple-600"
                        aria-label="Menyu"
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
                    <Link href="/" className="block text-purple-400">Home</Link>
                    <Link href="/categories" className="block text-gray-700 hover:text-purple-400">Categories</Link>
                    <Link href="/#about" className="block text-gray-700 hover:text-purple-400">About us</Link>
                    <Link href="/#contact" className="block text-gray-700 hover:text-purple-400">Contact</Link>
                </nav>
            )}

            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    );
}
