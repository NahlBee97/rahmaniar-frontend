import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogDetail = () => {
  // const { id } = useParams();

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          className="flex gap-1 items-center mb-4 hover:text-foreground/80"
          to="/blog"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>

        <article className="bg-card p-8 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground mb-3">March 15, 2024</p>
          <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
            New Research Grant Awarded
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed mb-4">
              I'm thrilled to announce that our research lab has been awarded a
              significant grant from the National Science Foundation to continue
              our work on computational approaches to semantic understanding.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This funding will support our team's efforts over the next three
              years as we investigate novel neural architectures for
              cross-lingual semantic parsing. The project brings together
              expertise from computational linguistics, cognitive science, and
              machine learning.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We're particularly excited about the potential applications of
              this work in improving multilingual communication technologies and
              advancing our understanding of how humans process language.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Stay tuned for updates on our progress and upcoming publications!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
