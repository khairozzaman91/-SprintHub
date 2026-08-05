import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Dashboard from "../../components/layout/Dashboard";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;