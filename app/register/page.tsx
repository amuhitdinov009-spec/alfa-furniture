"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  image: string;
  productType: string;
  name: string;
  description: string;
  size: string;
  weight: string;
  mechanism: string;
  price: string;
  quantity: string;
};

export default function Home() {
  const [registered, setRegistered] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("alfaUser");

    if (user) {
      setRegistered(true);
    }

    loadProducts();
  }, []);

  function loadProducts() {
    try {
      const savedProducts = localStorage.getItem("alfaProducts");

      if (!savedProducts) {
        setProducts([]);
        return;
      }

      const parsedProducts = JSON.parse(savedProducts);

      if (Array.isArray(parsedProducts)) {
        setProducts(parsedProducts);
      }
    } catch (error) {
      console.log("Mahsulotlarni o‘qishda xato:", error);
      setProducts([]);
    }
  }

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

            <button
              type="button"
              className="bg-black text-white px-6 rounded-lg"
            >
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

          <button
            type="button"
            className="bg-white p-5 rounded-xl shadow text-black"
          >
            PETLYALAR
          </button>

          <button
            type="button"
            className="bg-white p-5 rounded-xl shadow text-black"
          >
            SALYASLKA VA TANDEMLAR
          </button>

          <button
            type="button"
            className="bg-white p-5 rounded-xl shadow text-black"
          >
            OSHXONA TEXNIKALARI
          </button>

          <button
            type="button"
            className="bg-white p-5 rounded-xl shadow text-black"
          >
            YOTOQXONA UCHUN TEXNIKALAR
          </button>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">

        <h2 className="text-2xl font-bold mb-5 text-black">
          Mahsulotlar
        </h2>

        {products.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <p className="text-gray-500">
              Hozircha mahsulot qo‘shilmagan.
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >

                <div className="h-56 bg-gray-100 flex items-center justify-center">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="p-5">

                  <p className="text-sm text-gray-500">
                    {product.productType}
                  </p>

                  <h3 className="text-xl font-bold text-black mt-1">
                    {product.name}
                  </h3>

                  {product.description && (
                    <p className="text-gray-600 mt-2">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-4 space-y-2 text-sm text-gray-700">

                    <p>
                      <b>Razmer:</b> {product.size} mm
                    </p>

                    <p>
                      <b>Yuk:</b> {product.weight} kg
                    </p>

                    <p>
                      <b>Mexanizm:</b> {product.mechanism}
                    </p>

                    <p>
                      <b>Mavjud:</b> {product.quantity} dona
                    </p>

                  </div>

                  <div className="mt-5 border-t pt-4">

                    <p className="text-2xl font-bold text-red-600">
                      {Number(product.price).toLocaleString("uz-UZ")} so‘m
                    </p>

                    <button
                      type="button"
                      className="w-full bg-black text-white p-3 rounded-lg font-bold mt-4"
                    >
                      Mahsulotni ko‘rish
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">

        <Link
          href="/add-product"
          className="w-16 h-16 bg-white text-red-600 text-4xl rounded-full shadow-xl border-2 border-red-600 flex items-center justify-center"
        >
          +
        </Link>

      </div>

    </main>
  );
}