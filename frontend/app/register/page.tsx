// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { apiRequest } from "../../lib/api";
// import PageShell from "../components/PageShell";
// import StatusMessage from "../components/StatusMessage";
// import { useToast } from "../components/Toast";

// export default function RegisterPage() {
//   const router = useRouter();
//   const { showToast } = useToast();
//   const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
//   const [error, setError] = useState("");

//   const submit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (!form.phone || form.phone.length < 7) {
//       setError("Phone number is required (7–15 digits).");
//       return;
//     }
//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }

//     try {
//       await apiRequest("/customer/auth/register", {
//         method: "POST",
//         body: JSON.stringify(form)
//       });
//       showToast("Account created. Log in to continue.", "success");
//       router.push("/login");
//     } catch (err) {
//       const message = err instanceof Error ? err.message : "Registration failed";
//       setError(message);
//       showToast(message, "error");
//     }
//   };

//   return (
//     <PageShell>
//       <div className="max-w-md">
//         <h1 className="text-2xl font-bold">Register</h1>
//         <form onSubmit={submit} className="mt-6 space-y-4">
//           {(["name", "email", "phone", "password"] as const).map((field) => (
//             <input
//               key={field}
//               className="w-full rounded-md border px-3 py-2"
//               placeholder={field === "name" ? "Full Name" : field[0].toUpperCase() + field.slice(1)}
//               type={
//                 field === "password"
//                   ? "password"
//                   : field === "email"
//                     ? "email"
//                     : field === "phone"
//                       ? "tel"
//                       : "text"
//               }
//               required
//               minLength={field === "phone" ? 7 : field === "password" ? 6 : undefined}
//               value={form[field]}
//               onChange={(event) => setForm({ ...form, [field]: event.target.value })}
//             />
//           ))}
//           <StatusMessage error={error} />
//           <button className="rounded-md bg-emerald-700 px-4 py-2 text-white">Create Account</button>
//         </form>
//       </div>
//     </PageShell>
//   );
// }

// "use client";

// export default function RegisterPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-700 via-purple-800 to-indigo-900 flex items-center justify-center p-6">

//       <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* Left Section */}
//         <div className="bg-gradient-to-br from-violet-700 to-purple-900 text-white p-10 flex flex-col justify-center">

//           <h1 className="text-5xl font-bold">
//             SmartQueue
//           </h1>

//           <p className="mt-4 text-lg text-violet-100">
//             Smart Appointment & Queue Booking System
//           </p>

//           <div className="mt-10 space-y-5">

//             <div className="bg-white/10 p-4 rounded-xl">
//               <h3 className="text-xl font-semibold">
//                 📅 Easy Booking
//               </h3>
//               <p>Book appointments in just a few clicks.</p>
//             </div>

//             <div className="bg-white/10 p-4 rounded-xl">
//               <h3 className="text-xl font-semibold">
//                 ⏳ Live Queue Tracking
//               </h3>
//               <p>Monitor your queue position in real time.</p>
//             </div>

//             <div className="bg-white/10 p-4 rounded-xl">
//               <h3 className="text-xl font-semibold">
//                 🔔 Instant Notifications
//               </h3>
//               <p>Receive reminders and status updates.</p>
//             </div>

//           </div>

//         </div>

//         {/* Right Section */}
//         <div className="p-10 flex flex-col justify-center">

//           <h2 className="text-4xl font-bold text-center text-violet-700">
//             Create Account
//           </h2>

//           <p className="text-center text-gray-500 mt-2 mb-8">
//             Join SmartQueue Today
//           </p>

//           <form className="space-y-4">

//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
//             />

//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500"
//             />

//             <button
//               type="submit"
//               className="w-full bg-violet-700 text-white py-4 rounded-xl font-semibold hover:bg-violet-800 transition"
//             >
//               Create Account
//             </button>

//           </form>

//           <p className="text-center text-gray-500 mt-6">
//             Already have an account?
//             <span className="text-violet-700 font-semibold ml-1">
//               Login
//             </span>
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }
"use client";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-100 to-cyan-100 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}
        <div className="bg-gradient-to-br from-violet-400 via-sky-400 to-cyan-400 text-white p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            SmartQueue
          </h1>

          <p className="mt-4 text-lg text-blue-50">
            Smart Appointment & Queue Booking System
          </p>

          <div className="mt-10 space-y-5">

            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <h3 className="text-xl font-semibold">
                📅 Easy Booking
              </h3>
              <p>Book appointments in just a few clicks.</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <h3 className="text-xl font-semibold">
                ⏳ Live Queue Tracking
              </h3>
              <p>Monitor your queue position in real time.</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <h3 className="text-xl font-semibold">
                🔔 Instant Notifications
              </h3>
              <p>Receive reminders and status updates.</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-center text-violet-600">
            Create Account
          </h2>

          <p className="text-center text-slate-500 mt-2 mb-8">
            Join SmartQueue Today
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />

            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-4 rounded-xl font-semibold hover:bg-violet-600 transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center text-slate-500 mt-6">
            Already have an account?
            <span className="text-violet-600 font-semibold ml-1 cursor-pointer">
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}