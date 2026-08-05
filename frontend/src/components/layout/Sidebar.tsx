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
  { icon: <FiHome />, label: "Dashboard" },
  { icon: <FiFolder />, label: "Projects" },
  { icon: <FiCheckSquare />, label: "Tasks" },
  { icon: <FiUsers />, label: "Team" },
];

const tools = [
  { icon: <FiCalendar />, label: "Calendar" },
  { icon: <FiBarChart2 />, label: "Reports" },
];

const account = [
  { icon: <FiUser />, label: "Profile" },
  { icon: <FiSettings />, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold text-violet-500">SprintHub</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <h2 className="mb-2 text-xs font-semibold uppercase text-slate-400">
          Main
        </h2>

        <ul className="space-y-2">
          {menu.map((item) => (
            <li
              key={item.label}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-800"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-8 mb-2 text-xs font-semibold uppercase text-slate-400">
          Tools
        </h2>

        <ul className="space-y-2">
          {tools.map((item) => (
            <li
              key={item.label}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-800"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-8 mb-2 text-xs font-semibold uppercase text-slate-400">
          Account
        </h2>

        <ul className="space-y-2">
          {account.map((item) => (
            <li
              key={item.label}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-800"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-slate-700 p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 hover:bg-red-600">
          <FiLogOut />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;