import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="https://www.thesquirrel.tech/" className="flex items-center gap-3 mb-5">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="The Squirrel Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-black text-[#1a1f2c] uppercase tracking-tight">
                The Squirrel
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#767e89] leading-relaxed mb-6 max-w-sm">
              Transforming innovative ideas into high-performance digital solutions. We specialize in building fast, scalable, and market-ready applications in 15 days.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/thesquirrel.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#767e89] hover:border-[#a74911] hover:text-[#a74911] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <path d="M16 11.37a4 4 0 1 1-7.74 1.6 4 4 0 0 1 7.74-1.6Z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/thesquirrel_org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#767e89] hover:border-[#a74911] hover:text-[#a74911] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.4l-5-6.5L6.2 22H2.9l7.3-8.4L1 2h6.6l4.5 5.9L18.9 2Zm-1.1 18h1.8L6.7 3.9H4.8L17.8 20Z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/the-squirrel-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#767e89] hover:border-[#a74911] hover:text-[#a74911] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.45 20.45H17V14.9c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9.6V9h3.3v1.56h.05c.46-.87 1.6-1.79 3.28-1.79 3.5 0 4.14 2.3 4.14 5.29v6.39ZM5.34 7.43a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7.06 20.45H3.62V9h3.44v11.45Z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com/@ganeshghatti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#767e89] hover:border-[#a74911] hover:text-[#a74911] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.2 31.2 0 0 0 2 12s.1 3.5.4 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1c.3-1.3.4-4.8.4-4.8s-.1-3.5-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-black text-[#1a1f2c] uppercase tracking-wider mb-2">
              QUICK LINKS
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-xs font-medium text-[#767e89]">
              <a href="https://www.thesquirrel.tech/" className="hover:text-[#a74911] transition-colors">Home</a>
              <a href="https://www.thesquirrel.tech/#services" className="hover:text-[#a74911] transition-colors">Services</a>
              <a href="https://www.thesquirrel.tech/solutions" className="hover:text-[#a74911] transition-colors">Solutions</a>
              <a href="https://www.thesquirrel.tech/applications" className="hover:text-[#a74911] transition-colors">Applications</a>
              <a href="https://www.thesquirrel.tech/#pricing" className="hover:text-[#a74911] transition-colors">Pricing</a>
              <a href="https://www.thesquirrel.tech/blogs" className="hover:text-[#a74911] transition-colors">Blogs</a>
              <a href="https://calendly.com/ganeshghatti/discovery-call" className="hover:text-[#a74911] transition-colors">Book Call</a>
              <a href="https://www.thesquirrel.tech/#contact" className="hover:text-[#a74911] transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-black text-[#1a1f2c] uppercase tracking-wider mb-2">
              CONTACT US
            </h4>
            <div className="text-xs font-medium text-[#767e89] space-y-2">
              <p>
                Email:{" "}
                <a href="mailto:ganesh@thesquirrel.tech" className="hover:text-[#a74911] transition-colors font-bold text-[#1a1f2c]">
                  ganesh@thesquirrel.tech
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919449610077" className="hover:text-[#a74911] transition-colors font-bold text-[#1a1f2c]">
                  +91 94496 10077
                </a>
              </p>
              <p className="pt-2 text-gray-500 text-[11px]">
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 border-t border-dashed border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#767e89]">
          <p>© 2026 The Squirrel Technologies. All rights reserved. Made with ❤️ in Bengaluru.</p>
          <div className="flex gap-6">
            <a href="https://www.thesquirrel.tech/privacy" className="hover:text-[#1a1f2c] transition-colors">
              Privacy Policy
            </a>
            <a href="https://www.thesquirrel.tech/terms" className="hover:text-[#1a1f2c] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
