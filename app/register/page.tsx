"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [phone, setPhone] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [code, setCode] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [userType, setUserType] = useState("Xaridor");

  const [error, setError] = useState("");

  function getTestCode() {
    const numbers = phone.replace(/\D/g, "");

    if (numbers.length !== 12 || !numbers.startsWith("998")) {
      setError("Telefon raqamini +998 bilan to‘liq kiriting.");
      return;
    }

    const newCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    setGeneratedCode(newCode);
    setCode("");
    setError("");
    setStep(2);
  }

  function checkCode() {
    if (code !== generatedCode) {
      setError("Kod noto‘g‘ri.");
      return;
    }

    setError("");
    setStep(3);
  }

  function nextStep() {
    if (!name.trim() || !surname.trim()) {
      setError("Ism va familiyani kiriting.");
      return;
    }

    setError("");
    setStep(4);
  }

  function createAccount() {
    if (!login.trim() || !password.trim()) {
      setError("Login va parolni kiriting.");
      return;
    }

    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo‘lishi kerak.");
      return;
    }

    localStorage.setItem(
      "alfaUser",
      JSON.stringify({
        name,
        surname,
        phone,
        login,
        userType,
        registered: true,
      })
    );

    router.push("/profile");
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          ALFA FURNITURE
        </h1>

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
              Ro‘yxatdan o‘tish
            </h2>

            <p className="text-gray-500 text-center mb-4">
              Telefon raqamingizni kiriting
            </p>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 123 45 67"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <button
              type="button"
              onClick={getTestCode}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
            >
              Test kod olish
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">
              Telefonni tasdiqlash
            </h2>

            <p className="text-gray-500 text-center mb-4">
              Bu test tizimi. Haqiqiy SMS yuborilmaydi.
            </p>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-5 mb-4 text-center">
              <p className="text-sm text-gray-600 mb-2">
                SAYTDA BERILGAN TEST KOD:
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
              placeholder="Kodni kiriting"
              className="w-full border p-3 rounded-lg mb-4 text-center text-xl"
            />

            <button
              type="button"
              onClick={checkCode}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
            >
              Kodni tekshirish
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
              Shaxsiy ma’lumotlar
            </h2>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ism"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Familiya"
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
        )}

        {step === 4 && (
          <>
            <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
              Akaunt ma’lumotlari
            </h2>

            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Login"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parol"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full border p-3 rounded-lg mb-6"
            >
              <option value="Xaridor">Xaridor</option>
              <option value="Sotuvchi">Sotuvchi</option>
            </select>

            <button
              type="button"
              onClick={createAccount}
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
            >
              Akaunt yaratish
            </button>
          </>
        )}

        {error && (
          <p className="text-red-500 text-sm text-center mt-4">
            {error}
          </p>
        )}

      </div>
    </main>
  );
}
