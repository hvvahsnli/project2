"use client";

export default function AboutUs() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500" id="about">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
                    About Us
                </h2>
                <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
                    At BookVerse, we’re passionate about connecting readers with the perfect books.
                    Our mission is to provide a seamless and enjoyable experience for every book lover,
                    offering a carefully curated collection from classics to modern bestsellers.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                    {[
                        {
                            name: "Alice Johnson",
                            role: "Founder & CEO",
                            image: "/about/alice.jpg",
                        },
                        {
                            name: "Michael Smith",
                            role: "Head of Content",
                            image: "/about/michael.jpg",
                        },
                        {
                            name: "Emily Davis",
                            role: "UX Designer",
                            image: "/about/emily.jpg",
                        },
                        {
                            name: "James Brown",
                            role: "Customer Support",
                            image: "/about/james.jpg",
                        },

                    ].map(({ name, role, image }) => (
                        <div key={name} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                            <img
                                src={image}
                                alt={name}
                                loading="lazy"
                                className="mx-auto w-24 h-24 rounded-full object-cover border-4 border-purple-600 dark:border-purple-500 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {name}
                            </h3>
                            <p className="text-purple-600 dark:text-purple-400 text-sm">{role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
