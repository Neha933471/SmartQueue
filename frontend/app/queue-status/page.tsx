// "use client";

// import { useEffect, useState } from "react";
// import { apiRequest, getSessionUser } from "../../lib/api";
// import PageShell from "../components/PageShell";
// import RequireRole from "../components/RequireRole";
// import StatusMessage from "../components/StatusMessage";

// type QueueItem = {
//   _id: string;
//   currentPosition: number;
//   status: string;
//   estimatedWait: number;
//   tokenNumber: number;
//   userId?: string;
//   appointmentId?: {
//     userId?: { _id: string; name: string };
//     serviceId?: { name: string };
//   };
// };

// export default function QueueStatusPage() {
//   const [queue, setQueue] = useState<QueueItem[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const user = getSessionUser();

//   useEffect(() => {
//     const load = () => {
//       apiRequest<QueueItem[]>("/customer/queue")
//         .then(setQueue)
//         .catch((err) => setError(err instanceof Error ? err.message : "Failed to load queue"))
//         .finally(() => setLoading(false));
//     };
//     load();
//     const interval = window.setInterval(load, 12000);
//     return () => window.clearInterval(interval);
//   }, []);

//   const myItems = queue.filter(
//     (item) =>
//       item.appointmentId?.userId?._id === user?.id ||
//       String(item.userId) === user?.id
//   );

//   const display = myItems.length ? myItems : queue;

//   return (
//     <RequireRole role="customer" redirectTo="/login">
//       <PageShell>
//         <h1 className="text-2xl font-bold">Queue Status</h1>
//         <p className="mt-1 text-sm text-slate-600">Updates every 12 seconds.</p>
//         <div className="mt-6 space-y-3">
//           <StatusMessage error={error} />
//           {loading ? <p className="text-slate-600">Loading queue status...</p> : null}
//           {display.map((item) => (
//             <article key={item._id} className="rounded-md border bg-white p-4">
//               <p className="font-semibold">
//                 Token {item.tokenNumber} |{" "}
//                 {item.status === "booked" ? "Check in on arrival" : `Position ${item.currentPosition}`} |{" "}
//                 {item.status}
//               </p>
//               <p className="text-sm text-slate-600">
//                 {item.appointmentId?.serviceId?.name || "Consultation"} | Est. wait{" "}
//                 {item.estimatedWait} min
//               </p>
//             </article>
//           ))}
//           {!display.length && !error && !loading ? <p className="text-slate-600">No queue entries yet.</p> : null}
//         </div>
//       </PageShell>
//     </RequireRole>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { apiRequest, getSessionUser } from "../../lib/api";
import PageShell from "../components/PageShell";
import RequireRole from "../components/RequireRole";
import StatusMessage from "../components/StatusMessage";

type QueueItem = {
  _id: string;
  currentPosition: number;
  status: string;
  estimatedWait: number;
  tokenNumber: number;
  userId?: string;
  appointmentId?: {
    userId?: { _id: string; name: string };
    serviceId?: { name: string };
  };
};

export default function QueueStatusPage() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const user = getSessionUser();

  useEffect(() => {
    const load = () => {
      apiRequest<QueueItem[]>("/customer/queue")
        .then(setQueue)
        .catch((err) =>
          setError(err instanceof Error ? err.message : "Failed to load queue")
        )
        .finally(() => setLoading(false));
    };

    load();
    const interval = window.setInterval(load, 12000);
    return () => window.clearInterval(interval);
  }, []);

  const myItems = queue.filter(
    (item) =>
      item.appointmentId?.userId?._id === user?.id ||
      String(item.userId) === user?.id
  );

  const display = myItems.length ? myItems : queue;

  return (
    <RequireRole role="customer" redirectTo="/login">
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 flex items-center justify-center p-6">

        {/* Main Card */}
        <div className="w-full max-w-3xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 p-6">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-indigo-600">
              Queue Status
            </h1>
            <p className="text-sm text-slate-600">
              Live updates every 12 seconds
            </p>
          </div>

          <StatusMessage error={error} />

          {loading ? (
            <p className="text-center text-slate-600">
              Loading queue status...
            </p>
          ) : null}

          {/* Queue List */}
          <div className="space-y-4 mt-4">
            {display.map((item) => (
              <div
                key={item._id}
                className="rounded-xl border border-slate-100 bg-gradient-to-r from-white to-sky-50 p-4 shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-slate-800">
                  🎫 Token {item.tokenNumber} {" | "}
                  {item.status === "booked"
                    ? "Check in on arrival"
                    : `Position ${item.currentPosition}`}{" "}
                  {" | "}
                  <span className="text-indigo-600">{item.status}</span>
                </p>

                <p className="text-sm text-slate-600 mt-1">
                  🏥 {item.appointmentId?.serviceId?.name || "Consultation"} {" | "}
                  ⏱ Est. wait{" "}
                  <span className="font-medium text-purple-600">
                    {item.estimatedWait} min
                  </span>
                </p>
              </div>
            ))}

            {!display.length && !error && !loading ? (
              <p className="text-center text-slate-500">
                No queue entries yet.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </RequireRole>
  );
}