import { FiBell, FiSearch, FiMoon } from "react-icons/fi";

function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Search */}
      <div className="relative w-96">
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-slate-300 py-2 pr-4 pl-10 outline-none focus:border-violet-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-slate-100">
          <FiMoon size={20} />
        </button>

        <button className="relative rounded-lg p-2 hover:bg-slate-100">
          <FiBell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <img
            src=""
            alt="User"
            className="h-10 w-10 rounded-full"
          />

          <div>
            <h3 className="text-sm font-semibold">Khairozzaman</h3>
            <p className="text-xs text-slate-500">Frontend Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;