import { FaFileAlt } from "react-icons/fa";
import {
  FaHome,
  FaUser,
  FaRobot,
  FaRoad,
  FaBullseye,
} from "react-icons/fa";

function BottomNav({ page, setPage }) {

  const items = [
  { name: "home", icon: <FaHome /> },
  { name: "careermatch", icon: <FaBullseye /> },
  { name: "aimentor", icon: <FaRobot /> },
  { name: "roadmaps", icon: <FaRoad /> },
  { name: "resume", icon: <FaFileAlt /> },
];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 flex justify-around py-3">

      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => setPage(item.name)}
          className={`flex flex-col items-center text-xs ${
            page === item.name
              ? "text-blue-500"
              : "text-zinc-400"
          }`}
        >
          <div className="text-xl">
            {item.icon}
          </div>

          <span className="capitalize">
  {item.name === "aimentor"
    ? "AI"
    : item.name}
</span>
        </button>
      ))}

    </div>
  );
}

export default BottomNav;