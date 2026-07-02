import { FaBars, FaBell } from "react-icons/fa";

function Navbar({ setMenuOpen }) {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 p-4 flex justify-between items-center">

      <button onClick={() => setMenuOpen(true)}>
        <FaBars size={22} />
      </button>

      <h1 className="text-xl font-bold">
        Nexa AI
      </h1>

      <button>
        <FaBell size={20} />
      </button>

    </div>
  );
}

export default Navbar;