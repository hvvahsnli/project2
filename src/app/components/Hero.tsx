"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            <Image
                src="/hero-img.jpg"
                alt="Books on a shelf"
                fill
                quality={100}
                placeholder="empty"
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 px-6 sm:px-8 md:px-12 text-center">
                <h1 className="text-white font-extrabold mb-4 max-w-3xl
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Discover Your Next Favorite Book
                </h1>
                <p className="text-white max-w-2xl mb-8
                      text-base sm:text-lg md:text-xl leading-relaxed">
                    Explore a wide collection of books from various genres and authors.
                </p>
                <Link href="/categories">
                    <button className="bg-purple-600 text-white px-10 py-3 rounded-md 
                           hover:bg-purple-700 transition text-lg sm:text-xl font-semibold">
                        Browse Books
                    </button>
                </Link>
            </div>
        </section>
    );
}
