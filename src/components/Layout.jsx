import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

function Layout({ children, page, setPage }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">

      <Navbar />

      <main className="flex-1 overflow-y-auto p-5 pb-24">
        {children}
      </main>

      <BottomNav page={page} setPage={setPage} />

    </div>
  );
}

export default Layout;