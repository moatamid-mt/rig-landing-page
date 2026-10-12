"use client";


import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full  bg-[#181818] text-white pt-12 pb-8">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col items-center">
        
        {/* Top Banner Card: Join our Community */}
        <div className="w-full bg-[#222222] border border-neutral-800 rounded-2xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-6 z-10 max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Join our Community
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-neutral-900 font-medium px-4 py-2.5 rounded-xl hover:bg-neutral-200 transition-colors text-sm"
              >
                <span>Join our Slack</span>
                <span className="text-xs">💬</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white hover:text-neutral-300 font-normal px-3 py-2 text-sm transition-colors"
              >
                <span>Star us on Github</span>
              </a>
            </div>
          </div>

          {/* Right Image / Graphic */}
          <div className="relative w-48 h-36 sm:w-64 sm:h-44 md:w-80 md:h-52 flex-shrink-0">
            <Image
              src="/Footer/community-graphic.png" // استبدل المسار بصورتك من Figma
              alt="Community Computer Graphic"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Middle Section: Logo & Newsletter */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          
          {/* Left Side: Logo Only */}
          <div className="flex items-center gap-2 text-xl font-medium tracking-tight">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black font-bold text-xs">
              ❖
            </div>
            <span>Rig.dev</span>
          </div>

          {/* Right Side: Newsletter Form Card */}
          <div className="w-full lg:max-w-[580px] bg-[#222222] border border-neutral-800 rounded-2xl p-5 space-y-4">
            <p className="text-xs sm:text-sm text-neutral-400">
              Sign up for our newsletter and join the growing Rig.dev community.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="First name"
                className="w-full sm:w-1/2 bg-[#1a1a1a] border border-neutral-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-1/2 bg-[#1a1a1a] border border-neutral-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
              />
              <button
                type="submit"
                className="bg-white hover:bg-neutral-200 text-neutral-900 font-medium px-5 py-2 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Line & Copyright */}
        <div className="w-full pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© 2026 Rig Dev ApS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}