// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { apiRequest } from "../../../lib/api";
// import AdminShell from "../../components/AdminShell";
// import RequireRole from "../../components/RequireRole";
// import StatusMessage from "../../components/StatusMessage";

// type Summary = {
//   users: number;
//   appointments: number;
//   waitingQueue: number;
//   checkedInCustomers: number;
//   completedConsultations: number;
//   currentToken: number | null;
//   nextToken: number | null;
//   activeRooms: number;
// };

// export default function AdminDashboardPage() {
//   const [summary, setSummary] = useState<Summary | null>(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   const load = () => {
//     apiRequest<Summary>("/admin/dashboard")
//       .then(setSummary)
//       .catch((err) => setError(err instanceof Error ? err.message : "Failed to load"))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     load();
//     const interval = window.setInterval(load, 15000);
//     return () => window.clearInterval(interval);
//   }, []);

//   return (
//     <RequireRole role="admin" redirectTo="/admin/login">
//       <AdminShell>
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <StatusMessage error={error} />
//         {loading ? <p className="mt-4 text-sm text-slate-600">Loading dashboard...</p> : null}
//         <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {[
//             ["Total Users", summary?.users ?? 0],
//             ["Appointments", summary?.appointments ?? 0],
//             ["Waiting", summary?.waitingQueue ?? 0],
//             ["Checked In", summary?.checkedInCustomers ?? 0],
//             ["Completed", summary?.completedConsultations ?? 0],
//             ["Current Token", summary?.currentToken ?? "—"],
//             ["Next Token", summary?.nextToken ?? "—"],
//             ["Active Rooms", summary?.activeRooms ?? 0]
//           ].map(([label, value]) => (
//             <article key={label} className="rounded-md border bg-white p-5">
//               <p className="text-sm text-slate-600">{label}</p>
//               <p className="mt-2 text-3xl font-bold">{value}</p>
//             </article>
//           ))}
//         </div>
//         <div className="mt-6 flex flex-wrap gap-3">
//           <Link className="rounded-md border px-4 py-2" href="/admin/appointments">
//             Appointments
//           </Link>
//           <Link className="rounded-md border px-4 py-2" href="/admin/queue">
//             Queue
//           </Link>
//           <Link className="rounded-md border px-4 py-2" href="/admin/check-in">
//             Staff Check-In
//           </Link>
//           <Link className="rounded-md border px-4 py-2" href="/admin/analytics">
//             Analytics
//           </Link>
//         </div>
//       </AdminShell>
//     </RequireRole>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiRequest } from "../../../lib/api";
import AdminShell from "../../components/AdminShell";
import RequireRole from "../../components/RequireRole";
import StatusMessage from "../../components/StatusMessage";

type Summary = {
  users: number;
  appointments: number;
  waitingQueue: number;
  checkedInCustomers: number;
  completedConsultations: number;
  currentToken: number | null;
  nextToken: number | null;
  activeRooms: number;
};

export default function AdminDashboardPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    apiRequest<Summary>("/admin/dashboard")
      .then(setSummary)
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load")
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    const interval = window.setInterval(load, 15000);
    return () => window.clearInterval(interval);
  }, []);

  const cards = [
    ["Total Users", summary?.users ?? 0],
    ["Appointments", summary?.appointments ?? 0],
    ["Waiting Queue", summary?.waitingQueue ?? 0],
    ["Checked In", summary?.checkedInCustomers ?? 0],
    ["Completed", summary?.completedConsultations ?? 0],
    ["Current Token", summary?.currentToken ?? "—"],
    ["Next Token", summary?.nextToken ?? "—"],
    ["Active Rooms", summary?.activeRooms ?? 0],
  ];

  const links = [
    { href: "/admin/appointments", label: "Appointments" },
    { href: "/admin/queue", label: "Queue" },
    { href: "/admin/check-in", label: "Staff Check-In" },
    { href: "/admin/analytics", label: "Analytics" },
  ];

  return (
    <RequireRole role="admin" redirectTo="/admin/login">
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 p-6 flex justify-center">

        {/* Glass Container */}
        <div className="w-full max-w-6xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 p-6">

          {/* Header */}
          <h1 className="text-3xl font-bold text-indigo-600 text-center">
            Admin Dashboard
          </h1>

          <StatusMessage error={error} />

          {loading ? (
            <p className="text-center text-slate-600 mt-4">
              Loading dashboard...
            </p>
          ) : null}

          {/* Stats Grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-sky-50 p-5 shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm text-slate-600">{label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-800">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-white font-medium shadow-md hover:shadow-lg transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </RequireRole>
  );
}