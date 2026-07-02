import {
  FaHome,
  FaUser,
  FaRobot,
  FaRoad,
  FaChartLine,
  FaCog,
  FaBullseye,
  FaGraduationCap,
  FaFileAlt,
} from "react-icons/fa";

function Sidebar({
  page,
  setPage,
  menuOpen,
  setMenuOpen,
}) {
  const items = [
  { name: "home", icon: <FaHome /> },
  { name: "profile", icon: <FaUser /> },
  { name: "careermatch", icon: <FaBullseye /> },
  { name: "aimentor", icon: <FaRobot /> },
  { name: "roadmaps", icon: <FaRoad /> },
  { name: "skillgap", icon: <FaChartLine /> },
  { name: "interview", icon: <FaRobot /> },
  { name: "courses", icon: <FaGraduationCap /> },
  { name: "resume", icon: <FaFileAlt /> },
  { name: "reports", icon: <FaFileAlt /> },
  { name: "progress", icon: <FaChartLine /> },
  { name: "settings", icon: <FaCog /> },
];

  return (
    <>
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-zinc-900 z-50 transform transition-transform duration-300 ${
          menuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="p-6">

          <h2 className="text-2xl font-bold mb-8">
            Nexa AI
          </h2>

          <div className="space-y-2">

            {items.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setPage(item.name);
                  setMenuOpen(false);
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition ${
                  page === item.name
                    ? "bg-blue-600"
                    : "hover:bg-zinc-800"
                }`}
              >
                {item.icon}

                <span className="capitalize">
                  {item.name}
                </span>
              </button>
            ))}

          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;