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
            to="Smith"
            time=" 9:15:12 AM"
            subject="Meeting"
            subtitle="Scheduled"
            preview="Hi John, just wanted to follow up on our meeting..."
          />

          <EmailRow
            to="Radha"
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
