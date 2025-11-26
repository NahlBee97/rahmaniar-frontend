import { Link } from "react-router-dom";
import { FileText, User, BookOpen } from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/admin/profile"
          className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors"
        >
          <User className="h-8 w-8 text-accent mb-4" />
          <h2 className="text-xl font-serif font-semibold mb-2">
            Edit Profile
          </h2>
          <p className="text-muted-foreground">
            Update your bio, CV, and social media
          </p>
        </Link>

        <Link
          to="/admin/content"
          className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors"
        >
          <FileText className="h-8 w-8 text-accent mb-4" />
          <h2 className="text-xl font-serif font-semibold mb-2">
            Manage Content
          </h2>
          <p className="text-muted-foreground">Create and edit news posts</p>
        </Link>

        <Link
          to="/admin/content"
          className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors"
        >
          <BookOpen className="h-8 w-8 text-accent mb-4" />
          <h2 className="text-xl font-serif font-semibold mb-2">
            Publications
          </h2>
          <p className="text-muted-foreground">
            Manage your research publications
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
