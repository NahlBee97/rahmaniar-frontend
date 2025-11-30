// --- Icons ---

const PhotoCameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm0 8a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm9-11h-2.59l-.3-.38L16.4 3.7A2 2 0 0 0 14.88 3H9.12a2 2 0 0 0-1.52.7L5.89 5.62l-.3.38H3a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM3 19V8h3.33l.29-.38L8.33 5h7.34l1.71 2.62.29.38H21v11Z" />
  </svg>
);

// --- Sub-components ---

const ProfileHeader = () => (
  <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
    <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
      User Profile
    </h1>
  </header>
);

const ProfileForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-lg border border-[#3b4c54] bg-[#111618] p-6 md:p-8">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Picture Section */}
          <div className="md:col-span-1 flex flex-col items-center">
            <span className="text-white/50 text-sm mb-2">Profile Picture</span>
            <div className="relative group cursor-pointer">
              <div
                className="w-40 h-40 rounded-full bg-cover bg-center border-2 border-[#3b4c54]"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWnwsQkugxgJiYVDz3Io0H1-d6wZacdiT4uge5yce7LdykiEQ9Y3NVYeU_b_DJXq-XBoY_PHNc4fHZ5zT-Vk31tnqkeWV3ICuW2SwNVvei0U6ZH246UeybSbx3mJLSms5jRFYOdMnjTnsjUzbi-9S9uhY69lL_Em009YHZI5q2PGRdfB_VQMEg3wpa9-r6GSFrXGkj4CXN-1yEegrxeeoQw6LNURDLg6Qs1k3KrGzCBTxc1ppZUnQCz9gmFx8-LUJKW5nuEIKSqNY')",
                }}
              ></div>
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                type="button"
              >
                <div className="text-white">
                  <PhotoCameraIcon />
                </div>
              </button>
            </div>
            <p className="text-xs text-[#9cb0ba] mt-4 text-center">
              Click image to upload a new one. <br /> JPG, PNG, GIF, max 2MB.
            </p>
          </div>

          {/* Form Fields Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-white/80 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full bg-[#1b2327] border border-[#3b4c54] text-white text-sm rounded-lg focus:ring-[#4cf676] focus:border-[#4cf676] block p-2.5 placeholder-[#9cb0ba] focus:outline-none transition-colors"
                id="name"
                type="text"
                defaultValue="Jane Doe"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white/80 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-[#1b2327] border border-[#3b4c54] text-white text-sm rounded-lg focus:ring-[#4cf676] focus:border-[#4cf676] block p-2.5 placeholder-[#9cb0ba] focus:outline-none transition-colors"
                id="email"
                type="email"
                defaultValue="jane.doe@example.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white/80 mb-2"
                htmlFor="role"
              >
                Role
              </label>
              <select
                className="w-full bg-[#1b2327] border border-[#3b4c54] text-white text-sm rounded-lg focus:ring-[#4cf676] focus:border-[#4cf676] block p-2.5 focus:outline-none transition-colors"
                id="role"
                defaultValue="Administrator"
              >
                <option>Member</option>
                <option>Administrator</option>
                <option>Editor</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-white/80 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-[#1b2327] border border-[#3b4c54] text-white text-sm rounded-lg focus:ring-[#4cf676] focus:border-[#4cf676] block p-2.5 placeholder-[#9cb0ba] focus:outline-none transition-colors"
                id="password"
                placeholder="••••••••••••"
                type="password"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-6 bg-blue-400 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
                type="submit"
              >
                <span className="truncate">Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Main Page Component ---

const ProfileEditor = () => {
  return (
      <main className="flex-1 flex flex-col">
        <div className="grow p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
          <ProfileHeader />
          <ProfileForm />
        </div>
      </main>
  );
};

export default ProfileEditor;
