import DateForm from "./components/DateForm";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-rose-100 to--100 flex justify-center items-center p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-4xl p-8 border border-pink-200">
        <div className="text-center">
          <div className="text-6xl animate-bounce">
            🎶
          </div>
          <h1 className="text-5xl font-extrabold text-black-600 mt-3">
            Plan A Day With Me╰(*°▽°*)╯
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Choose a date, pick an adventure,
            and let's make Crazy memories together.
          </p>
          <div className="text-4xl mt-5 space-x-2">
            ☕ 🎨 🍦 🎡 🧺 🦁 🎬 🌸 💖
          </div>
        </div>
        <DateForm />
        <footer className="mt-10 text-center text-gray-500">
          <hr className="mb-5" />
          <p>
            Made by Parmii.Swann
          </p>
          <p className="text-sm mt-2">
            React • Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
export default App;