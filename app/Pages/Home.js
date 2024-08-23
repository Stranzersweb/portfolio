import React from "react";
import Image from "next/image";

const MHome = () => {
  return (
    <div className="relative mx-auto my-10 bg-white min-h-screen max-w-7xl rounded-xl text-black p-10 shadow-lg overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-center p-6 mb-10">
          <div className="logo rounded-2xl mb-4 md:mb-0">
            <Image src="/logos/logo.png" alt="Logo" width={100} height={100} className="rounded-full" />
          </div>
          <h1 className="text-black font-bold text-3xl">StranzersWeb AI</h1>
        </header>

        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-6 text-lg">
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#products" className="hover:text-blue-600 transition-colors">Products</a></li>
            <li><a href="#mission" className="hover:text-blue-600 transition-colors">Mission</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>

        <main>
          <section id="about" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
              StranzersWeb AI is at the forefront of artificial intelligence innovation, 
              developing cutting-edge solutions for complex problems.
            </p>
          </section>

          <section id="products" className="mb-10">
  <h2 className="text-2xl font-bold mb-4">Products</h2>
  <div className="relative">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 blur-sm">
      {/* Placeholder product cards */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="font-semibold">Product {i}</h3>
          <p>Description of Product {i}</p>
        </div>
      ))}
    </div>
    {/* Coming Soon overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
      <span className="text-white text-3xl font-bold">Coming Soon</span>
    </div>
  </div>
</section>

          <section id="mission" className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to leverage AI technology to create positive change 
              and drive innovation across various industries.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MHome;