import { Link } from "react-router-dom";

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: "New Research Grant Awarded",
      date: "March 15, 2024",
      preview:
        "Excited to announce that our lab has been awarded a significant grant from the National Science Foundation...",
    },
    {
      id: 2,
      title: "Speaking at International Conference",
      date: "March 10, 2024",
      preview:
        "I'll be giving a keynote talk at the upcoming International Conference on Computational Linguistics...",
    },
    {
      id: 3,
      title: "New Paper Published in ACL",
      date: "March 5, 2024",
      preview:
        "Our latest work on neural semantic parsing has been accepted to the Annual Meeting of the Association...",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-serif font-bold text-foreground mb-8">
          News & Updates
        </h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors"
            >
              <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
              <h2 className="text-2xl font-serif font-semibold mb-3 text-foreground">
                {post.title}
              </h2>
              <p className="text-foreground/70 mb-3">{post.preview}</p>
              <span className="text-accent hover:underline">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
