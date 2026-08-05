import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
  change: string;
};

function StatCard({
  title,
  value,
  icon,
  color,
  change,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
          </h2>

          <p className="mt-2 text-sm font-medium text-green-600">
            {change} this month
          </p>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;