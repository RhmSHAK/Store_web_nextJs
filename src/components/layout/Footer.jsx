"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-blue-300 to-blue-400 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <h2 className="text-xl font-bold">MyStore</h2>
            </div>
            <p className="text-white/80 text-sm">
              Your trusted online store for quality products. We deliver the best experience with modern web technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-200">🌐</a>
              <a href="#" className="hover:text-blue-200">🐦</a>
              <a href="#" className="hover:text-blue-200">📘</a>
              <a href="#" className="hover:text-blue-200">📸</a>
            </div>

            <p className="mt-4 text-white/80 text-sm">
              Email: support@mystore.com
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-8 pt-4 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;