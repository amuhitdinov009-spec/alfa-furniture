export default function Register() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-blue-600 text-center">
          ALFA FURNITURE
        </h1>

        <h2 className="text-2xl font-bold mt-6 mb-6 text-center">
          Ro‘yxatdan o‘tish
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="+998 90 123 45 67"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Parol"
            className="w-full border p-3 rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold">
            Ro‘yxatdan o‘tish
          </button>

        </div>

        <p className="text-center text-gray-500 mt-5">
          Akkauntingiz bormi? Kirish
        </p>

      </div>
    </main>
  );
}