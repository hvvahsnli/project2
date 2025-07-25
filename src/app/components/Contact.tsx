"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            emailjs
                .send(
                    "service_49t8lme",
                    "template_yuc2pns",
                    {
                        from_name: values.name,
                        from_email: values.email,
                        message: values.message,
                    },
                    "nienW7aC5edTo-ARG"
                )
                .then(() => {
                    toast.success("Message sent successfully!");
                    resetForm();
                })
                .catch(() => {
                    toast.error("Failed to send message. Try again later.");
                });
        },
    });

    return (
        <section
            className="py-17 bg-purple-50 dark:bg-gray-900 transition-colors duration-500"
            id="contact"
        >
            <Toaster position="top-right" reverseOrder={false} />
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-200 mb-10 text-center">
                    Contact Us
                </h2>

                <form
                    onSubmit={formik.handleSubmit}
                    className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-black/40"
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-purple-900 dark:text-purple-300 font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500
                ${formik.touched.name && formik.errors.name
                                    ? "border-red-500 dark:border-red-400"
                                    : "border-purple-300 dark:border-purple-600"
                                }
                bg-white dark:bg-gray-700 text-purple-900 dark:text-purple-100`}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                                {formik.errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-purple-900 dark:text-purple-300 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500
                ${formik.touched.email && formik.errors.email
                                    ? "border-red-500 dark:border-red-400"
                                    : "border-purple-300 dark:border-purple-600"
                                }
                bg-white dark:bg-gray-700 text-purple-900 dark:text-purple-100`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-purple-900 dark:text-purple-300 font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500 resize-none
                ${formik.touched.message && formik.errors.message
                                    ? "border-red-500 dark:border-red-400"
                                    : "border-purple-300 dark:border-purple-600"
                                }
                bg-white dark:bg-gray-700 text-purple-900 dark:text-purple-100`}
                        />
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                                {formik.errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition duration-300"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
