import { useState } from "react";

// --- Icons ---

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

const CreateNews = () => {
  const [isPublished, setIsPublished] = useState(false);

  return (
    // Dark slate background to match the blue theme aesthetic
    <div className="bg-[#0f172a] min-h-screen text-gray-300 font-sans flex flex-col">
      {/* Main Content Area - offset for sidebar if it existed, but centered here */}
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col px-6 py-8 md:px-10 md:py-12 max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <p className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
              Create New News Article
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#1e293b]/60 border border-[#334155] rounded-xl p-6 md:p-8 backdrop-blur-sm">
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Title Input */}
              <div>
                <label className="flex flex-col">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Title
                  </p>
                  <input
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 h-14 placeholder:text-[#94a3b8] p-[15px] text-base font-normal leading-normal transition-all"
                    placeholder="Enter article title"
                    type="text"
                  />
                </label>
              </div>

              {/* Author & Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Author
                  </p>
                  <input
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 h-14 placeholder:text-[#94a3b8] p-[15px] text-base font-normal leading-normal transition-all"
                    placeholder="Enter author's name"
                    type="text"
                  />
                </label>

                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Category
                  </p>
                  <div className="relative">
                    <select
                      className="appearance-none w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 h-14 p-[15px] text-base font-normal leading-normal pr-10 transition-all cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-[#94a3b8]">
                        Select a category
                      </option>
                      <option>Technology</option>
                      <option>Business</option>
                      <option>Science</option>
                      <option>Health</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#94a3b8]">
                      <ExpandMoreIcon />
                    </div>
                  </div>
                </label>
              </div>

              {/* Content Textarea */}
              <div>
                <label className="flex flex-col">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Content
                  </p>
                  <textarea
                    className="w-full resize-y rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-blue-500 border border-[#334155] bg-[#0f172a] focus:border-blue-500 min-h-60 placeholder:text-[#94a3b8] p-[15px] text-base font-normal leading-normal transition-all"
                    placeholder="Write your article content here..."
                  ></textarea>
                </label>
              </div>

              {/* Status Toggle */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-white text-base font-medium leading-normal">
                    Status
                  </p>
                  <p className="text-sm text-[#94a3b8]">
                    Set the article to draft or published.
                  </p>
                </div>
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
              <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#334155]/50">
                <button
                  type="button"
                  className="px-6 py-3 rounded-lg text-white text-sm font-semibold bg-transparent hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg text-white text-sm font-semibold bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
                >
                  Save Article
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateNews;
