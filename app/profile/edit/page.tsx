"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("");

  function saveProfile() {
    if (!name.trim()) {
      alert("Ismingizni kiriting!");
      return;
    }

    localStorage.setItem("profileName", name);
    localStorage.setItem("isRegistered", "true");

    alert("Profil saqlandi!");

    router.push("/");
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          ALFA FURNITURE
        </h1>

        <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
          Profilni tahrirlash
        </h2>

        <label className="block font-semibold mb-2">
          Ismingiz
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ismingizni kiriting"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          type="button"
          onClick={saveProfile}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold"
        >
          Saqlash
        </button>

      </div>
    </main>
  );
}