function Loader() {
  return (
    <div className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-6 text-2xl font-bold">
          Nexa AI
        </h2>

        <p className="text-zinc-400 mt-2">
          Loading...
        </p>

      </div>

    </div>
  );
}

export default Loader;