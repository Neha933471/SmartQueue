// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { apiRequest, getSessionUser } from "../../lib/api";
// import PageShell from "../components/PageShell";
// import RequireRole from "../components/RequireRole";
// import StatusMessage from "../components/StatusMessage";

// type Appointment = {
//   _id: string;
//   appointmentCode?: string;
//   tokenNumber: number;
//   slotTime: string;
//   status: string;
//   qrCodeDataUrl?: string;
//   serviceId?: {
//     name: string;
//     durationMinutes: number;
//   };
// };

// export default function DashboardPage() {
//   const [appointments, setAppointments] = useState<Appointment[]>([]);
//   const [error, setError] = useState("");
//   const user = getSessionUser();

//   useEffect(() => {
//     apiRequest("/customer/appointments")
//       .then(setAppointments)
//       .catch((err) => setError(err.message));
//   }, []);

//   return (
//     <RequireRole role="customer" redirectTo="/login">
//       <PageShell>
//         <div className="flex flex-wrap items-center justify-between gap-3">
//           <div>
//             <h1 className="text-2xl font-bold">Customer Dashboard</h1>
//             <p className="mt-1 text-slate-600">Welcome{user?.name ? `, ${user.name}` : ""}.</p>
//           </div>
//           <Link href="/book-appointment" className="rounded-md bg-emerald-700 px-4 py-2 text-white">
//             Book Appointment
//           </Link>
//         </div>
//         <div className="mt-6 space-y-3">
//           <StatusMessage error={error} />
//           {appointments.map((appointment) => (
//             <article key={appointment._id} className="rounded-md border bg-white p-4">
//               <div className="flex flex-wrap items-start justify-between gap-4">
//                 <div>
//                   <p className="font-semibold">{appointment.serviceId?.name || "Appointment"}</p>
//                   <p className="text-sm text-slate-600">
//                     {new Date(appointment.slotTime).toLocaleString()} | Token {appointment.tokenNumber} |{" "}
//                     {appointment.status}
//                   </p>
//                   <p className="mt-1 text-sm text-slate-600">
//                     Appointment ID: {appointment.appointmentCode || appointment._id}
//                   </p>
//                 </div>
//                 {appointment.qrCodeDataUrl ? (
//                   <img
//                     src={appointment.qrCodeDataUrl}
//                     alt={`QR for ${appointment.appointmentCode || appointment._id}`}
//                     className="h-28 w-28 rounded-md border bg-white p-1"
//                   />
//                 ) : null}
//               </div>
//             </article>
//           ))}
//           {!appointments.length && !error ? <p className="text-slate-600">No appointments yet.</p> : null}
//         </div>
//       </PageShell>
//     </RequireRole>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiRequest, getSessionUser } from "../../lib/api";
import RequireRole from "../components/RequireRole";
import StatusMessage from "../components/StatusMessage";

type Appointment = {
  _id: string;
  appointmentCode?: string;
  tokenNumber: number;
  slotTime: string;
  status: string;
  qrCodeDataUrl?: string;
  serviceId?: {
    name: string;
    durationMinutes: number;
  };
};

export default function DashboardPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState("");
  const user = getSessionUser();

  useEffect(() => {
    apiRequest("/customer/appointments")
      .then(setAppointments)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <RequireRole role="customer" redirectTo="/login">
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 flex items-center justify-center p-6">

        {/* Main Glass Card */}
        <div className="w-full max-w-4xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 p-6">

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-indigo-600">
                Customer Dashboard
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                Welcome{user?.name ? `, ${user.name}` : ""}.
              </p>
            </div>

            <Link
              href="/book-appointment"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2 text-white font-medium shadow-md hover:shadow-lg transition"
            >
              Book Appointment
            </Link>
          </div>

          <StatusMessage error={error} />

          {/* Appointment List */}
          <div className="space-y-4 mt-4">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="rounded-xl border border-slate-100 bg-gradient-to-r from-white to-sky-50 p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">

                  {/* Left Info */}
                  <div>
                    <p className="font-semibold text-slate-800">
                      🏥 {appointment.serviceId?.name || "Appointment"}
                    </p>

                    <p className="text-sm text-slate-600 mt-1">
                      📅 {new Date(appointment.slotTime).toLocaleString()} {" | "}
                      🎫 Token {appointment.tokenNumber} {" | "}
                      <span className="text-indigo-600 font-medium">
                        {appointment.status}
                      </span>
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      ID:{" "}
                      <span className="font-medium text-slate-700">
                        {appointment.appointmentCode || appointment._id}
                      </span>
                    </p>
                  </div>

                  {/* QR */}
                  {appointment.qrCodeDataUrl ? (
                    <img
                      src={appointment.qrCodeDataUrl}
                      alt="QR Code"
                      className="h-28 w-28 rounded-xl border bg-white p-1 shadow-sm"
                    />
                  ) : null}
                </div>
              </div>
            ))}

            {!appointments.length && !error ? (
              <p className="text-center text-slate-500">
                No appointments yet.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </RequireRole>
  );
}