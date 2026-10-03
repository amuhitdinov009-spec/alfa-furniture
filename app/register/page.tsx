"use client";

import { useState } from "react";

export default function Register() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");

  function handlePhoneSubmit() {
    const numbers = phone.replace(/\D/g, "");

    if (numbers.length !== 12 || !numbers.startsWith("998")) {
      setError("Telefon raqamini +998 bilan to‘liq kiriting.");
      return;
    }

    const newCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    setGeneratedCode(newCode);
    setError("");
    setStep(2);
  }

  function handleCodeSubmit() {
    if (code === generatedCode) {
      alert("Telefon raqami tasdiqlandi!");
    } else {
      setError("SMS kod noto‘g‘ri.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          ALFA FURNITURE
        </h1>

        {step === 1 ? (
          <>
            <h2 className="text-2xl font-bold mt-6 mb-6 text-center">
              Ro‘yxatdan o‘tish
            </h2>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 50 053 88 16"
              className="w-full border p-3 rounded-lg mb-2"
            />

            {error && (
              <p className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handlePhoneSubmit}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold mt-2"
            >
              SMS kod yuborish
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-center">
              SMS kodni kiriting
            </h2>

            <p className="text-gray-500 text-center mb-4">
              Telefoningizga yuborilgan 6 xonali kodni kiriting.
            </p>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4 text-center">
              <p className="text-sm text-gray-600">
                TEST SMS KOD:
              </p>

              <p className="text-3xl font-bold tracking-widest">
                {generatedCode}
              </p>
            </div>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="123456"
              className="w-full border p-3 rounded-lg mb-2 text-center text-xl"
            />

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleCodeSubmit}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold mt-2"
            >
              Tasdiqlash
            </button>
          </>
        )}

      </div>
    </main>
  );
}