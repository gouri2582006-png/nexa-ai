import { useState, useEffect } from "react";

import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import SkillGraph from "./pages/SkillGraph";
import Roadmaps from "./pages/Roadmaps";
import Courses from "./pages/Courses";
import Progress from "./pages/Progress";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import CareerMatch from "./pages/CareerMatch";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("home");

  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "",
          qualification: "",
          skills: "",
          interests: "",
          careerGoal: "",
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );
  }, [profile]);

  const profileFields = Object.values(profile).filter(
    (value) => value.trim() !== ""
  ).length;

  const profileCompletion = Math.round(
    (profileFields / 5) * 100
  );

  const menuItems = [
    "home",
    "profile",
    "skills",
    "skillgraph",
    "careermatch",
    "roadmaps",
    "courses",
    "progress",
    "reports",
    "settings",
  ];

  const renderPage = () => {
    switch (page) {
      case "home":
  return (
    <div className="space-y-6">

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-3xl">
        <h2 className="text-3xl font-bold">
          Hi {profile.name || "Student"} 👋
        </h2>

        <p className="mt-2 opacity-90">
          Let's build your career today.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-zinc-900 p-5 rounded-2xl">
          <p className="text-zinc-400">
            Profile Score
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {profileCompletion}%
          </h3>
        </div>

        <div className="bg-zinc-900 p-5 rounded-2xl">
          <p className="text-zinc-400">
            Career Goal
          </p>

          <h3 className="text-lg font-bold mt-2">
            {profile.careerGoal || "Not Set"}
          </h3>
        </div>

      </div>

      <div className="bg-zinc-900 p-6 rounded-2xl">
        <h3 className="text-xl font-bold mb-3">
          Next Step 🚀
        </h3>

        <p>
          Complete your profile and explore
          Career Match recommendations.
        </p>
      </div>

    </div>
  );
      case "profile":
        return (
          <Profile
            profile={profile}
            setProfile={setProfile}
          />
        );

      case "skills":
        return <Skills profile={profile} />;

      case "skillgraph":
        return <SkillGraph profile={profile} />;

      case "careermatch":
        return <CareerMatch profile={profile} />;

      case "roadmaps":
        return <Roadmaps profile={profile} />;

      case "courses":
        return <Courses profile={profile} />;

      case "progress":
        return <Progress />;

      case "reports":
        return <Reports profile={profile} />;

      case "settings":
        return <Settings />;

      default:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3>Profile Completion</h3>

                <p className="text-3xl font-bold mt-2">
                  {profileCompletion}%
                </p>

                <div className="w-full bg-zinc-700 rounded-full h-3 mt-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width: `${profileCompletion}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3>Career Goal</h3>

                <p className="text-xl mt-2">
                  {profile.careerGoal || "Not Set"}
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl">
                <h3>Qualification</h3>

                <p className="text-xl mt-2">
                  {profile.qualification || "Not Set"}
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-4">
                Welcome {profile.name || "Student"}
              </h2>

              <p>
                Complete your profile to unlock
                personalized career recommendations.
              </p>
            </div>
          </div>
        );
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Skill Graph Navigator
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-zinc-800 text-white p-3 rounded-xl mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-zinc-800 text-white p-3 rounded-xl mb-6"
          />

          <button
            onClick={() => setLoggedIn(true)}
            className="w-full bg-blue-600 py-3 rounded-xl"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <div className="w-72 bg-black/40 backdrop-blur-lg border-r border-zinc-800 p-6">
        <h2 className="text-2xl font-bold mb-8">
          AI Career Navigator
        </h2>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`w-full text-left p-3 rounded-xl capitalize ${page === item
                ? "bg-blue-600"
                : "hover:bg-zinc-800"}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
    <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8 capitalize">
          {page}
        </h1>

        {renderPage()}
      </div>
    </div>
  );
}

export default App;