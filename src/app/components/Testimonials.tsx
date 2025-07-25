"use client";

import React from "react";

interface Testimonial {
    id: number;
    name: string;
    text: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Linda R.",
        text: "This salon is amazing! The staff is so friendly and professional. I always leave feeling fabulous.",
        image: "/testimonials/person-1.jpg",
    },
    {
        id: 2,
        name: "Sarah M.",
        text: "Their attention to detail is unmatched. I wouldn’t trust anyone else with my skincare!",
        image: "/testimonials/person-2.jpg",
    },
    {
        id: 3,
        name: "James T.",
        text: "I had a wonderful experience. The environment is clean and relaxing. Highly recommend!",
        image: "/testimonials/person-4.jpg",
    },
    {
        id: 4,
        name: "Daniel K.",
        text: "I had a wonderful experience. The environment is clean and relaxing. Highly recommend!",
        image: "/testimonials/person-3.jpg",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
        >
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
                    What Our Clients Say
                </h2>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                    {testimonials.map(({ id, name, text, image }) => (
                        <div
                            key={id}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-black/40 hover:shadow-xl dark:hover:shadow-purple-600/50 transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={image}
                                    alt={name}
                                    loading="lazy"
                                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 dark:border-purple-700"
                                />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {name}
                                </h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                “{text}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
