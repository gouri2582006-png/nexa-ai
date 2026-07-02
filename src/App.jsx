import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import SkillGraph from "./pages/SkillGraph";
import CareerMatch from "./pages/CareerMatch";
import AIMentor from "./pages/AIMentor";
import Roadmaps from "./pages/Roadmaps";
import Courses from "./pages/Courses";
import Progress from "./pages/Progress";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import { FaFileAlt } from "react-icons/fa";
import SkillGap from "./pages/SkillGap";
import InterviewPrep from "./pages/InterviewPrep";
import Loader from "./components/Loader";
function App() {

  const [loggedIn, setLoggedIn] = useState(false);
const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");

  const [menuOpen, setMenuOpen] = useState(false);

  const [profile, setProfile] = useState(() => {

    const saved = localStorage.getItem("profile");

    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          qualification: "",
          skills: "",
          interests: "",
          careerGoal: "",
        };

  });

  useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);

}, []);

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

   [profile];

  const profileFields = Object.values(profile).filter(
    (item) => item.trim() !== ""
  ).length;

  const profileCompletion = Math.round(
    (profileFields / 5) * 100
  );

  const renderPage = () => {

    switch (page) {

      case "home":
        return (
          <Home
profile={profile}
profileCompletion={profileCompletion}
setPage={setPage}
/>
        );

      case "profile":
        return (
          <Profile
            profile={profile}
            setProfile={setProfile}
          />
        );

      case "skills":
        return (
          <Skills
            profile={profile}
          />
        );

      case "skillgraph":
        return (
          <SkillGraph
            profile={profile}
          />
        );

      case "careermatch":
        return (
          <CareerMatch
            profile={profile}
          />
        );

      case "aimentor":
  return (
    <AIMentor profile={profile} />
  );

      case "roadmaps":
        return (
          <Roadmaps
            profile={profile}
          />
        );

      case "courses":
        return (
          <Courses
            profile={profile}
          />
        );
              case "progress":
        return (
          <Progress />
        );

      case "reports":
        return (
          <Reports
            profile={profile}
          />
        );

      case "settings":
        return (
          <Settings />
        );
        case "skillgap":
  return <SkillGap profile={profile} />;
  case "interview":
  return <InterviewPrep profile={profile} />;
case "resume":
  return <ResumeAnalyzer />;
      default:
        return (
          <Home
            profile={profile}
            profileCompletion={profileCompletion}
          />
        );
    }
  };
if (loading) {
  return <Loader />;
}
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-zinc-900 rounded-3xl p-8 shadow-xl">

          <h1 className="text-4xl font-bold text-center mb-2">
  Nexa AI
</h1>

<p className="text-zinc-400 text-center mb-2">
  Your Personal AI Career Mentor
</p>

<p className="text-blue-400 text-sm text-center mb-8">
  Powered by Google Gemini AI ✨
</p>

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-zinc-800 rounded-xl p-4 mb-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-800 rounded-xl p-4 mb-6 outline-none"
          />

          <button
            onClick={() => setLoggedIn(true)}
            className="w-full bg-blue-600 rounded-xl py-4 font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>

        </div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Sidebar
        page={page}
        setPage={setPage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="p-5 pb-24">

        {renderPage()}

      </main>
            <BottomNav
        page={page}
        setPage={setPage}
      />

    </div>

  );
}

export default App;