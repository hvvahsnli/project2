"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Spinner from "@/app/components/Spinner";
import { useCart, Book } from "@/app/components/categories/CartContext";

const categories = [
    "fiction",
    "philosophy",
    "programming",
    "history",
    "psychology",
    "children",
];

export default function CategoriesPage() {
    const [booksByCategory, setBooksByCategory] = useState<Record<string, Book[]>>({});
    const [isLoading, setIsLoading] = useState(true);

    const { cart, addToCart } = useCart();

    const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const isInCart = (bookKey: string) => cart.some((item) => item.key === bookKey);

    useEffect(() => {
        const fetchAllCategories = async () => {
            setIsLoading(true);
            const newBooksByCategory: Record<string, Book[]> = {};

            for (const category of categories) {
                const res = await fetch(`https://openlibrary.org/search.json?q=${category}&limit=12`);
                const data = await res.json();
                newBooksByCategory[category] = data.docs;
            }

            setBooksByCategory(newBooksByCategory);
            setIsLoading(false);

            const hash = window.location.hash.replace("#", "");
            if (hash && categoryRefs.current[hash]) {
                categoryRefs.current[hash]?.scrollIntoView({ behavior: "smooth" });
            }
        };

        fetchAllCategories();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-purple-600 mb-10 text-center">Book Categories</h1>

            {isLoading ? (
                <Spinner />
            ) : (
                categories.map((category) => (
                    <div
                        key={category}
                        ref={(el) => {
                            categoryRefs.current[category] = el;
                        }}
                        className="mb-12"
                    >
                        <h2
                            className="text-2xl font-semibold mb-4 capitalize text-purple-500"
                            id={category}
                        >
                            {category}
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {(booksByCategory[category] || []).map((book) => {
                                const bookPrice = 9.99;

                                return (
                                    <div
                                        key={book.key}
                                        className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col"
                                    >
                                        {book.cover_i ? (
                                            <Image
                                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                                alt={book.title}
                                                width={120}
                                                height={160}
                                                className="rounded mb-4 object-cover mx-auto"
                                            />
                                        ) : (
                                            <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 mb-4 rounded">
                                                No Image
                                            </div>
                                        )}

                                        <h3 className="text-lg font-bold mb-1">{book.title}</h3>
                                        <p className="text-sm text-gray-600 mb-1">
                                            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                                        </p>
                                        <p className="text-green-600 font-semibold mb-3">${bookPrice.toFixed(2)}</p>

                                        <button
                                            onClick={() =>
                                                addToCart({
                                                    ...book,
                                                    price: bookPrice,
                                                    quantity: 1,
                                                })
                                            }
                                            className="mt-auto px-4 py-2 rounded-md text-white transition bg-purple-500 hover:bg-purple-600"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
