import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-white shadow p-5">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between gap-4">

            <div>
              <h1 className="text-3xl font-bold text-blue-600">
                ALFA FURNITURE
              </h1>

              <p className="text-gray-500">
                Furnitura marketplace
              </p>
            </div>

            <Link
              href="/register"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg font-bold"
            >
              Ro‘yxatdan o‘tish
            </Link>

          </div>

          <div className="mt-5 flex gap-2">
            <input
              type="text"
              placeholder="Mahsulot qidirish..."
              className="flex-1 border p-3 rounded-lg"
            />

            <button className="bg-blue-600 text-white px-6 rounded-lg">
              🔍 Qidirish
            </button>
          </div>

        </div>
      </header>

      <section className="max-w-6xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-4">
          Kategoriyalar
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button className="bg-white p-5 rounded-xl shadow">
            PETLYALAR
          </button>

          <button className="bg-white p-5 rounded-xl shadow">
            SALYASLKA VA TANDEMLAR
          </button>

          <button className="bg-white p-5 rounded-xl shadow">
            OSHXONA TEXNIKALARI
          </button>

          <button className="bg-white p-5 rounded-xl shadow">
            YOTOQXONA UCHUN TEXNIKALAR
          </button>

        </div>

      </section>

    </main>
  );
}