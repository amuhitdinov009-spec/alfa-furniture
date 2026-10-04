"use client";

import Link from "next/link";

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Yuqori qism */}
      <header className="bg-white shadow p-5">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-700">
              Foydalanuvchi
            </h1>

            <Link
              href="/"
              className="text-blue-600 font-semibold"
            >
              Asosiy menyu
            </Link>
          </div>

        </div>
      </header>

      {/* Profil */}
      <section className="max-w-2xl mx-auto p-6">

        <div className="bg-white rounded-2xl shadow p-8">

          <div className="text-center mb-8">

            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
              <span className="text-4xl">👤</span>
            </div>

            <h2 className="text-3xl font-bold">
              Foydalanuvchi
            </h2>

          </div>

          <div className="space-y-4">

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Ism
              </p>
              <p className="text-lg font-bold">
                Akmal
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Familiya
              </p>
              <p className="text-lg font-bold">
                Foydalanuvchi
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Telefon raqami
              </p>
              <p className="text-lg font-bold">
                Telefon tasdiqlangan ✅
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Foydalanuvchi turi
              </p>
              <p className="text-lg font-bold">
                Xaridor
              </p>
            </div>

          </div>

          <Link
            href="/profile/edit"
            className="block w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-center mt-6"
          >
            Profilni tahrirlash
          </Link>

        </div>

      </section>

    </main>
  );
}