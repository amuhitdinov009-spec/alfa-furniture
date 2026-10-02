export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-white shadow p-5">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between gap-4">

            <div>
              <h1 className="text-3xl font-bold text-blue-600">
                ALFA FURNITURE
              </h1>

              <p className="text-gray-500">
                Mebel va uy uchun kerakli mahsulotlar
              </p>
            </div>

            <div className="flex gap-2">
              <button className="bg-gray-200 px-4 py-2 rounded-lg">
                Kirish
              </button>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Ro‘yxatdan o‘tish
              </button>
            </div>

          </div>

          {/* QIDIRUV */}
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


      {/* KATEGORIYALAR */}
      <section className="max-w-6xl mx-auto p-6">

        <h2 className="text-2xl font-bold mb-4">
          Kategoriyalar
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <button className="bg-white p-5 rounded-xl shadow hover:shadow-lg">
            PETLYALAR
          </button>

          <button className="bg-white p-5 rounded-xl shadow hover:shadow-lg">
            SALYASLKA VA TANDEMLAR
          </button>

          <button className="bg-white p-5 rounded-xl shadow hover:shadow-lg">
            OSHXONA TEXNIKALARI
          </button>

          <button className="bg-white p-5 rounded-xl shadow hover:shadow-lg">
            YOTOQXONA UCHUN TEXNIKALAR
          </button>

        </div>

      </section>

    </main>
  );
}