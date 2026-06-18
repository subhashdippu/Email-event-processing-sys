import React from "react";

export default function EmailDashboard() {
  return (
    <div className="h-screen w-full bg-white flex font-sans">
      <main className="flex-1">
        {/* Top bar */}
        <div className="flex items-center gap-4 px-6 py-4 border-b">
          <input
            placeholder="Search"
            className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm outline-none"
          />
          <button className="text-gray-500">⚙️</button>
          <button className="text-gray-500">⟳</button>
        </div>

        {/* Email list */}
        <div className="divide-y">
          <EmailRow
            to="John Smith"
            time="Tue 9:15:12 AM"
            subject="Meeting follow-up"
            subtitle="Scheduled"
            preview="Hi John, just wanted to follow up on our meeting..."
          />

          <EmailRow
            to="Olive"
            time="Thu 8:15:12 PM"
            subject="Ramit, great to meet you - you'll love it"
            subtitle=""
            preview="Hi Olive, just wanted to follow up on our meeting..."
          />
        </div>
      </main>
    </div>
  );
}

function EmailRow({ to, time, subject, subtitle, preview }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer">
      <div className="flex-1">
        <div className="text-sm text-gray-600">To: {to}</div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
            {time}
          </span>
          <span className="font-medium text-sm">{subject}</span>
          {subtitle && <span className="text-gray-400">- {subtitle}</span>}
        </div>
        <div className="text-sm text-gray-400 truncate">{preview}</div>
      </div>
      <div className="text-gray-300">☆</div>
    </div>
  );
}

// ---------------- COMPOSE EMAIL PAGE ----------------
// export function ComposeEmail() {
//   return (
//     <div className="h-screen bg-white flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between px-6 py-4 border-b">
//         <div className="flex items-center gap-3 text-lg font-medium">
//           <span className="text-xl">←</span>
//           Compose New Email
//         </div>
//         <div className="flex items-center gap-3">
//           <button className="p-2 rounded-full border">📎</button>
//           <button className="p-2 rounded-full border">⏰</button>
//           <button className="px-4 py-2 rounded-full border border-green-500 text-green-600 font-medium">
//             Send Later
//           </button>
//         </div>
//       </div>

//       {/* Form */}
//       <div className="flex-1 px-8 py-6 space-y-6">
//         <div className="flex items-center gap-6">
//           <label className="w-20 text-sm text-gray-600">From</label>
//           <select className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
//             <option>oliver.brown@domain.io</option>
//           </select>
//         </div>

//         <div className="flex items-center gap-6">
//           <label className="w-20 text-sm text-gray-600">To</label>
//           <input
//             placeholder="recipient@example.com"
//             className="flex-1 border-b outline-none py-2"
//           />
//           <button className="text-green-600 text-sm">Upload List</button>
//         </div>

//         <div className="flex items-center gap-6">
//           <label className="w-20 text-sm text-gray-600">Subject</label>
//           <input
//             placeholder="Subject"
//             className="flex-1 border-b outline-none py-2"
//           />
//         </div>

//         <div className="flex items-center gap-10">
//           <div className="flex items-center gap-3">
//             <span className="text-sm text-gray-600">
//               Delay between 2 emails
//             </span>
//             <input
//               type="number"
//               className="w-16 border rounded-md px-2 py-1"
//               placeholder="00"
//             />
//           </div>
//           <div className="flex items-center gap-3">
//             <span className="text-sm text-gray-600">Hourly Limit</span>
//             <input
//               type="number"
//               className="w-16 border rounded-md px-2 py-1"
//               placeholder="00"
//             />
//           </div>
//         </div>

//         {/* Editor */}
//         <div className="bg-gray-50 rounded-xl p-4 h-[420px] flex flex-col">
//           <div className="text-gray-400 text-sm mb-3">Type Your Reply...</div>
//           <div className="border-t pt-3 flex gap-4 text-gray-500">
//             <span>↺</span>
//             <span>↻</span>
//             <span>Tt</span>
//             <span className="font-bold">B</span>
//             <span className="italic">I</span>
//             <span className="underline">U</span>
//             <span>•</span>
//             <span>1.</span>
//             <span>❝</span>
//             <span>S</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
