import { useState } from "react";

const ProfileEditor = () => {
  const [bio, setBio] = useState("");
  const [cvLink, setCvLink] = useState("");

  const handleSave = () => {
    alert("Your changes have been saved successfully");
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="self-start">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
          Edit Profile
        </h1>
        <p className="text-muted-foreground">
          Update your public profile information
        </p>
      </div>

      <div className="min-w-1/2 bg-card p-8 rounded-lg border border-border">
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="bio">Biography</label>
            <textarea
              className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter your biography..."
              rows={8}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cvLink">CV Link</label>
            <input
              className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="cvLink"
              type="url"
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
              placeholder="https://example.com/cv.pdf"
            />
          </div>

          <button
            className="w-full py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditor;
