'use client'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1115]">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="text-purple-500 font-bold text-2xl">YOURSTORE</div>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link>
          <Link href="/games" className="text-gray-300 hover:text-white">Products</Link>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Discord
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center pt-20 px-4">
        <h1 className="text-6xl font-bold text-white mb-6">
          Your Store Name
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          Premium Digital Products • Instant Delivery • 24/7 Support
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
            Browse Products
          </button>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition">
            Join Discord
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-20">
        <div className="bg-[#1a1b1f] p-6 rounded-lg">
          <h3 className="text-white text-xl font-bold mb-2">Reliable & Secure</h3>
          <p className="text-gray-400">
            Built with security in mind for a safe and smooth experience.
          </p>
        </div>
        <div className="bg-[#1a1b1f] p-6 rounded-lg">
          <h3 className="text-white text-xl font-bold mb-2">Instant Delivery</h3>
          <p className="text-gray-400">
            Get your digital products immediately after purchase.
          </p>
        </div>
        <div className="bg-[#1a1b1f] p-6 rounded-lg">
          <h3 className="text-white text-xl font-bold mb-2">24/7 Support</h3>
          <p className="text-gray-400">
            Our team is always available to help with any questions.
          </p>
        </div>
      </div>
    </main>
  )
} 
