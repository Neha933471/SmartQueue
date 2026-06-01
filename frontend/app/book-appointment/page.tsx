// "use client";

// import { useEffect, useState } from "react";
// import { apiRequest } from "../../lib/api";
// import BookingConfirmation from "../components/BookingConfirmation";
// import PageShell from "../components/PageShell";
// import RequireRole from "../components/RequireRole";
// import StatusMessage from "../components/StatusMessage";
// import { useToast } from "../components/Toast";

// type Service = { _id: string; name: string; durationMinutes: number };
// type Slot = { slotTime: string; available: boolean };
// type Appointment = {
//   appointmentCode?: string;
//   tokenNumber: number;
//   slotTime: string;
//   qrCodeDataUrl?: string;
//   serviceId?: { name: string };
// };

// export default function BookAppointmentPage() {
//   const { showToast } = useToast();
//   const [services, setServices] = useState<Service[]>([]);
//   const [slots, setSlots] = useState<Slot[]>([]);
//   const [serviceId, setServiceId] = useState("");
//   const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
//   const [preferredTime, setPreferredTime] = useState("");
//   const [slotTime, setSlotTime] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmed, setConfirmed] = useState<Appointment | null>(null);

//   useEffect(() => {
//     apiRequest<Service[]>("/customer/services")
//       .then((data) => {
//         setServices(data);
//         setServiceId(data[0]?._id || "");
//       })
//       .catch((err) => setError(err instanceof Error ? err.message : "Failed to load services"));
//   }, []);

//   useEffect(() => {
//     if (!serviceId || !date) return;

//     apiRequest<Slot[]>(`/customer/appointments/availability?serviceId=${serviceId}&date=${date}`)
//       .then(setSlots)
//       .catch((err) => setError(err instanceof Error ? err.message : "Failed to load slots"));
//   }, [serviceId, date]);

//   const submit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!serviceId || !slotTime) {
//       setError("Please select consultation type and time slot.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const appointment = await apiRequest<Appointment>("/customer/appointments", {
//         method: "POST",
//         body: JSON.stringify({ serviceId, slotTime, preferredTime: preferredTime || undefined })
//       });
//       setConfirmed(appointment);
//       showToast("Appointment booked successfully!", "success");
//     } catch (err) {
//       const message = err instanceof Error ? err.message : "Booking failed";
//       setError(message);
//       showToast(message, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <RequireRole role="customer" redirectTo="/login">
//       <PageShell>
//         <h1 className="text-2xl font-bold">Book Appointment</h1>
//         <p className="mt-1 text-slate-600">Select consultation type and an available slot.</p>
//         <form onSubmit={submit} className="mt-6 grid max-w-2xl gap-4">
//           <label className="grid gap-1 text-sm">
//             <span className="font-medium">Consultation Type</span>
//             <select
//               className="rounded-md border px-3 py-2"
//               value={serviceId}
//               onChange={(event) => setServiceId(event.target.value)}
//               required
//             >
//               {services.map((service) => (
//                 <option key={service._id} value={service._id}>
//                   {service.name} ({service.durationMinutes} min)
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label className="grid gap-1 text-sm">
//             <span className="font-medium">Date</span>
//             <input
//               className="rounded-md border px-3 py-2"
//               type="date"
//               value={date}
//               min={new Date().toISOString().slice(0, 10)}
//               onChange={(event) => setDate(event.target.value)}
//               required
//             />
//           </label>
//           <label className="grid gap-1 text-sm">
//             <span className="font-medium">Preferred Time (optional)</span>
//             <input
//               className="rounded-md border px-3 py-2"
//               placeholder="e.g. Morning, 10:30 AM"
//               value={preferredTime}
//               onChange={(event) => setPreferredTime(event.target.value)}
//             />
//           </label>
//           <label className="grid gap-1 text-sm">
//             <span className="font-medium">Available Slot</span>
//             <select
//               className="rounded-md border px-3 py-2"
//               value={slotTime}
//               onChange={(event) => setSlotTime(event.target.value)}
//               required
//             >
//               <option value="">Select available slot</option>
//               {slots
//                 .filter((slot) => slot.available)
//                 .map((slot) => (
//                   <option key={slot.slotTime} value={slot.slotTime}>
//                     {new Date(slot.slotTime).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit"
//                     })}
//                   </option>
//                 ))}
//             </select>
//           </label>
//           <StatusMessage error={error} />
//           <button
//             disabled={!slotTime || loading}
//             className="rounded-md bg-emerald-700 px-4 py-2 text-white disabled:bg-slate-400"
//           >
//             {loading ? "Booking…" : "Confirm Booking"}
//           </button>
//         </form>
//         {confirmed ? (
//           <BookingConfirmation appointment={confirmed} onClose={() => setConfirmed(null)} />
//         ) : null}
//       </PageShell>
//     </RequireRole>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "../../lib/api";
import BookingConfirmation from "../components/BookingConfirmation";
import RequireRole from "../components/RequireRole";
import StatusMessage from "../components/StatusMessage";
import { useToast } from "../components/Toast";

type Service = { _id: string; name: string; durationMinutes: number };
type Slot = { slotTime: string; available: boolean };
type Appointment = {
  appointmentCode?: string;
  tokenNumber: number;
  slotTime: string;
  qrCodeDataUrl?: string;
  serviceId?: { name: string };
};

export default function BookAppointmentPage() {
  const { showToast } = useToast();

  const [services, setServices] = useState<Service[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [preferredTime, setPreferredTime] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState<Appointment | null>(null);

  useEffect(() => {
    apiRequest<Service[]>("/customer/services")
      .then((data) => {
        setServices(data);
        setServiceId(data[0]?._id || "");
      })
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load services")
      );
  }, []);

  useEffect(() => {
    if (!serviceId || !date) return;

    apiRequest<Slot[]>(
      `/customer/appointments/availability?serviceId=${serviceId}&date=${date}`
    )
      .then(setSlots)
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load slots")
      );
  }, [serviceId, date]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (!serviceId || !slotTime) {
      setError("Please select consultation type and time slot.");
      setLoading(false);
      return;
    }

    try {
      const appointment = await apiRequest<Appointment>(
        "/customer/appointments",
        {
          method: "POST",
          body: JSON.stringify({
            serviceId,
            slotTime,
            preferredTime: preferredTime || undefined,
          }),
        }
      );

      setConfirmed(appointment);
      showToast("Appointment booked successfully!", "success");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Booking failed";

      setError(message);
      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequireRole role="customer" redirectTo="/login">
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 flex items-center justify-center p-6">

        {/* Glass Card */}
        <div className="w-full max-w-3xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 p-6">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-indigo-600">
              Book Appointment
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Select consultation type and an available slot
            </p>
          </div>

          <StatusMessage error={error} />

          {/* Form Card */}
          <form onSubmit={submit} className="mt-4 grid gap-4">

            {/* Service */}
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-700">
                Consultation Type
              </span>
              <select
                className="rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                required
              >
                {services.map((service) => (
                  <option key={service._id} value={service._id}>
                    {service.name} ({service.durationMinutes} min)
                  </option>
                ))}
              </select>
            </label>

            {/* Date */}
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-700">Date</span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                type="date"
                value={date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>

            {/* Preferred Time */}
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-700">
                Preferred Time (optional)
              </span>
              <input
                className="rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="e.g. Morning, 10:30 AM"
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
              />
            </label>

            {/* Slots */}
            <label className="grid gap-1 text-sm">
              <span className="font-medium text-slate-700">
                Available Slot
              </span>
              <select
                className="rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                value={slotTime}
                onChange={(e) => setSlotTime(e.target.value)}
                required
              >
                <option value="">Select available slot</option>
                {slots
                  .filter((slot) => slot.available)
                  .map((slot) => (
                    <option key={slot.slotTime} value={slot.slotTime}>
                      {new Date(slot.slotTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </option>
                  ))}
              </select>
            </label>

            {/* Submit Button */}
            <button
              disabled={!slotTime || loading}
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-white font-medium shadow-md hover:shadow-lg transition disabled:bg-slate-300"
            >
              {loading ? "Booking…" : "Confirm Booking"}
            </button>
          </form>

        </div>

        {/* Confirmation Modal */}
        {confirmed ? (
          <BookingConfirmation
            appointment={confirmed}
            onClose={() => setConfirmed(null)}
          />
        ) : null}
      </div>
    </RequireRole>
  );
}