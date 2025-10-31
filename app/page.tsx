"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const RustCrab = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="cursor-pointer font-bold"
        style={{ color: "#D34516" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        rust
      </span>
      {isHovered && (
        <div className="fixed left-0 bottom-0 pointer-events-none z-50">
          <div className="animate-crab-walk">
            <svg
              width="64"
              height="64"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pixel art crab */}
              <rect x="3" y="6" width="1" height="1" fill="#D34516" />
              <rect x="4" y="6" width="1" height="1" fill="#D34516" />
              <rect x="5" y="6" width="1" height="1" fill="#D34516" />
              <rect x="6" y="6" width="1" height="1" fill="#D34516" />
              <rect x="7" y="6" width="1" height="1" fill="#D34516" />
              <rect x="8" y="6" width="1" height="1" fill="#D34516" />
              <rect x="9" y="6" width="1" height="1" fill="#D34516" />
              <rect x="10" y="6" width="1" height="1" fill="#D34516" />
              <rect x="11" y="6" width="1" height="1" fill="#D34516" />
              <rect x="12" y="6" width="1" height="1" fill="#D34516" />

              <rect x="2" y="7" width="1" height="1" fill="#D34516" />
              <rect x="3" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="4" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="5" y="7" width="1" height="1" fill="#000000" />
              <rect x="6" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="7" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="8" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="9" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="10" y="7" width="1" height="1" fill="#000000" />
              <rect x="11" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="12" y="7" width="1" height="1" fill="#FF6347" />
              <rect x="13" y="7" width="1" height="1" fill="#D34516" />

              <rect x="1" y="8" width="1" height="1" fill="#D34516" />
              <rect x="2" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="3" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="4" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="5" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="6" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="7" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="8" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="9" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="10" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="11" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="12" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="13" y="8" width="1" height="1" fill="#FF6347" />
              <rect x="14" y="8" width="1" height="1" fill="#D34516" />

              <rect x="0" y="9" width="1" height="1" fill="#D34516" />
              <rect x="1" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="2" y="9" width="1" height="1" fill="#FFB6C1" />
              <rect x="3" y="9" width="1" height="1" fill="#FFB6C1" />
              <rect x="4" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="5" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="6" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="7" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="8" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="9" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="10" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="11" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="12" y="9" width="1" height="1" fill="#FFB6C1" />
              <rect x="13" y="9" width="1" height="1" fill="#FFB6C1" />
              <rect x="14" y="9" width="1" height="1" fill="#FF6347" />
              <rect x="15" y="9" width="1" height="1" fill="#D34516" />

              <rect x="1" y="10" width="1" height="1" fill="#D34516" />
              <rect x="2" y="10" width="1" height="1" fill="#D34516" />
              <rect x="3" y="10" width="1" height="1" fill="#D34516" />
              <rect x="4" y="10" width="1" height="1" fill="#D34516" />
              <rect x="11" y="10" width="1" height="1" fill="#D34516" />
              <rect x="12" y="10" width="1" height="1" fill="#D34516" />
              <rect x="13" y="10" width="1" height="1" fill="#D34516" />
              <rect x="14" y="10" width="1" height="1" fill="#D34516" />
            </svg>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes crab-walk {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }
        .animate-crab-walk {
          animation: crab-walk 3s linear infinite;
        }
      `}</style>
    </span>
  );
};

export default function CV() {
  return (
    <div className="relative overflow-y-auto min-h-screen px-4">
      <div className="max-w-3xl mx-auto pt-6 pb-6 sm:pb-8 mb-16">
        <main className="mx-auto max-w-3xl">
          {/* Header Section */}
          <div className="flex gap-8 justify-between items-start">
            <div className="flex-1">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="text-blue-600">Johann Hipp</span>
              </h1>
              <div className="flex items-center gap-4 mt-3">
                <Link
                  href="mailto:me@jhipp.dev"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  aria-label="Email"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
                <Link
                  href="/cv/cv_jhipp.pdf"
                  className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-semibold"
                >
                  CV
                </Link>
                <Link
                  href="https://x.com/jhipp_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/t3nsed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/johannhipp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#0A66C2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 relative group">
              <Image
                src="/images/photo.jpg"
                alt="Johann Hipp"
                width={192}
                height={192}
                className="w-48 h-48 rounded-xl object-cover"
              />
              <div className="hidden md:flex absolute left-full top-1/2 -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="text-gray-700"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  <path
                    d="M27 16 Q23 16.3 19 15.8 T11 16.2 Q7 15.5 4 16 M4 16 Q5.5 13.5 7 12 M4 16 Q6 18.2 7.5 19.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-gray-700 font-medium whitespace-nowrap">
                  high tatra, PL/SK
                </span>
              </div>
            </div>
          </div>

          {/* Current Section */}
          <section className="mt-16">
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
              Current
            </h2>
            <div className="flex flex-col gap-8">
              <a
                className="block p-4 -m-4 relative group"
                href="https://acta.so"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="rounded-md flex-shrink-0 h-12 w-12 flex items-center justify-center p-2">
                      <Image
                        src="/images/logos/acta.svg"
                        alt="Acta"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Acta
                      </p>
                    </div>
                    <div className="flex flex-col items-end min-w-[16ch]">
                      <span className="uppercase text-xs p-0.5 px-1.5 font-bold rounded-full ml-2 text-blue-800 bg-blue-100">
                        Founding Engineer
                      </span>
                      <span className="text-base text-gray-500">
                        November 2025 - Ongoing
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-gray-500">
                    can't tell you too much yet
                  </p>
                </div>
              </a>
            </div>
          </section>

          {/* Career Section */}
          <section className="mt-16">
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
              Previously...
            </h2>
            <div className="flex flex-col gap-8">
              {/* Amplify */}
              <a
                className="block p-4 -m-4 relative group"
                href="https://amplify.tw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="rounded-md flex-shrink-0 h-12 w-12 flex items-center justify-center p-2">
                      <Image
                        src="/images/logos/amplify.svg"
                        alt="Amplify"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Amplify
                      </p>
                    </div>
                    <div className="flex flex-col items-end min-w-[16ch]">
                      <span className="uppercase text-xs p-0.5 px-1.5 font-bold rounded-full ml-2 text-blue-800 bg-blue-100">
                        Co-Founder
                      </span>
                      <span className="text-base text-gray-500">
                        Jan 2025 - Oct 2025
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 text-base text-gray-500 list-disc list-inside space-y-2">
                    <li>
                      Quant trading statistical analysis toolchain with a heavy
                      focus on portfolio optimization
                    </li>
                    <li>
                      Applies OCR on CSV, Excel files containing portfolios,
                      uses their context to run applicable analysis to give
                      feedback on portfolio composition
                    </li>
                    <li>
                      Includes market noise filtering using random matrix theory
                      and efficient frontier analysis to maximize returns
                      against risk
                    </li>
                  </ul>
                </div>
              </a>

              {/* Deloitte */}
              <a
                className="block p-4 -m-4 relative group"
                href="https://www.deloitte.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="rounded-md flex-shrink-0 h-12 w-12 flex items-center justify-center p-2">
                      <Image
                        src="/images/logos/deloitte.png"
                        alt="Deloitte"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Deloitte
                      </p>
                    </div>
                    <div className="flex flex-col items-end min-w-[16ch]">
                      <span className="uppercase text-xs p-0.5 px-1.5 font-bold rounded-full ml-2 text-blue-800 bg-blue-100">
                        Developer
                      </span>
                      <span className="text-base text-gray-500">
                        Oct 2024 - Apr 2025
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 text-base text-gray-500 list-disc list-inside space-y-2">
                    <li>
                      Delivery platform development for an automotive client in
                      Golang using AWS Lambda
                    </li>
                    <li>Frontend development with NextJS and Tailwind</li>
                    <li>IaaS deployment using AWS TypeScript SDK</li>
                  </ul>
                </div>
              </a>

              {/* Nowtilus - Combined */}
              <a
                className="block p-4 -m-4 relative group"
                href="https://www.equativ.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  {/* Company Header */}
                  <div className="flex gap-4 items-center">
                    <div className="rounded-md flex-shrink-0 h-12 w-12 flex items-center justify-center p-2">
                      <Image
                        src="/images/logos/equativ.svg"
                        alt="Equativ"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Nowtilus (Sold to Equativ)
                      </p>
                    </div>
                    <div className="flex flex-col items-end min-w-[16ch]">
                      <span className="uppercase text-xs p-0.5 px-1.5 font-bold rounded-full ml-2 text-blue-800 bg-blue-100">
                        Developer
                      </span>
                      <span className="text-base text-gray-500">
                        Sep 2022 - Jun 2024
                      </span>
                    </div>
                  </div>

                  {/* Software Developer Role */}
                  <div className="mt-6 ml-16 relative">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-gray-900 font-bold">
                          Software Developer
                        </p>
                        <p className="text-gray-500 text-sm">
                          Jun 2023 - Jun 2024
                        </p>
                      </div>
                    </div>
                    <ul className="text-base text-gray-500 list-disc list-inside space-y-2">
                      <li>
                        Development and deployment of two components for a full
                        rewrite of the previous server-side ad-insertion SaaS
                        solution in Golang with protobuf, gRPC
                      </li>
                      <li>
                        Development focus on CMAF, DASH and HLS feature
                        enhancement for large customers
                      </li>
                      <li>
                        Optimization of caching algorithms to better support
                        high demand scenarios (redis, in-memory)
                      </li>
                    </ul>
                  </div>

                  {/* Divider Line */}
                  <div className="ml-16 my-6 border-t border-gray-200"></div>

                  {/* Software Developer Intern Role */}
                  <div className="ml-16 relative">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-gray-900 font-bold">
                          Software Developer (Intern)
                        </p>
                        <p className="text-gray-500 text-sm">
                          Sep 2022 - Jan 2023
                        </p>
                      </div>
                    </div>
                    <ul className="text-base text-gray-500 list-disc list-inside space-y-2">
                      <li>
                        Participation in development of a server-side
                        ad-insertion SaaS in Node.js and Golang
                      </li>
                      <li>Various changes to JSON parsing, validation</li>
                      <li>
                        Performance testing of time-critical services and
                        partial rewrites to ensure low-latency
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mt-16">
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
              Open Source
            </h2>
            <div className="flex flex-col gap-8">
              {/* MicroAuth */}
              <a
                className="block p-4 -m-4 relative group"
                href="https://github.com/t3nsed/microauth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        MicroAuth
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          Rust
                        </span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          BoringSSL
                        </span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          OAuth2
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 text-base text-gray-500 list-disc list-inside space-y-2">
                    <li>
                      Low-level in-memory authentication server providing OAuth2
                      authentication with an ORM-like API
                    </li>
                    <li>
                      Built on top of the ring crate with BoringSSL bindings for
                      secure and efficient authentication flows
                    </li>
                  </ul>
                </div>
              </a>

              {/* Argus */}
              <a
                className="block p-4 -m-4 relative group"
                href="https://github.com/t3nsed/argus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Argus
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          TypeScript
                        </span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          Electron
                        </span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          OpenAI
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 text-base text-gray-500 list-disc list-inside space-y-2">
                    <li>
                      Real-time AI assistant for procurement and sales in
                      manufacturing
                    </li>
                    <li>
                      Provides live transcription and intelligent insights
                      during phone calls by accessing knowledge bases
                    </li>
                    <li>
                      Reduces sales cycles from 1-2 days to 5-minute informed
                      calls
                    </li>
                  </ul>
                </div>
              </a>

              {/* Bounded Multi-Source Shortest Paths */}
              <a
                className="block p-4 -m-4 relative group"
                href="https://github.com/t3nsed/bmssp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Bounded Multi-Source Shortest Paths Implementation
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          Rust
                        </span>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full text-blue-800 bg-blue-100 border border-blue-200">
                          Algorithms
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 text-base text-gray-500 list-disc list-inside space-y-2">
                    <li>
                      Achieves{" "}
                      <span className="font-mono text-gray-900">
                        O(mlog<sup>2/3</sup>n)
                      </span>{" "}
                      time complexity using advanced graph algorithms
                    </li>
                    <li>
                      Performance comparable to Dijkstra's SSSP with room for
                      optimization
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </section>

          {/* Education Section */}
          <section className="mt-16">
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
              Education
            </h2>
            <div className="flex flex-col gap-8">
              {/* Martin-Luther-Universität Halle */}
              <div className="block p-4 -m-4 relative group">
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="rounded-md flex-shrink-0 h-12 w-12 flex items-center justify-center p-2">
                      <Image
                        src="/images/logos/mlu.png"
                        alt="Martin-Luther-Universität Halle"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Martin-Luther-Universität Halle
                      </p>
                      <p className="text-gray-500">
                        Bachelor of Science in Computer Science
                      </p>
                    </div>
                    <div className="flex flex-col items-end min-w-[16ch]">
                      <span className="text-base text-gray-500">
                        Oct 2021 - Feb 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free University of Bozen/Bolzano */}
              <div className="block p-4 -m-4 relative group">
                <div className="absolute inset-0 bg-neutral-100 shadow-sm scale-95 opacity-0 transition-all duration-300 ease-out rounded-xl group-hover:opacity-100 group-hover:scale-100"></div>
                <div className="relative z-10">
                  <div className="flex gap-4 items-center">
                    <div className="rounded-md flex-shrink-0 h-12 w-12 flex items-center justify-center p-2">
                      <Image
                        src="/images/logos/unibz.png"
                        alt="Free University of Bozen/Bolzano"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-auto">
                      <p
                        className="text-gray-900 text-xl font-bold w-full"
                        style={{ lineHeight: "32px" }}
                      >
                        Free University of Bozen - Bolzano
                      </p>
                      <p className="text-gray-500">Individual Courses</p>
                    </div>
                    <div className="flex flex-col items-end min-w-[16ch]">
                      <span className="text-base text-gray-500">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
