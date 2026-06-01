// "use client";

// import { useEffect, useState } from "react";
// import { apiRequest } from "../../../lib/api";
// import AdminShell from "../../components/AdminShell";
// import RequireRole from "../../components/RequireRole";
// import StatusMessage from "../../components/StatusMessage";
// import { useToast } from "../../components/Toast";

// type QueueItem = {
//   _id: string;
//   currentPosition: number;
//   status: string;
//   estimatedWait: number;
//   tokenNumber: number;
//   appointmentId?: { userId?: { name: string } };
// };

// export default function AdminQueuePage() {
//   const { showToast } = useToast();
//   const [queue, setQueue] = useState<QueueItem[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   const load = () => {
//     apiRequest<QueueItem[]>("/admin/queue")
//       .then(setQueue)
//       .catch((err) => setError(err instanceof Error ? err.message : "Failed to load queue"))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     load();
//     const interval = window.setInterval(load, 12000);
//     return () => window.clearInterval(interval);
//   }, []);

//   const updateStatus = async (id: string, status: string) => {
//     try {
//       await apiRequest(`/admin/queue/${id}`, {
//         method: "PATCH",
//         body: JSON.stringify({ status })
//       });
//       showToast(`Queue updated: ${status}`, "success");
//       load();
//     } catch (err) {
//       showToast(err instanceof Error ? err.message : "Update failed", "error");
//     }
//   };

//   return (
//     <RequireRole role="admin" redirectTo="/admin/login">
//       <AdminShell>
//         <h1 className="text-2xl font-bold">Queue Monitoring</h1>
//         <p className="mt-1 text-sm text-slate-600">Auto-refreshes every 12 seconds.</p>
//         <div className="mt-6 space-y-3">
//           <StatusMessage error={error} />
//           {loading ? <p className="text-slate-600">Loading active queue...</p> : null}
//           {queue.map((item) => (
//             <article key={item._id} className="rounded-md border bg-white p-4">
//               <div className="flex flex-wrap items-center justify-between gap-3">
//                 <div>
//                   <p className="font-semibold">
//                     Token {item.tokenNumber} | Position {item.currentPosition} | {item.status}
//                   </p>
//                   <p className="text-sm text-slate-600">
//                     {item.appointmentId?.userId?.name || "Customer"} | Wait {item.estimatedWait} min
//                   </p>
//                 </div>
//                 <div className="flex gap-2">
//                   {["serving", "served", "cancelled"].map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => updateStatus(item._id, status)}
//                       className="rounded-md border px-3 py-1.5 capitalize"
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </article>
//           ))}
//           {!queue.length && !error && !loading ? <p className="text-slate-600">No checked-in customers are waiting.</p> : null}
//         </div>
//       </AdminShell>
//     </RequireRole>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "../../../lib/api";
import AdminShell from "../../components/AdminShell";
import RequireRole from "../../components/RequireRole";
import StatusMessage from "../../components/StatusMessage";
import { useToast } from "../../components/Toast";

type QueueItem = {
  _id: string;
  currentPosition: number;
  status: string;
  estimatedWait: number;
  tokenNumber: number;
  appointmentId?: { userId?: { name: string } };
};

export default function AdminQueuePage() {
  const { showToast } = useToast();

  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    apiRequest<QueueItem[]>("/admin/queue")
      .then(setQueue)
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load queue")
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    const interval = window.setInterval(load, 12000);
    return () => window.clearInterval(interval);
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await apiRequest(`/admin/queue/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      showToast(`Queue updated: ${status}`, "success");
      load();
    } catch (err) {
      showToast(
        err instanceof Error ? err.message : "Update failed",
        "error"
      );
    }
  };

  return (
    <RequireRole role="admin" redirectTo="/admin/login">
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 p-6 flex justify-center">

        {/* Glass Container */}
        <div className="w-full max-w-5xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 p-6">

          {/* Header */}
          <h1 className="text-3xl font-bold text-indigo-600 text-center">
            Queue Monitoring
          </h1>

          <p className="text-center text-sm text-slate-600 mt-1">
            Auto-refreshes every 12 seconds
          </p>

          <StatusMessage error={error} />

          {loading ? (
            <p className="text-center text-slate-600 mt-4">
              Loading active queue...
            </p>
          ) : null}

          {/* Queue List */}
          <div className="mt-6 space-y-4">
            {queue.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-sky-50 p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">

                  {/* Info */}
                  <div>
                    <p className="font-semibold text-slate-800">
                      🎫 Token {item.tokenNumber} | 📍 Position{" "}
                      {item.currentPosition} |{" "}
                      <span className="text-indigo-600 font-medium">
                        {item.status}
                      </span>
                    </p>

                    <p className="text-sm text-slate-600 mt-1">
                      👤 {item.appointmentId?.userId?.name || "Customer"} | ⏱{" "}
                      {item.estimatedWait} min wait
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {["serving", "served", "cancelled"].map((status) => (
                      <button
                        key={status}
                        onClick={() => updateStatus(item._id, status)}
                        className={`rounded-xl px-3 py-1.5 text-sm font-medium transition border
                          ${
                            status === "served"
                              ? "border-green-300 text-green-600 hover:bg-green-50"
                              : status === "cancelled"
                              ? "border-red-300 text-red-600 hover:bg-red-50"
                              : "border-indigo-300 text-indigo-600 hover:bg-indigo-50"
                          }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {!queue.length && !error && !loading ? (
              <p className="text-center text-slate-500 mt-6">
                No checked-in customers are waiting.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </RequireRole>
  );
}