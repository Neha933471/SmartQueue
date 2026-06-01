// // // import Link from "next/link";

// // // export default function HomePage() {
// // //   return (
// // //     <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950">
// // //       <section className="mx-auto max-w-5xl">
// // //         <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
// // //           SmartQueue
// // //         </p>
// // //         <h1 className="mt-3 text-4xl font-bold">Appointment and queue management</h1>
// // //         <p className="mt-3 max-w-2xl text-slate-600">
// // //           Book appointments, track queue position, check in, and manage daily operations.
// // //         </p>
// // //         <div className="mt-8 flex flex-wrap gap-3">
// // //           <Link className="rounded-md bg-emerald-700 px-4 py-2 text-white" href="/login">
// // //             Customer Login
// // //           </Link>
// // //           <Link className="rounded-md border border-emerald-700 px-4 py-2" href="/register">
// // //             Register
// // //           </Link>
// // //           <Link className="rounded-md border border-slate-300 px-4 py-2" href="/admin/login">
// // //             Admin Login
// // //           </Link>
// // //           <Link className="rounded-md border border-zinc-300 px-4 py-2" href="/dashboard">
// // //             Customer Dashboard
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }

// // // import Link from "next/link";

// // // export default function HomePage() {
// // //   return (
// // //     <main className="min-h-screen bg-slate-100">
// // //       <div className="mx-auto max-w-5xl px-6 py-16">
// // //         <h1 className="text-5xl font-bold text-center text-slate-800">
// // //           SmartQueue
// // //         </h1>

// // //         <p className="mt-4 text-center text-slate-600">
// // //           Appointment and Queue Management System
// // //         </p>

// // //         <div className="mt-10 flex flex-wrap justify-center gap-4">
// // //           <Link
// // //             href="/login"
// // //             className="rounded-lg bg-green-600 px-6 py-3 text-white"
// // //           >
// // //             Customer Login
// // //           </Link>

// // //           <Link
// // //             href="/register"
// // //             className="rounded-lg bg-blue-600 px-6 py-3 text-white"
// // //           >
// // //             Register
// // //           </Link>

// // //           <Link
// // //             href="/admin/login"
// // //             className="rounded-lg bg-purple-600 px-6 py-3 text-white"
// // //           >
// // //             Admin Login
// // //           </Link>

// // //           <Link
// // //             href="/dashboard"
// // //             className="rounded-lg bg-gray-800 px-6 py-3 text-white"
// // //           >
// // //             Dashboard
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // import Link from "next/link";
// // import {
// //   CalendarCheck,
// //   Clock3,
// //   BellRing,
// //   Activity,
// // } from "lucide-react";

// // export default function HomePage() {
// //   return (
// //     <div className="min-h-screen bg-slate-50">

// //       {/* Navbar */}
// //       <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
// //         <h1 className="text-3xl font-bold text-violet-700">
// //           SmartQueue
// //         </h1>

// //         <div className="flex items-center gap-4">
// //           <Link
// //             href="/login"
// //             className="text-violet-700 font-medium hover:underline"
// //           >
// //             Login
// //           </Link>

// //           <Link
// //             href="/register"
// //             className="bg-violet-700 text-white px-5 py-2 rounded-xl hover:bg-violet-800"
// //           >
// //             Register
// //           </Link>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="px-8 py-24 text-center bg-gradient-to-br from-purple-700 via-violet-800 to-purple-900 text-white">
// //         <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto">
// //           Smart Appointment & Queue Booking System
// //         </h1>

// //         <p className="mt-8 text-lg md:text-xl text-violet-100 max-w-2xl mx-auto">
// //           Book appointments, monitor live queue status and save valuable time.
// //         </p>

// //         <div className="mt-10 flex justify-center gap-5 flex-wrap">

// //           <Link
// //             href="/login"
// //             className="bg-white text-violet-700 px-8 py-4 rounded-2xl font-semibold"
// //           >
// //             Customer Login
// //           </Link>

// //           <Link
// //             href="/register"
// //             className="border border-white px-8 py-4 rounded-2xl font-semibold"
// //           >
// //             Register
// //           </Link>

// //           <Link
// //             href="/admin/login"
// //             className="bg-violet-600 px-8 py-4 rounded-2xl font-semibold"
// //           >
// //             Admin Login
// //           </Link>

// //         </div>
// //       </section>

// //       {/* Features */}
// //       <section className="px-8 py-20">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-800">
// //             Powerful Features
// //           </h2>

// //           <p className="text-gray-500 mt-4">
// //             Everything you need for seamless appointment management
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

// //           <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl">
// //             <CalendarCheck
// //               size={40}
// //               className="text-violet-700 mb-5"
// //             />

// //             <h3 className="text-2xl font-semibold">
// //               Easy Booking
// //             </h3>

// //             <p className="text-gray-500 mt-3">
// //               Quickly schedule appointments in just a few clicks.
// //             </p>
// //           </div>

// //           <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl">
// //             <Clock3
// //               size={40}
// //               className="text-violet-700 mb-5"
// //             />

// //             <h3 className="text-2xl font-semibold">
// //               Live Queue
// //             </h3>

// //             <p className="text-gray-500 mt-3">
// //               Track real-time queue progress and reduce waiting time.
// //             </p>
// //           </div>

// //           <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl">
// //             <BellRing
// //               size={40}
// //               className="text-violet-700 mb-5"
// //             />

// //             <h3 className="text-2xl font-semibold">
// //               Notifications
// //             </h3>

// //             <p className="text-gray-500 mt-3">
// //               Get instant updates about appointments and queues.
// //             </p>
// //           </div>

// //           <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl">
// //             <Activity
// //               size={40}
// //               className="text-violet-700 mb-5"
// //             />

// //             <h3 className="text-2xl font-semibold">
// //               Smart Management
// //             </h3>

// //             <p className="text-gray-500 mt-3">
// //               Improve efficiency with organized appointment handling.
// //             </p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* How It Works */}
// //       <section className="px-8 py-20 bg-white">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-800">
// //             How It Works
// //           </h2>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

// //           <div className="bg-slate-100 rounded-3xl p-8 text-center">
// //             <div className="w-16 h-16 bg-violet-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
// //               1
// //             </div>

// //             <h3 className="text-2xl font-semibold mt-6">
// //               Book Appointment
// //             </h3>

// //             <p className="text-gray-500 mt-3">
// //               Choose service, date and preferred slot.
// //             </p>
// //           </div>

// //           <div className="bg-slate-100 rounded-3xl p-8 text-center">
// //             <div className="w-16 h-16 bg-violet-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
// //               2
// //             </div>

// //             <h3 className="text-2xl font-semibold mt-6">
// //               Track Queue
// //             </h3>

// //             <p className="text-gray-500 mt-3">
// //               Monitor live queue status from anywhere.
// //             </p>
// //           </div>

// //           <div className="bg-slate-100 rounded-3xl p-8 text-center">
// //             <div className="w-16 h-16 bg-violet-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
// //               3
// //             </div>

// //             <h3 className="text-2xl font-semibold mt-6">
// //               Visit on Time
// //             </h3>

// //             <p className="text-gray-500 mt-3">
// //               Arrive only when your turn is near.
// //             </p>
// //           </div>

// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-slate-900 text-white text-center py-6">
// //         <p>© 2026 SmartQueue. All Rights Reserved.</p>
// //       </footer>

// //     </div>
// //   );
// // }



// import Link from "next/link";
// import {
//   CalendarCheck,
//   Clock3,
//   BellRing,
//   Activity,
// } from "lucide-react";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-slate-50">

//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
//         <h1 className="text-3xl font-bold text-violet-700">
//           SmartQueue
//         </h1>

//         <div className="flex gap-4">
//           <Link
//             href="/login"
//             className="text-violet-700 font-medium"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             className="bg-violet-700 text-white px-5 py-2 rounded-xl"
//           >
//             Register
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="px-8 py-24 text-center bg-gradient-to-br from-purple-700 via-violet-800 to-purple-900 text-white">

//         <h1 className="text-5xl md:text-6xl font-bold">
//           Smart Appointment & Queue Booking System
//         </h1>

//         <p className="mt-6 text-lg text-violet-100 max-w-2xl mx-auto">
//           Book appointments, monitor live queue status and save valuable time.
//         </p>

//         <div className="mt-10 flex justify-center gap-4 flex-wrap">

//           <Link
//             href="/login"
//             className="bg-white text-violet-700 px-6 py-3 rounded-xl font-semibold"
//           >
//             Customer Login
//           </Link>

//           <Link
//             href="/register"
//             className="border border-white px-6 py-3 rounded-xl font-semibold"
//           >
//             Register
//           </Link>

//           <Link
//             href="/admin/login"
//             className="bg-violet-600 px-6 py-3 rounded-xl font-semibold"
//           >
//             Admin Login
//           </Link>

//           <Link
//             href="/dashboard"
//             className="bg-green-600 px-6 py-3 rounded-xl font-semibold text-white"
//           >
//             Dashboard
//           </Link>

//         </div>

//       </section>

//       {/* Features */}
//       <section className="px-8 py-20">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800">
//             Powerful Features
//           </h2>

//           <p className="text-gray-500 mt-4">
//             Everything you need for seamless appointment management
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

//           <div className="bg-white rounded-3xl p-8 shadow-md">
//             <CalendarCheck
//               size={40}
//               className="text-violet-700 mb-5"
//             />
//             <h3 className="text-2xl font-semibold">
//               Easy Booking
//             </h3>
//             <p className="text-gray-500 mt-3">
//               Quickly schedule appointments in a few clicks.
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-md">
//             <Clock3
//               size={40}
//               className="text-violet-700 mb-5"
//             />
//             <h3 className="text-2xl font-semibold">
//               Live Queue
//             </h3>
//             <p className="text-gray-500 mt-3">
//               Track real-time queue progress.
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-md">
//             <BellRing
//               size={40}
//               className="text-violet-700 mb-5"
//             />
//             <h3 className="text-2xl font-semibold">
//               Notifications
//             </h3>
//             <p className="text-gray-500 mt-3">
//               Receive instant updates and reminders.
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl p-8 shadow-md">
//             <Activity
//               size={40}
//               className="text-violet-700 mb-5"
//             />
//             <h3 className="text-2xl font-semibold">
//               Smart Management
//             </h3>
//             <p className="text-gray-500 mt-3">
//               Manage appointments efficiently.
//             </p>
//           </div>

//         </div>

//       </section>

//       {/* How It Works */}
//       <section className="px-8 py-20 bg-white">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800">
//             How It Works
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           <div className="bg-slate-100 rounded-3xl p-8 text-center">
//             <div className="w-16 h-16 bg-violet-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
//               1
//             </div>

//             <h3 className="text-2xl font-semibold mt-6">
//               Book Appointment
//             </h3>

//             <p className="text-gray-500 mt-3">
//               Choose service, date and preferred slot.
//             </p>
//           </div>

//           <div className="bg-slate-100 rounded-3xl p-8 text-center">
//             <div className="w-16 h-16 bg-violet-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
//               2
//             </div>

//             <h3 className="text-2xl font-semibold mt-6">
//               Track Queue
//             </h3>

//             <p className="text-gray-500 mt-3">
//               Monitor queue status in real time.
//             </p>
//           </div>

//           <div className="bg-slate-100 rounded-3xl p-8 text-center">
//             <div className="w-16 h-16 bg-violet-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
//               3
//             </div>

//             <h3 className="text-2xl font-semibold mt-6">
//               Visit on Time
//             </h3>

//             <p className="text-gray-500 mt-3">
//               Arrive only when your turn is near.
//             </p>
//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }


import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-100 to-cyan-100">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold text-violet-700">
          SmartQueue
        </h1>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-xl bg-violet-600 px-5 py-2 text-white shadow-md hover:bg-violet-700"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-white px-5 py-2 text-violet-700 shadow-md border"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-slate-800">
          Smart Appointment & Queue
          <br />
          Booking System
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          Book appointments, monitor live queue status and save valuable
          time with SmartQueue.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/login"
            className="rounded-2xl bg-violet-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-violet-700"
          >
            Customer Login
          </Link>

          <Link
            href="/register"
            className="rounded-2xl bg-white px-8 py-4 text-violet-700 font-semibold shadow-lg"
          >
            Register
          </Link>

          <Link
            href="/admin/login"
            className="rounded-2xl bg-sky-500 px-8 py-4 text-white font-semibold shadow-lg hover:bg-sky-600"
          >
            Admin Login
          </Link>

          <Link
            href="/dashboard"
            className="rounded-2xl bg-green-500 px-8 py-4 text-white font-semibold shadow-lg hover:bg-green-600"
          >
            Dashboard
          </Link>

        </div>

      </section>

      {/* Features */}
      <section className="px-6 py-16">

        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Powerful Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl">📅</div>
            <h3 className="mt-4 text-xl font-semibold text-violet-700">
              Easy Booking
            </h3>
            <p className="mt-2 text-slate-600">
              Schedule appointments in a few clicks.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl">⏳</div>
            <h3 className="mt-4 text-xl font-semibold text-violet-700">
              Live Queue
            </h3>
            <p className="mt-2 text-slate-600">
              Track queue progress in real time.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl">🔔</div>
            <h3 className="mt-4 text-xl font-semibold text-violet-700">
              Notifications
            </h3>
            <p className="mt-2 text-slate-600">
              Receive instant updates and reminders.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="text-4xl">📊</div>
            <h3 className="mt-4 text-xl font-semibold text-violet-700">
              Smart Management
            </h3>
            <p className="mt-2 text-slate-600">
              Manage appointments efficiently.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="px-6 py-16">

        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Our Impact
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-5xl font-bold text-violet-700">500+</h3>
            <p className="mt-3 text-slate-600">
              Appointments Booked
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-5xl font-bold text-violet-700">100+</h3>
            <p className="mt-3 text-slate-600">
              Daily Users
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <h3 className="text-5xl font-bold text-violet-700">99%</h3>
            <p className="mt-3 text-slate-600">
              User Satisfaction
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-white border-t">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h2 className="text-2xl font-bold text-violet-700">
                SmartQueue
              </h2>

              <p className="mt-3 text-slate-600">
                Smart Appointment & Queue Booking System for efficient
                appointment management.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Quick Links
              </h3>

              <div className="mt-3 flex flex-col gap-2">
                <Link href="/login">Customer Login</Link>
                <Link href="/register">Register</Link>
                <Link href="/admin/login">Admin Login</Link>
                <Link href="/dashboard">Dashboard</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Contact
              </h3>

              <p className="mt-3 text-slate-600">
                📧 smartqueue@gmail.com
              </p>

              <p className="text-slate-600">
                📞 +91 9876543210
              </p>

              <p className="text-slate-600">
                📍 Durgapur, India
              </p>
            </div>

          </div>

          <div className="mt-8 border-t pt-4 text-center text-slate-1000 ">
            © 2026 SmartQueue. All Rights Reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}