"use client";

import { useState } from "react";

export default function Register() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  function handlePhoneSubmit() {
    setStep(2);
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
              placeholder="+998 90 123 45 67"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <button
              type="button"
              onClick={handlePhoneSubmit}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
            >
              SMS kod yuborish
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mt-6 mb-6 text-center">
              SMS kodni kiriting
            </h2>

            <input
              type="text"
              placeholder="123456"
              maxLength={6}
              className="w-full border p-3 rounded-lg mb-4 text-center text-xl"
            />

            <button
              type="button"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
            >
              Tasdiqlash
            </button>
          </>
        )}

      </div>
    </main>
  );
}