"use client";

import Image from "next/image";
import { useCart } from "@/app/components/categories/CartContext";

const featuredBooks = [
    {
        key: "hp1",
        title: "Harry Potter",
        author_name: ["J.K. Rowling"],
        price: 49.99,
        image: "/featured/harrypotter.jpg",
        description: "A young wizard’s magical adventure and fight against evil."
    },
    {
        key: "1984",
        title: "1984",
        author_name: ["George Orwell"],
        price: 14.99,
        image: "/featured/1984.jpg",
        description: "A dystopian novel that explores the dangers of totalitarianism.",
    },
    {
        key: "crime1",
        title: "Crime and Punishment",
        author_name: ["Fyodor Dostoevsky"],
        price: 18.99,
        image: "/featured/crimepunish.jpg",
        description: "A psychological drama about guilt and redemption after a murder.",
    },
    {
        key: "pride1",
        title: "Pride and Prejudice",
        author_name: ["Jane Austen"],
        price: 39.99,
        image: "/featured/pridepreju.jpg",
        description: "A classic romance exploring love and social class.",
    },
];

export default function FeaturedBooks() {
    const { addToCart } = useCart();

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    Featured Books
                </h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredBooks.map((book) => (
                        <div
                            key={book.key}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
                        >
                            <div className="relative w-full h-[260px] pt-4">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    width={155}
                                    height={100}
                                    className="object-cover mx-auto"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {book.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1 italic">
                                    by {book.author_name.join(", ")}
                                </p>
                                <p className="text-sm text-gray-700 mt-3 flex-grow">
                                    {book.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-purple-600">
                                        ${book.price.toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => addToCart(book)}
                                        className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition text-sm"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
