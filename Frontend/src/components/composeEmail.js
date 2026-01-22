export default function ComposeEmail() {
  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3 text-lg font-medium">
          <span className="text-xl">←</span>
          Compose New Email
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full border">📎</button>
          <button className="p-2 rounded-full border">⏰</button>
          <button className="px-4 py-2 rounded-full border border-green-500 text-green-600 font-medium">
            Send Later
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-8 py-6 space-y-6">
        <div className="flex items-center gap-6">
          <label className="w-20 text-sm text-gray-600">From</label>
          <select className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
            <option>oliver.brown@domain.io</option>
          </select>
        </div>

        <div className="flex items-center gap-6">
          <label className="w-20 text-sm text-gray-600">To</label>
          <input
            placeholder="recipient@example.com"
            className="flex-1 border-b outline-none py-2"
          />
          <button className="text-green-600 text-sm">Upload List</button>
        </div>

        <div className="flex items-center gap-6">
          <label className="w-20 text-sm text-gray-600">Subject</label>
          <input
            placeholder="Subject"
            className="flex-1 border-b outline-none py-2"
          />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              Delay between 2 emails
            </span>
            <input
              type="number"
              className="w-16 border rounded-md px-2 py-1"
              placeholder="00"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Hourly Limit</span>
            <input
              type="number"
              className="w-16 border rounded-md px-2 py-1"
              placeholder="00"
            />
          </div>
        </div>

        {/* Editor */}
        <div className="bg-gray-50 rounded-xl p-4 h-[420px] flex flex-col">
          <div className="text-gray-400 text-sm mb-3">Type Your Reply...</div>
          <div className="border-t pt-3 flex gap-4 text-gray-500">
            <span>↺</span>
            <span>↻</span>
            <span>Tt</span>
            <span className="font-bold">B</span>
            <span className="italic">I</span>
            <span className="underline">U</span>
            <span>•</span>
            <span>1.</span>
            <span>❝</span>
            <span>S</span>
          </div>
        </div>
      </div>
    </div>
  );
}
