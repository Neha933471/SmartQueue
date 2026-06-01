// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { apiRequest, saveSession } from "../../lib/api";
// // import PageShell from "../components/PageShell";
// // import StatusMessage from "../components/StatusMessage";

// // export default function LoginPage() {
// //   const router = useRouter();
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");

// //   const submit = async (event) => {
// //     event.preventDefault();
// //     setError("");

// //     try {
// //       const user = await apiRequest("/customer/auth/login", {
// //         method: "POST",
// //         body: JSON.stringify(form)
// //       });
// //       if (user.role !== "customer") {
// //         setError("Please use the admin login page.");
// //         return;
// //       }
// //       saveSession(user);
// //       router.push("/dashboard");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   return (
// //     <PageShell>
// //       <div className="max-w-md">
// //         <h1 className="text-2xl font-bold">Customer Login</h1>
// //         <form onSubmit={submit} className="mt-6 space-y-4">
// //           <input
// //             className="w-full rounded-md border px-3 py-2"
// //             placeholder="Email"
// //             type="email"
// //             value={form.email}
// //             onChange={(event) => setForm({ ...form, email: event.target.value })}
// //           />
// //           <input
// //             className="w-full rounded-md border px-3 py-2"
// //             placeholder="Password"
// //             type="password"
// //             value={form.password}
// //             onChange={(event) => setForm({ ...form, password: event.target.value })}
// //           />
// //           <StatusMessage error={error} />
// //           <button className="rounded-md bg-emerald-700 px-4 py-2 text-white">Login</button>
// //         </form>
// //       </div>
// //     </PageShell>
// //   );
// // }




// // ```tsx
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { apiRequest, saveSession } from "../../lib/api";
// import PageShell from "../components/PageShell";
// import StatusMessage from "../components/StatusMessage";

// export default function LoginPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const submit = async (event) => {
//     event.preventDefault();
//     setError("");

//     try {
//       const user = await apiRequest("/customer/auth/login", {
//         method: "POST",
//         body: JSON.stringify(form),
//       });

//       if (user.role !== "customer") {
//         setError("Please use the admin login page.");
//         return;
//       }

//       saveSession(user);
//       router.push("/dashboard");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <PageShell>
//       <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-700 flex items-center justify-center px-6 py-10">

//         <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//           {/* Left Side */}
//           <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-violet-700 to-indigo-900 text-white p-10">

//             <h1 className="text-5xl font-bold mb-4">
//               SmartQueue
//             </h1>

//             <p className="text-lg text-violet-100 mb-8">
//               Smart Appointment & Queue Booking System
//             </p>

//             <div className="space-y-5">

//               <div className="bg-white/10 p-4 rounded-2xl">
//                 <h3 className="font-semibold text-xl">
//                   📅 Easy Appointment Booking
//                 </h3>
//                 <p className="text-violet-100">
//                   Schedule appointments quickly and easily.
//                 </p>
//               </div>

//               <div className="bg-white/10 p-4 rounded-2xl">
//                 <h3 className="font-semibold text-xl">
//                   ⏳ Real-Time Queue Tracking
//                 </h3>
//                 <p className="text-violet-100">
//                   Track your queue position live.
//                 </p>
//               </div>

//               <div className="bg-white/10 p-4 rounded-2xl">
//                 <h3 className="font-semibold text-xl">
//                   🔔 Instant Notifications
//                 </h3>
//                 <p className="text-violet-100">
//                   Get updates and reminders instantly.
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* Right Side */}
//           <div className="p-10 flex flex-col justify-center">

//             <h2 className="text-4xl font-bold text-center text-violet-700">
//               Customer Login
//             </h2>

//             <p className="text-center text-gray-500 mt-2 mb-8">
//               Welcome Back 👋
//             </p>

//             <form onSubmit={submit} className="space-y-5">

//               <input
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 placeholder="Email Address"
//                 type="email"
//                 value={form.email}
//                 onChange={(event) =>
//                   setForm({
//                     ...form,
//                     email: event.target.value,
//                   })
//                 }
//               />

//               <input
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
//                 placeholder="Password"
//                 type="password"
//                 value={form.password}
//                 onChange={(event) =>
//                   setForm({
//                     ...form,
//                     password: event.target.value,
//                   })
//                 }
//               />

//               <StatusMessage error={error} />

//               <button
//                 type="submit"
//                 className="w-full bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-xl font-semibold transition"
//               >
//                 Login
//               </button>

//             </form>

//           </div>

//         </div>

//       </div>
//     </PageShell>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { apiRequest, saveSession } from "../../lib/api";
// import PageShell from "../components/PageShell";
// import StatusMessage from "../components/StatusMessage";

// export default function LoginPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const submit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     try {
//       const user = await apiRequest("/customer/auth/login", {
//         method: "POST",
//         body: JSON.stringify(form),
//       });

//       if (user.role !== "customer") {
//         setError("Please use the admin login page.");
//         return;
//       }

//       saveSession(user);
//       router.push("/dashboard");
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Login failed");
//     }
//   };

//   return (
//     <PageShell>
//       <div className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-100 to-cyan-100 flex items-center justify-center px-6 py-10">

//         <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//           {/* Left Side */}
//           <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-violet-400 via-sky-400 to-cyan-400 text-white p-10">

//             <h1 className="text-5xl font-bold mb-4">
//               SmartQueue
//             </h1>

//             <p className="text-lg text-blue-50 mb-8">
//               Smart Appointment & Queue Booking System
//             </p>

//             <div className="space-y-5">

//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <h3 className="font-semibold text-xl">
//                   📅 Easy Appointment Booking
//                 </h3>
//                 <p>
//                   Schedule appointments quickly and easily.
//                 </p>
//               </div>

//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <h3 className="font-semibold text-xl">
//                   ⏳ Real-Time Queue Tracking
//                 </h3>
//                 <p>
//                   Track your queue position live.
//                 </p>
//               </div>

//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <h3 className="font-semibold text-xl">
//                   🔔 Instant Notifications
//                 </h3>
//                 <p>
//                   Get updates and reminders instantly.
//                 </p>
//               </div>

//             </div>

//           </div>

//           {/* Right Side */}
//           <div className="p-10 flex flex-col justify-center">

//             <h2 className="text-4xl font-bold text-center text-violet-600">
//               Customer Login
//             </h2>

//             <p className="text-center text-slate-500 mt-2 mb-8">
//               Welcome Back 👋
//             </p>

//             <form onSubmit={submit} className="space-y-5">

//               <input
//                 className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
//                 placeholder="Email Address"
//                 type="email"
//                 value={form.email}
//                 onChange={(event) =>
//                   setForm({
//                     ...form,
//                     email: event.target.value,
//                   })
//                 }
//               />

//               <input
//                 className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
//                 placeholder="Password"
//                 type="password"
//                 value={form.password}
//                 onChange={(event) =>
//                   setForm({
//                     ...form,
//                     password: event.target.value,
//                   })
//                 }
//               />

//               <StatusMessage error={error} />

//               <button
//                 type="submit"
//                 className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-xl font-semibold transition"
//               >
//                 Login
//               </button>

//             </form>

//           </div>

//         </div>

//       </div>
//     </PageShell>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest, saveSession } from "../../lib/api";
import StatusMessage from "../components/StatusMessage";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      const user = await apiRequest("/customer/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (user.role !== "customer") {
        setError("Please use the admin login page.");
        return;
      }

      saveSession(user);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-purple-100 flex items-center justify-center p-6">

      {/* Glass Container */}
      <div className="w-full max-w-5xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/40 overflow-hidden grid md:grid-cols-2">

        {/* Left Panel (Marketing) */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 text-white p-10">

          <h1 className="text-5xl font-bold mb-4">
            SmartQueue
          </h1>

          <p className="text-indigo-50 mb-8">
            Smart Appointment & Queue Booking System
          </p>

          <div className="space-y-5">

            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <h3 className="font-semibold text-xl">
                📅 Easy Appointment Booking
              </h3>
              <p>Schedule appointments quickly and easily.</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <h3 className="font-semibold text-xl">
                ⏳ Real-Time Queue Tracking
              </h3>
              <p>Track your queue position live.</p>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <h3 className="font-semibold text-xl">
                🔔 Instant Notifications
              </h3>
              <p>Get updates and reminders instantly.</p>
            </div>

          </div>

        </div>

        {/* Right Panel (Login) */}
        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-center text-indigo-600">
            Customer Login
          </h2>

          <p className="text-center text-slate-600 mt-2 mb-8">
            Welcome Back 👋
          </p>

          <form onSubmit={submit} className="space-y-5">

            <input
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <StatusMessage error={error} />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 font-semibold shadow-md hover:shadow-lg transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
