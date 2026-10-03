"use client";

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          ALFA FURNITURE
        </h1>

        <h2 className="text-2xl font-bold mt-8 mb-6 text-center">
          Mening profilim
        </h2>

        <div className="space-y-4">

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">
              Telefon raqami
            </p>
            <p className="font-bold">
              Telefon tasdiqlangan ✅
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">
              Ism
            </p>
            <p className="font-bold">
              Foydalanuvchi
            </p>
          </div>

          <a
            href="/profile/edit"
            className="block w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-center"
          >
            Profilni tahrirlash
          </a>

        </div>

      </div>
    </main>
  );
}