import StatCard from "../../components/layout/StatCard";
import {
  FiFolder,
  FiClipboard,
  FiCheckSquare,
  FiUsers,
} from "react-icons/fi";

function Dashboard() {
  const projects = [
    {
      name: "SprintHub",
      status: "In Progress",
      members: 5,
      due: "10 Aug",
    },
    {
      name: "E-Commerce",
      status: "Completed",
      members: 3,
      due: "15 Aug",
    },
    {
      name: "Portfolio",
      status: "Pending",
      members: 1,
      due: "20 Aug",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "In Progress":
        return "bg-yellow-100 text-yellow-600";
      case "Pending":
        return "bg-red-100 text-red-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="rounded-xl bg-violet-600 p-6 text-white">
        <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
        <p className="mt-2 text-violet-100">
          Manage your projects and tasks efficiently.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Projects"
          value="12"
          icon={<FiFolder size={24} className="text-white" />}
          color="bg-blue-500"
          change="+12%"
        />

        <StatCard
          title="Total Tasks"
          value="154"
          icon={<FiClipboard size={24} className="text-white" />}
          color="bg-violet-500"
          change="+8%"
        />

        <StatCard
          title="Completed"
          value="98"
          icon={<FiCheckSquare size={24} className="text-white" />}
          color="bg-green-500"
          change="+15%"
        />

        <StatCard
          title="Team Members"
          value="8"
          icon={<FiUsers size={24} className="text-white" />}
          color="bg-orange-500"
          change="+2%"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Projects */}
        <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Projects</h2>

            <button className="rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700">
              View All
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-slate-500">
                <th className="py-3">Project</th>
                <th>Status</th>
                <th>Members</th>
                <th>Due Date</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.name}
                  className="border-b transition hover:bg-slate-50"
                >
                  <td className="py-4 font-medium">{project.name}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </td>

                  <td>{project.members}</td>

                  <td>{project.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="font-medium">SprintHub UI Updated</h3>
                <p className="text-sm text-slate-500">2 hours ago</p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="font-medium">Authentication Module</h3>
                <p className="text-sm text-slate-500">Yesterday</p>
              </div>

              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-600">
                In Progress
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Database Design</h3>
                <p className="text-sm text-slate-500">3 days ago</p>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                Planned
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;