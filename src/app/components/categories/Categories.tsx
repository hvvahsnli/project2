"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
    {
        title: "Fiction",
        image: "/categories/fiction.jpg",
        description: "Immerse yourself in imaginative stories and narratives.",
    },
    {
        title: "Philosophy",
        image: "/categories/philosophy.jpg",
        description: "Explore great minds and ideas that shaped history.",
    },
    {
        title: "Programming",
        image: "/categories/programming.jpg",
        description: "Learn the languages and logic behind modern technology.",
    },
    {
        title: "History",
        image: "/categories/history.jpg",
        description: "Explore key events and civilizations that shaped our world.",
    },
    {
        title: "Psychology",
        image: "/categories/psychology.jpg",
        description: "Understand human mind, behavior, and emotions.",
    },
    {
        title: "Children",
        image: "/categories/children.jpg",
        description: "Fun and educational books for young readers.",
    },
];

export default function Categories() {
    const router = useRouter();

    const handleCategoryClick = (category: string) => {
        // Bu hissədə hash ilə yönləndiririk
        router.push(`/categories#${category.toLowerCase()}`);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Book Categories</h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                            <div className="relative h-[300px] w-full">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-600 mt-1 text-center">
                                    {category.description}
                                </p>
                                <button
                                    onClick={() => handleCategoryClick(category.title)}
                                    className="lg:w-[120px] w-full mt-2 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
                                >
                                    {category.title}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
