const Research = () => {
  const publications = [
    {
      title: "Advanced Methods in Computational Linguistics",
      authors: "Smith, J., Doe, J., & Lee, A.",
      venue: "Journal of Computational Linguistics, 2024",
      link: "#",
    },
    {
      title: "Neural Approaches to Semantic Parsing",
      authors: "Smith, J. & Johnson, R.",
      venue: "ACL 2023",
      link: "#",
    },
    {
      title: "Cross-lingual Transfer Learning for NLP",
      authors: "Smith, J., et al.",
      venue: "EMNLP 2023",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-serif font-bold text-foreground mb-8">
          Publications
        </h1>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors"
            >
              <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">
                {pub.title}
              </h3>
              <p className="text-muted-foreground mb-1">{pub.authors}</p>
              <p className="text-sm text-muted-foreground italic mb-3">
                {pub.venue}
              </p>
              <a href={pub.link} className="text-accent hover:underline">
                View Publication →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
