import { Link } from "react-router-dom";
import { BookOpen, FileText, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
            Welcome to My Digital Space
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Academic researcher, innovator, and lifelong learner exploring the
            frontiers of knowledge
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            to="/publications"
            className="group bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Research
            </h2>
            <p className="text-muted-foreground">
              Explore my published papers and ongoing research work
            </p>
          </Link>

          <Link
            to="/blog"
            className="group bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">News</h2>
            <p className="text-muted-foreground">
              Stay updated with my latest announcements and achievements
            </p>
          </Link>

          <Link
            to="/about"
            className="group bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
          >
            <Mail className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Contact</h2>
            <p className="text-muted-foreground">
              Get in touch for collaborations and inquiries
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
