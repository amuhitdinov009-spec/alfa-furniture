"use client";

import { useState } from "react";

export default function AddProduct() {
  const [image, setImage] = useState("");
  const [productType, setProductType] = useState("");

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">

        <h1 className="text-3xl font-bold text-black text-center">
          Mahsulot joylash
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Yangi mahsulot qo‘shing
        </p>

        <div className="mb-6">

          <label className="block font-bold text-black mb-2">
            Mahsulot rasmi *
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          {image && (
            <img
              src={image}
              alt="Mahsulot"
              className="w-full h-64 object-contain mt-4 rounded-xl border"
            />
          )}

        </div>

        <div className="mb-6">

          <label className="block font-bold text-black mb-2">
            Mahsulot turi *
          </label>

          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3"
          >
            <option value="">
              Mahsulot turini tanlang
            </option>

            <option value="Salyaska">
              Salyaska
            </option>
          </select>

        </div>

        {productType === "Salyaska" && (
          <div className="bg-gray-50 rounded-xl p-5">

            <h2 className="text-xl font-bold text-black mb-4">
              Salyaska ma’lumotlari
            </h2>

            <p className="text-gray-500">
              Keyingi bosqichda bu yerga razmer, yuk ko‘tarishi va mexanizm variantlarini qo‘shamiz.
            </p>

          </div>
        )}

      </div>

    </main>
  );
}