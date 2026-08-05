import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiFolder,
  FiCheckSquare,
  FiUsers,
  FiCalendar,
  FiBarChart2,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const menu = [
  { icon: <FiHome />, label: "Dashboard", to: "/" },
  { icon: <FiFolder />, label: "Projects", to: "/projects" },
  { icon: <FiCheckSquare />, label: "Tasks", to: "/tasks" },
  { icon: <FiUsers />, label: "Team", to: "/team" },
];

const tools = [
  { icon: <FiCalendar />, label: "Calendar", to: "/calendar" },
  { icon: <FiBarChart2 />, label: "Reports", to: "/reports" },
];

const account = [
  { icon: <FiUser />, label: "Profile", to: "/profile" },
  { icon: <FiSettings />, label: "Settings", to: "/settings" },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      {/* Logo */}
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold text-violet-500">SprintHub</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {/* Main */}
        <h2 className="mb-2 text-xs font-semibold uppercase text-slate-400">
          Main
        </h2>

        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition ${
                    isActive
                      ? "bg-violet-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Tools */}
        <h2 className="mb-2 mt-8 text-xs font-semibold uppercase text-slate-400">
          Tools
        </h2>

        <ul className="space-y-2">
          {tools.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition ${
                    isActive
                      ? "bg-violet-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Account */}
        <h2 className="mb-2 mt-8 text-xs font-semibold uppercase text-slate-400">
          Account
        </h2>

        <ul className="space-y-2">
          {account.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition ${
                    isActive
                      ? "bg-violet-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-700 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-red-600">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;