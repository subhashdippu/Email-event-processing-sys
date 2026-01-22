// Radha
import React from "react";
import { Link, Outlet } from "react-router-dom";
import ScheduleEmail from "./scheduledEmail";
import { ComposeEmail } from "../App";
export default function EmailDashboard() {
  return (
    <div className="h-screen w-full bg-white flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r px-4 py-5 flex flex-col">
        <div className="text-2xl font-bold mb-6">Event Management</div>

        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="rounded-full"
          />
          <div className="text-sm">
            <div className="font-semibold">Subhash Prasad</div>
            <div className="text-gray-400">eventManagement@subhash.in</div>
          </div>
        </div>

        <Link to="/compose-email">
          <button className="mb-6 w-full rounded-full border border-green-500 text-green-600 py-2 font-medium">
            Compose
          </button>
        </Link>

        <div className="text-xs text-gray-400 mb-2">CORE</div>
        <nav className="space-y-2">
          <Link to="schedle-email">
            <div className="flex items-center justify-between px-3 py-2 rounded-md bg-green-50 text-green-700 font-medium">
              <span>Scheduled</span>
              <span className="text-xs">12</span>
            </div>
          </Link>
          <Link to="sent-email">
            <div className="flex items-center justify-between px-3 py-2 rounded-md text-gray-600">
              <span>Sent</span>
              <span className="text-xs">785</span>
            </div>
          </Link>
        </nav>
      </aside>

      {/* RIGHT SIDE CONTENT */}
      <main className="flex-1">
        <Outlet />
        <ScheduleEmail />
        <ComposeEmail />
      </main>
    </div>
  );
}
