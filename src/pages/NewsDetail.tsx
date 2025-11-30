const ArrowLeftIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

// --- Sub-components ---

interface RelatedArticleProps {
  title: string;
  authors: string;
  venue: string;
}

const RelatedArticleCard = ({ title, authors, venue }: RelatedArticleProps) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70 h-full">
    <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
    <p className="text-gray-400 mb-2">{authors}</p>
    <p className="text-sm text-gray-500">{venue}</p>
  </div>
);

// --- Main Content Components ---

const ArticleHeader = () => (
  <>
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 leading-tight mb-4">
      The Future of Human-Computer Interaction
    </h1>
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-400 mb-8 text-sm sm:text-base">
      <span>By Rahmaniar, A. &amp; Doe, J.</span>
      <span className="text-gray-600 hidden sm:inline">|</span>
      <span>June 15, 2023</span>
    </div>
  </>
);

const ArticleContent = () => (
  <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 space-y-6">
    <p className="leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
      sem vitae risus tristique posuere.
    </p>
    <figure className="my-8">
      <img
        alt="Abstract visualization of data networks"
        className="rounded-lg w-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-k2gGh0t6Kd7e91S9UOvmu6T3sjeiZd-juZO-6VossHoPjA1bteNM_cVqebe3ljR7T4SWeV0elLCAnHezxjDwdXmOK7uluOrsOzeHEA2g0wO-yUZ13ZgWxbHn7e0n4QqaaDC9PAIid84dFm0StFuS83kzitLBOumQzvQkMKs21XsLOk60FI5RJ77wHE-P8-dzlP2-zEsr2Gon4Ft8mfSe6JCDW41yZ3PLq2-7WXnCGWLTJ4iTqiKmGnLY0c50Oz_SFCNv91baS_g"
      />
      <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
        An abstract visualization of interconnected data nodes.
      </figcaption>
    </figure>
    <p className="leading-relaxed">
      Praesent quis congue nisi. Vivamus nec magna sit amet sem varius laoreet.
      Phasellus a ligula ac sapien tincidunt imperdiet. Quisque congue, quam nec
      euismod volutpat, eros sem mollis turpis, et luctus enim justo non est.
      Curabitur et dolor eu lacus feugiat interdum. Sed vitae justo at lacus
      accumsan vestibulum.
    </p>
    <p className="leading-relaxed">
      Integer sit amet nisi nec mi finibus sollicitudin. Proin mollis, neque in
      dictum bibendum, neque dolor consequat lorem, ut euismod lacus massa in
      quam. Nulla facilisi. Sed id risus id enim consequat euismod. Fusce
      dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
      fermentum massa justo sit amet risus.
    </p>
  </div>
);

const RelatedArticlesSection = () => (
  <div className="mt-20">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">
      Related Articles
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <RelatedArticleCard
        title="Scalable Machine Learning for Big Data"
        authors="Smith, L., Rahmaniar, A., & Chen, W."
        venue="Journal of Artificial Intelligence Research, 2022"
      />
      <RelatedArticleCard
        title="Advancements in Neural Network Architectures"
        authors="Rahmaniar, A."
        venue="Proceedings of the Neural Information Processing Systems, 2021"
      />
    </div>
  </div>
);

// --- Main Page Component ---

const NewsDetail = () => {
  return (
    <div className="bg-linear-to-br from-[#0a111a] to-[#12222b] min-h-screen text-gray-300">
      <main className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article>
            <ArticleHeader />
            <ArticleContent />
          </article>

          <div className="mt-12 text-center">
            <a
              className="inline-flex items-center gap-2 bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
              href="#"
            >
              <ArrowLeftIcon />
              Back to News
            </a>
          </div>

          <RelatedArticlesSection />
        </div>
      </main>
    </div>
  );
};

export default NewsDetail;
