import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-purple-200 py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">About</h3>
                    <p className="text-purple-400">
                        Discover a world of books and endless stories. Connect with us to explore your next great read!
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">Quick Links</h3>
                    <ul className="space-y-2 text-purple-400">
                        <li>
                            <Link href="/" className="hover:text-purple-100 transition-colors duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories" className="hover:text-purple-100 transition-colors duration-300">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about" className="hover:text-purple-100 transition-colors duration-300">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="hover:text-purple-100 transition-colors duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">Follow Me</h3>
                    <div className="flex space-x-4 text-2xl text-purple-400">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-100 transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-100 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-100 transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-100 transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-purple-400 text-sm">
                © {new Date().getFullYear()} Hevva Heseneliyeva. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
