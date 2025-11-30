import { useState } from "react";

// --- Icons ---

const CloudUploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const ExpandMoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);

// --- Main Page Component ---

const CreatePublication = () => {
  const [isPublished, setIsPublished] = useState(false);

  return (
    // Dark slate background to match the blue theme aesthetic
    <div className="bg-[#0f172a] min-h-screen text-gray-300 font-sans flex flex-col">
      {/* Main Content Area */}
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col px-6 py-8 md:px-10 md:py-12 max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <p className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
              Create New Publication
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#1e293b]/60 border border-[#334155] rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Grid for First Two Rows */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <label className="flex flex-col">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Title
                  </p>
                  <input
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 h-12 placeholder:text-[#94a3b8] px-4 text-base font-normal leading-normal transition-all"
                    placeholder="Enter publication title"
                    type="text"
                  />
                </label>

                {/* Author */}
                <label className="flex flex-col">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Author
                  </p>
                  <input
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 h-12 placeholder:text-[#94a3b8] px-4 text-base font-normal leading-normal transition-all"
                    placeholder="Enter author's name"
                    type="text"
                  />
                </label>

                {/* Category */}
                <label className="flex flex-col">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Category
                  </p>
                  <div className="relative">
                    <select
                      className="appearance-none w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 h-12 px-4 text-base font-normal leading-normal pr-10 transition-all cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-[#94a3b8]">
                        Select a category
                      </option>
                      <option>Journal Article</option>
                      <option>Conference Paper</option>
                      <option>Book Chapter</option>
                      <option>White Paper</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#94a3b8]">
                      <ExpandMoreIcon />
                    </div>
                  </div>
                </label>

                {/* Date Published */}
                <label className="flex flex-col">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Date Published
                  </p>
                  <input
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 h-12 placeholder:text-[#94a3b8] px-4 text-base font-normal leading-normal transition-all"
                    type="date"
                    defaultValue="2024-03-15"
                  />
                </label>
              </div>

              {/* Abstract/Summary */}
              <label className="flex flex-col">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Abstract/Summary
                </p>
                <textarea
                  className="w-full resize-y rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 min-h-32 placeholder:text-[#94a3b8] p-4 text-base font-normal leading-normal transition-all"
                  placeholder="Enter a brief summary of the publication..."
                ></textarea>
              </label>

              {/* File Upload */}
              <div>
                <p className="text-white text-base font-medium leading-normal pb-2">
                  File Upload (PDF)
                </p>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-[#334155] border-dashed rounded-lg cursor-pointer bg-[#0f172a] hover:bg-[#1e293b] hover:border-blue-500 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <div className="mb-2 text-[#94a3b8]">
                        <CloudUploadIcon />
                      </div>
                      <p className="mb-2 text-sm text-[#94a3b8]">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-[#64748b]">
                        Max file size: 10MB, PDF only
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      accept=".pdf"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Status Toggle */}
              <div className="flex items-center justify-between py-2">
                <p className="text-white text-base font-medium leading-normal">
                  Status
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm ${
                      !isPublished ? "text-white font-medium" : "text-[#94a3b8]"
                    }`}
                  >
                    Draft
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isPublished}
                      onChange={() => setIsPublished(!isPublished)}
                    />
                    <div className="w-11 h-6 bg-[#334155] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                  <span
                    className={`text-sm ${
                      isPublished ? "text-white font-medium" : "text-[#94a3b8]"
                    }`}
                  >
                    Published
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 pt-4 border-t border-[#334155]/50">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-300 bg-[#334155] hover:bg-[#475569] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-[#0f172a] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-[#0f172a] shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
                >
                  Save Publication
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePublication;
