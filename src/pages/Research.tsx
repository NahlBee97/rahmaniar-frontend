const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

// --- Sub-components ---

const ResearchSearchBar = () => (
  <div className="relative max-w-xl mx-auto">
    <input
      className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 pl-12 pr-4 focus:ring-blue-500 focus:border-blue-500 transition-colors form-input placeholder:text-gray-500"
      placeholder="Search publications by keyword, title, or author..."
      type="search"
    />
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <SearchIcon />
    </div>
  </div>
);

interface PublicationProps {
  title: string;
  authors: string;
  venue: string;
  description: string;
}

const PublicationCard = ({
  title,
  authors,
  venue,
  description,
}: PublicationProps) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70">
    <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
    <p className="text-gray-400 mb-3">{authors}</p>
    <p className="text-sm text-gray-500 italic mb-4">{venue}</p>
    <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap items-center gap-4">
      <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
        Download PDF
      </button>
    </div>
  </div>
);

// --- Main Page Component ---

const Publications = () => {
  const publications = [
    {
      title: "The Future of Human-Computer Interaction",
      authors: "Rahmaniar, A. & Doe, J.",
      venue: "International Conference on Advanced Computing, 2023",
      description:
        "This paper explores novel paradigms in human-computer interaction, focusing on intuitive interfaces and immersive experiences. We propose a new framework for designing user-centric systems that adapt to user behavior and context, potentially revolutionizing how we interact with technology.",
    },
    {
      title: "Scalable Machine Learning for Big Data",
      authors: "Smith, L., Rahmaniar, A., & Chen, W.",
      venue: "Journal of Artificial Intelligence Research, 2022",
      description:
        "Addressing the challenges of processing massive datasets, this research introduces a distributed machine learning algorithm that enhances scalability and efficiency. Our method demonstrates significant performance improvements over existing solutions in various real-world applications.",
    },
    {
      title: "Advancements in Neural Network Architectures",
      authors: "Rahmaniar, A.",
      venue: "Proceedings of the Neural Information Processing Systems, 2021",
      description:
        "This work presents a novel neural network architecture that combines principles of convolutional and recurrent networks to achieve state-of-the-art results in sequential data processing. The architecture is particularly effective for tasks such as natural language understanding and time-series analysis.",
    },
    {
      title: "Ethical Considerations in AI Development",
      authors: "Johnson, P. & Rahmaniar, A.",
      venue: "Journal of Technology Ethics, 2020",
      description:
        "As artificial intelligence becomes more integrated into society, its ethical implications demand closer scrutiny. This paper provides a comprehensive overview of the ethical challenges in AI, discussing issues of bias, transparency, and accountability, and proposes a set of guidelines for responsible AI development.",
    },
  ];

  return (
    <div className="bg-linear-to-br from-[#0a111a] to-[#12222b] min-h-screen text-gray-300 font-sans">
      <main>
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
                Research
              </h1>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Exploring the frontiers of technology and innovation. Here are
                some of my contributions to the field.
              </p>
            </div>

            {/* Search Section */}
            <div className="mb-12">
              <ResearchSearchBar />
            </div>

            {/* Publications Grid */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {publications.map((pub, index) => (
                <PublicationCard
                  key={index}
                  title={pub.title}
                  authors={pub.authors}
                  venue={pub.venue}
                  description={pub.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Publications;
