"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();

  const [image, setImage] = useState("");
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // SALYASKA
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [mechanism, setMechanism] = useState("");

  // PETLYA
  const [hingeType, setHingeType] = useState("");
  const [openingAngle, setOpeningAngle] = useState("");
  const [closer, setCloser] = useState("");
  const [push, setPush] = useState("");

  // UMUMIY
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function saveProduct() {
    setError("");

    // UMUMIY TEKSHIRUVLAR

    if (!image) {
      setError("Mahsulot rasmini yuklang.");
      return;
    }

    if (!productType) {
      setError("Mahsulot turini tanlang.");
      return;
    }

    if (!name.trim()) {
      setError("Mahsulot nomini kiriting.");
      return;
    }

    // SALYASKA

    if (productType === "Salyaska") {
      if (!size) {
        setError("Razmerni tanlang.");
        return;
      }

      if (!weight) {
        setError("Yuk ko‘tarish hajmini tanlang.");
        return;
      }

      if (!mechanism) {
        setError("Mexanizmni tanlang.");
        return;
      }
    }

    // PETLYA

    if (productType === "Petlya") {
      if (!hingeType) {
        setError("Petlya turini tanlang.");
        return;
      }

      // Ochilish burchagi majburiy emas
      // Dovodchik majburiy emas
      // Push majburiy emas
    }

    // NARX

    if (!price || Number(price) <= 0) {
      setError("To‘g‘ri narx kiriting.");
      return;
    }

    // MIQDOR

    if (!quantity || Number(quantity) <= 0) {
      setError("Mavjud mahsulot sonini kiriting.");
      return;
    }

    const oldProducts = JSON.parse(
      localStorage.getItem("alfaProducts") || "[]"
    );

    const newProduct = {
      id: Date.now(),
      image,
      productType,
      name,
      description,

      // SALYASKA
      size,
      weight,
      mechanism,

      // PETLYA
      hingeType,
      openingAngle,
      closer,
      push,

      // UMUMIY
      price,
      quantity,
    };

    localStorage.setItem(
      "alfaProducts",
      JSON.stringify([...oldProducts, newProduct])
    );

    router.push("/");
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

        {/* RASM */}

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

        {/* MAHSULOT TURI */}

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

            <option value="Petlya">
              Petlya
            </option>

          </select>

        </div>

        {/* MAHSULOT NOMI */}

        {productType && (

          <div className="space-y-6">

            <div>

              <label className="block font-bold text-black mb-2">
                Mahsulot nomi *
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={
                  productType === "Salyaska"
                    ? "Masalan: Salyaska Blum"
                    : "Masalan: Petlya Blum"
                }
                className="w-full border border-gray-300 rounded-lg p-3"
              />

            </div>

            {/* TAVSIF */}

            <div>

              <label className="block font-bold text-black mb-2">
                Mahsulot tavsifi
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Mahsulot haqida ma'lumot..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3"
              />

            </div>

            {/* ================= SALYASKA ================= */}

            {productType === "Salyaska" && (

              <>

                {/* RAZMER */}

                <div>

                  <label className="block font-bold text-black mb-2">
                    Salyaska razmeri *
                  </label>

                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3"
                  >

                    <option value="">
                      Razmerni tanlang
                    </option>

                    <option value="250">250 mm</option>
                    <option value="300">300 mm</option>
                    <option value="350">350 mm</option>
                    <option value="400">400 mm</option>
                    <option value="450">450 mm</option>
                    <option value="500">500 mm</option>
                    <option value="550">550 mm</option>
                    <option value="600">600 mm</option>
                    <option value="650">650 mm</option>

                  </select>

                </div>

                {/* YUK */}

                <div>

                  <label className="block font-bold text-black mb-2">
                    Qancha og‘irlik ko‘taradi? *
                  </label>

                  <select
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3"
                  >

                    <option value="">
                      Og‘irlikni tanlang
                    </option>

                    <option value="5">5 kg</option>
                    <option value="10">10 kg</option>
                    <option value="15">15 kg</option>
                    <option value="20">20 kg</option>
                    <option value="25">25 kg</option>
                    <option value="30">30 kg</option>
                    <option value="35">35 kg</option>
                    <option value="40">40 kg</option>
                    <option value="45">45 kg</option>
                    <option value="50">50 kg</option>

                  </select>

                </div>

                {/* MEXANIZM */}

                <div>

                  <label className="block font-bold text-black mb-2">
                    Mexanizm turi *
                  </label>

                  <select
                    value={mechanism}
                    onChange={(e) => setMechanism(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3"
                  >

                    <option value="">
                      Mexanizmni tanlang
                    </option>

                    <option value="Bez dovodchik">
                      Bez dovodchik
                    </option>

                    <option value="Dovodchik">
                      Dovodchik
                    </option>

                    <option value="Push">
                      Push
                    </option>

                    <option value="Push + Open">
                      Push + Open
                    </option>

                  </select>

                </div>

              </>

            )}

            {/* ================= PETLYA ================= */}

            {productType === "Petlya" && (

              <>

                {/* PETLYA TURI */}

                <div>

                  <label className="block font-bold text-black mb-2">
                    Petlya turi *
                  </label>

                  <select
                    value={hingeType}
                    onChange={(e) => setHingeType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3"
                  >

                    <option value="">
                      Petlya turini tanlang
                    </option>

                    <option value="Primoy">
                      Primoy
                    </option>

                    <option value="Polumas">
                      Polumas
                    </option>

                    <option value="Polgarbat">
                      Polgarbat
                    </option>

                  </select>

                </div>

                {/* OCHILISH BURCHAGI */}

                <div>

                  <label className="block font-bold text-black mb-2">
                    Ochilish burchagi
                  </label>

                  <select
                    value={openingAngle}
                    onChange={(e) => setOpeningAngle(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3"
                  >

                    <option value="">
                      Tanlash shart emas
                    </option>

                    <option value="90">
                      90°
                    </option>

                    <option value="110">
                      110°
                    </option>

                    <option value="135">
                      135°
                    </option>

                    <option value="165">
                      165°
                    </option>

                  </select>

                </div>

                {/* DOVODCHIK */}

                <div>

                  <label className="block font-bold text-black mb-2">
                    Dovodchik
                  </label>

                  <select
                    value={closer}
                    onChange={(e) => setCloser(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3"
                  >

                    <option value="">
                      Tanlash shart emas
                    </option>

                    <option value="Bor">
                      Bor
                    </option>

                    <option value="Yo‘q">
                      Yo‘q
                    </option>

                  </select>

                </div>

                {/* PUSH */}

                <div>

                  <label className="block font-bold text-black mb-2">
                    Push
                  </label>

                  <select
                    value={push}
                    onChange={(e) => setPush(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3"
                  >

                    <option value="">
                      Tanlash shart emas
                    </option>

                    <option value="Bor">
                      Bor
                    </option>

                    <option value="Yo‘q">
                      Yo‘q
                    </option>

                  </select>

                </div>

              </>

            )}

            {/* NARX */}

            <div>

              <label className="block font-bold text-black mb-2">
                Narx *
              </label>

              <input
                type="number"
                min="1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Masalan: 85000"
                className="w-full border border-gray-300 rounded-lg p-3"
              />

              <p className="text-sm text-gray-500 mt-1">
                Narxni sotuvchi o‘zi belgilaydi.
              </p>

            </div>

            {/* MIQDOR */}

            <div>

              <label className="block font-bold text-black mb-2">
                Mavjud soni *
              </label>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Masalan: 20"
                className="w-full border border-gray-300 rounded-lg p-3"
              />

            </div>

            {/* XATO */}

            {error && (
              <p className="text-red-600 text-sm font-semibold text-center">
                {error}
              </p>
            )}

            {/* JOYLASH */}

            <button
              type="button"
              onClick={saveProduct}
              className="w-full bg-red-600 text-white p-4 rounded-lg font-bold text-lg"
            >
              Mahsulotni joylash
            </button>

          </div>

        )}

      </div>

    </main>
  );
}