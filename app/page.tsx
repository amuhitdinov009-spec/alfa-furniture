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

type CartItem = {
  product: Product;
  count: number;
};

export default function Home() {
  const [registered, setRegistered] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  function loadProducts() {
    const saved = localStorage.getItem("alfaProducts");

    if (!saved) {
      setProducts([]);
      return;
    }

    try {
      const data = JSON.parse(saved);

      if (Array.isArray(data)) {
        setProducts(data);
      }
    } catch {
      setProducts([]);
    }
  }

  function loadCart() {
    const saved = localStorage.getItem("alfaCart");

    if (!saved) {
      setCart([]);
      return;
    }

    try {
      const data = JSON.parse(saved);

      if (Array.isArray(data)) {
        setCart(data);
      }
    } catch {
      setCart([]);
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("alfaUser");

    if (user) {
      setRegistered(true);
    }

    loadProducts();
    loadCart();

    function handleStorage() {
      loadProducts();
      loadCart();
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  function addToCart(product: Product) {
    const oldCart: CartItem[] = JSON.parse(
      localStorage.getItem("alfaCart") || "[]"
    );

    const existing = oldCart.find(
      (item) => item.product.id === product.id
    );

    let newCart: CartItem[];

    if (existing) {
      newCart = oldCart.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      );
    } else {
      newCart = [
        ...oldCart,
        {
          product,
          count: 1,
        },
      ];
    }

    localStorage.setItem("alfaCart", JSON.stringify(newCart));
    setCart(newCart);
  }

  function deleteProduct(productId: number) {
    const confirmDelete = window.confirm(
      "Bu mahsulotni o‘chirishni xohlaysizmi?"
    );

    if (!confirmDelete) {
      return;
    }

    const newProducts = products.filter(
      (product) => product.id !== productId
    );

    localStorage.setItem(
      "alfaProducts",
      JSON.stringify(newProducts)
    );

    setProducts(newProducts);

    const newCart = cart.filter(
      (item) => item.product.id !== productId
    );

    localStorage.setItem(
      "alfaCart",
      JSON.stringify(newCart)
    );

    setCart(newCart);
  }

  const cartProductsCount = cart.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const cartTotalPrice = cart.reduce(
    (sum, item) =>
      sum + Number(item.product.price) * item.count,
    0
  );

  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}

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

          {/* QIDIRUV */}

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

      {/* KATEGORIYALAR */}

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

      {/* MAHSULOTLAR */}

      <section className="max-w-6xl mx-auto px-6 pb-32">

        <div className="flex items-center justify-between mb-5">

          <h2 className="text-2xl font-bold text-black">
            Mahsulotlar
          </h2>

          <p className="text-gray-500">
            {products.length} ta mahsulot
          </p>

        </div>

        {products.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-8 text-center">

            <p className="text-gray-500">
              Hozircha mahsulot qo‘shilmagan.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow overflow-hidden"
              >

                {/* RASM */}

                <div className="w-full h-60 bg-gray-100 flex items-center justify-center">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />

                </div>

                {/* MAHSULOT MA'LUMOTI */}

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

                  <div className="mt-4 space-y-2 text-sm">

                    <p>
                      <span className="font-bold">
                        Razmer:
                      </span>{" "}
                      {product.size} mm
                    </p>

                    <p>
                      <span className="font-bold">
                        Yuk:
                      </span>{" "}
                      {product.weight} kg
                    </p>

                    <p>
                      <span className="font-bold">
                        Mexanizm:
                      </span>{" "}
                      {product.mechanism}
                    </p>

                    <p>
                      <span className="font-bold">
                        Mavjud:
                      </span>{" "}
                      {product.quantity} dona
                    </p>

                  </div>

                  {/* NARX */}

                  <div className="mt-5 pt-4 border-t">

                    <p className="text-2xl font-bold text-red-600">
                      {Number(product.price).toLocaleString("uz-UZ")} so‘m
                    </p>

                    {/* SAVATCHAGA */}

                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="w-full bg-black text-white p-3 rounded-lg font-bold mt-4"
                    >
                      🛒 Savatchaga qo‘shish
                    </button>

                    {/* O‘CHIRISH */}

                    <button
                      type="button"
                      onClick={() => deleteProduct(product.id)}
                      className="w-full border border-red-600 text-red-600 p-3 rounded-lg font-bold mt-2"
                    >
                      🗑 Mahsulotni o‘chirish
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {/* PASTKI TUGMALAR */}

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">

        {/* SAVATCHA */}

        <Link
          href="/cart"
          className="bg-white text-black border-2 border-black rounded-full shadow-xl px-5 h-16 flex items-center gap-2 font-bold"
        >

          🛒

          <span>
            {cartProductsCount} ta
          </span>

          <span className="text-red-600">
            {cartTotalPrice.toLocaleString("uz-UZ")} so‘m
          </span>

        </Link>

        {/* MAHSULOT QO‘SHISH */}

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