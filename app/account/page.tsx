"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Account() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function nextStep() {
    if (!name || !surname) {
      alert("Ism va familiyangizni kiriting!");
      return;
    }

    setStep(2);
  }

  function createAccount() {
    if (!login || !password) {
      alert("Login va parolni kiriting!");
      return;
    }

    if (password.length < 6) {
      alert("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      return;
    }

    router.push("/profile");
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          ALFA FURNITURE
        </h1>

        {step === 1 ? (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
              Ma'lumotlaringiz
            </h2>

            <label className="block font-semibold mb-2">
              Ism
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingiz"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <label className="block font-semibold mb-2">
              Familiya
            </label>

            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Familiyangiz"
              className="w-full border p-3 rounded-lg mb-6"
            />

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
            >
              Keyingi
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
              Login va parol
            </h2>

            <label className="block font-semibold mb-2">
              Login
            </label>

            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Login kiriting"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <label className="block font-semibold mb-2">
              Parol
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Kamida 6 ta belgi"
              className="w-full border p-3 rounded-lg mb-6"
            />

            <button
              type="button"
              onClick={createAccount}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
            >
              Akaunt yaratish
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full border p-3 rounded-lg font-bold mt-3"
            >
              Orqaga
            </button>
          </>
        )}

      </div>
    </main>
  );
}