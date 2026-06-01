// "use client";

// import { useState } from "react";
// import { apiRequest } from "../../lib/api";
// import PageShell from "../components/PageShell";
// import QrScanner from "../components/QrScanner";
// import RequireRole from "../components/RequireRole";
// import StatusMessage from "../components/StatusMessage";

// export default function CheckInPage() {
//   const [appointmentId, setAppointmentId] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const extractAppointmentId = (payload: string) => {
//     try {
//       const parsed = JSON.parse(payload);
//       return parsed.appointmentId || payload;
//     } catch (_error) {
//       return payload;
//     }
//   };

//   const checkIn = async (id: string) => {
//     setError("");
//     setSuccess("");

//     try {
//       await apiRequest("/customer/queue/check-in", {
//         method: "POST",
//         body: JSON.stringify({ appointmentId: id })
//       });
//       setSuccess("Check-in successful.");
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Check-in failed");
//     }
//   };

//   const checkInQrPayload = async (payload: string) => {
//     setError("");
//     setSuccess("");

//     try {
//       await apiRequest("/customer/qr/check-in", {
//         method: "POST",
//         body: JSON.stringify({ payload })
//       });
//       setAppointmentId(extractAppointmentId(payload));
//       setSuccess("QR check-in successful.");
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "QR check-in failed");
//     }
//   };

//   const submit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     await checkIn(appointmentId);
//   };

//   return (
//     <RequireRole role="customer" redirectTo="/login">
//       <PageShell>
//         <h1 className="text-2xl font-bold">QR Check-In</h1>
//         <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
//           <QrScanner
//             onScan={(payload) => {
//               checkInQrPayload(payload);
//             }}
//           />
//           <form onSubmit={submit} className="space-y-4 rounded-md border bg-white p-4">
//             <h2 className="font-semibold">Manual Check-In</h2>
//             <input
//               className="w-full rounded-md border px-3 py-2"
//               placeholder="Appointment ID from QR code"
//               value={appointmentId}
//               onChange={(event) => setAppointmentId(event.target.value)}
//             />
//             <StatusMessage error={error} success={success} />
//             <button className="rounded-md bg-emerald-700 px-4 py-2 text-white">Check In</button>
//           </form>
//         </div>
//       </PageShell>
//     </RequireRole>
//   );
// }


"use client";

import { useState } from "react";
import { apiRequest } from "../../lib/api";
import QrScanner from "../components/QrScanner";
import RequireRole from "../components/RequireRole";
import StatusMessage from "../components/StatusMessage";

export default function CheckInPage() {
  const [appointmentId, setAppointmentId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const extractAppointmentId = (payload: string) => {
    try {
      const parsed = JSON.parse(payload);
      return parsed.appointmentId || payload;
    } catch {
      return payload;
    }
  };

  const checkIn = async (id: string) => {
    setError("");
    setSuccess("");

    try {
      await apiRequest("/customer/queue/check-in", {
        method: "POST",
        body: JSON.stringify({ appointmentId: id }),
      });
      setSuccess("Check-in successful.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Check-in failed");
    }
  };

  const checkInQrPayload = async (payload: string) => {
    setError("");
    setSuccess("");

    try {
      await apiRequest("/customer/qr/check-in", {
        method: "POST",
        body: JSON.stringify({ payload }),
      });
      setAppointmentId(extractAppointmentId(payload));
      setSuccess("QR check-in successful.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "QR check-in failed");
    }
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkIn(appointmentId);
  };

  return (
    <RequireRole role="customer" redirectTo="/login">
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 flex items-center justify-center p-6">

        {/* Main Glass Card */}
        <div className="w-full max-w-5xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 p-6">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-indigo-600">
              QR Check-In
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Scan QR or enter appointment ID manually
            </p>
          </div>

          <StatusMessage error={error} success={success} />

          {/* Layout */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

            {/* QR Scanner Card */}
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-sky-50 p-4 shadow-sm hover:shadow-md transition">
              <QrScanner
                onScan={(payload) => {
                  checkInQrPayload(payload);
                }}
              />
            </div>

            {/* Manual Check-In Card */}
            <form
              onSubmit={submit}
              className="rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-sky-50 p-5 shadow-sm hover:shadow-md transition space-y-4"
            >
              <h2 className="text-lg font-semibold text-slate-800">
                Manual Check-In
              </h2>

              <input
                className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Appointment ID from QR code"
                value={appointmentId}
                onChange={(e) => setAppointmentId(e.target.value)}
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-white font-medium shadow-md hover:shadow-lg transition"
              >
                Check In
              </button>
            </form>

          </div>
        </div>
      </div>
    </RequireRole>
  );
}