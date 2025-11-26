const About = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-serif font-bold text-foreground mb-8">
          About Me
        </h1>
  
        <div className="prose prose-lg max-w-none">
          <div className="bg-card p-8 rounded-lg border border-border mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Biography
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Dr. Jane Smith is an Associate Professor in the Department of
              Computer Science at University Name. Her research focuses on
              computational linguistics, natural language processing, and
              cognitive modeling.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              She received her Ph.D. from prestigious University in 2015, and
              has since published over 50 peer-reviewed papers in top-tier
              venues. Her work has been cited over 2,000 times and has
              contributed significantly to the field of computational
              linguistics.
            </p>
          </div>
  
          <div className="bg-card p-8 rounded-lg border border-border mb-8">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Research Interests
            </h2>
            <ul className="space-y-2 text-foreground/80">
              <li>• Natural Language Processing</li>
              <li>• Computational Semantics</li>
              <li>• Machine Learning for Language</li>
              <li>• Cognitive Modeling</li>
              <li>• Human-Computer Interaction</li>
            </ul>
          </div>
  
          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Education
            </h2>
            <div className="space-y-4 text-foreground/80">
              <div>
                <p className="font-semibold">Ph.D. in Computer Science</p>
                <p className="text-muted-foreground">University Name, 2015</p>
              </div>
              <div>
                <p className="font-semibold">M.S. in Computer Science</p>
                <p className="text-muted-foreground">University Name, 2010</p>
              </div>
              <div>
                <p className="font-semibold">B.S. in Computer Science</p>
                <p className="text-muted-foreground">University Name, 2008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About