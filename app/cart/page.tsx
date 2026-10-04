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

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);

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
    loadCart();
  }, []);

  function saveCart(newCart: CartItem[]) {
    setCart(newCart);
    localStorage.setItem("alfaCart", JSON.stringify(newCart));
  }

  function increase(productId: number) {
    const newCart = cart.map((item) =>
      item.product.id === productId
        ? { ...item, count: item.count + 1 }
        : item
    );

    saveCart(newCart);
  }

  function decrease(productId: number) {
    const newCart = cart
      .map((item) =>
        item.product.id === productId
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);

    saveCart(newCart);
  }

  function remove(productId: number) {
    const newCart = cart.filter(
      (item) => item.product.id !== productId
    );

    saveCart(newCart);
  }

  const totalProducts = cart.reduce(
    (sum, item) => sum + item.count,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.product.price) * item.count,
    0
  );

  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}

      <header className="bg-white shadow p-5">

        <div className="max-w-6xl mx-auto flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-black">
              ALFA FURNITURE
            </h1>

            <p className="text-gray-500">
              Savatcha
            </p>
          </div>

          <Link
            href="/"
            className="bg-black text-white px-5 py-3 rounded-lg font-bold"
          >
            Asosiy menyu
          </Link>

        </div>

      </header>

      {/* SAVATCHA */}

      <section className="max-w-4xl mx-auto p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-3xl font-bold text-black">
            🛒 Savatcha
          </h2>

          <p className="text-gray-600">
            {totalProducts} ta mahsulot
          </p>

        </div>

        {cart.length === 0 ? (

          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <div className="text-6xl mb-4">
              🛒
            </div>

            <h3 className="text-2xl font-bold text-black">
              Savatcha bo‘sh
            </h3>

            <p className="text-gray-500 mt-2 mb-6">
              Hozircha savatchaga mahsulot qo‘shilmagan.
            </p>

            <Link
              href="/"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold"
            >
              Mahsulotlarni ko‘rish
            </Link>

          </div>

        ) : (

          <>

            {/* MAHSULOTLAR */}

            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={item.product.id}
                  className="bg-white rounded-2xl shadow p-5"
                >

                  <div className="flex gap-5">

                    {/* RASM */}

                    <div className="w-28 h-28 bg-gray-100 rounded-xl flex-shrink-0">

                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain rounded-xl"
                      />

                    </div>

                    {/* MA'LUMOT */}

                    <div className="flex-1">

                      <p className="text-sm text-gray-500">
                        {item.product.productType}
                      </p>

                      <h3 className="text-xl font-bold text-black">
                        {item.product.name}
                      </h3>

                      <p className="text-red-600 font-bold mt-2">
                        {Number(item.product.price).toLocaleString("uz-UZ")} so‘m
                      </p>

                      {/* MIQDOR */}

                      <div className="flex items-center gap-3 mt-4">

                        <button
                          type="button"
                          onClick={() => decrease(item.product.id)}
                          className="w-9 h-9 bg-gray-200 rounded-lg font-bold text-xl"
                        >
                          −
                        </button>

                        <span className="font-bold text-lg">
                          {item.count}
                        </span>

                        <button
                          type="button"
                          onClick={() => increase(item.product.id)}
                          className="w-9 h-9 bg-black text-white rounded-lg font-bold text-xl"
                        >
                          +
                        </button>

                      </div>

                    </div>

                    {/* O‘CHIRISH */}

                    <button
                      type="button"
                      onClick={() => remove(item.product.id)}
                      className="text-red-600 font-bold"
                    >
                      🗑
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* UMUMIY */}

            <div className="bg-white rounded-2xl shadow p-6 mt-6">

              <div className="flex justify-between text-lg mb-3">

                <span>
                  Mahsulotlar soni:
                </span>

                <span className="font-bold">
                  {totalProducts} ta
                </span>

              </div>

              <div className="border-t pt-4 flex justify-between items-center">

                <span className="text-xl font-bold">
                  Umumiy:
                </span>

                <span className="text-2xl font-bold text-red-600">
                  {totalPrice.toLocaleString("uz-UZ")} so‘m
                </span>

              </div>

              <button
                type="button"
                className="w-full bg-red-600 text-white p-4 rounded-lg font-bold text-lg mt-6"
              >
                Buyurtma berish
              </button>

            </div>

          </>

        )}

      </section>

    </main>
  );
}