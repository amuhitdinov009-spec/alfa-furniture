"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("alfaUser");

    if (user) {
      setRegistered(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-white shadow p-5">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between gap-4">

            <div>
              <h1 className="text-3xl font-bold text-black">
                ALFA FURNITURE
              </h1>

              <p className="text-gray-500">
                Furnitura marketplace
              </p>
            </div>

            {registered ? (
              <Link
                href="/profile"
                className="bg-red-600 text-white px-5 py-3 rounded-lg font-bold"
              >
                Profil
              </Link>
            ) : (
              <Link
                href="/register"
                className="bg-red-600 text-white px-5 py-3 rounded-lg font-bold"
              >
                Ro‘yxatdan o‘tish
              </Link>
            )}

          </div>

          <div className="mt-5 flex gap-2">

            <input
              type="text"
              placeholder="Mahsulot qidirish..."
              className="flex-1 border border-gray-300 p-3 rounded-lg"
            />

            <button className="bg-black text-white px-6 rounded-lg">
              🔍 Qidirish
            </button>

          </div>

        </div>
      </header>

      <section className="max-w-6xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-4 text-black">
          Kategoriyalar
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button className="bg-white p-5 rounded-xl shadow text-black">
            PETLYALAR
          </button>

          <button className="bg-white p-5 rounded-xl shadow text-black">
            SALYASLKA VA TANDEMLAR
          </button>

          <button className="bg-white p-5 rounded-xl shadow text-black">
            OSHXONA TEXNIKALARI
          </button>

          <button className="bg-white p-5 rounded-xl shadow text-black">
            YOTOQXONA UCHUN TEXNIKALAR
          </button>

        </div>

      </section>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">

        <button
          className="w-16 h-16 bg-white text-red-600 text-4xl rounded-full shadow-xl border-2 border-red-600"
        >
          +
        </button>

      </div>

    </main>
  );
}