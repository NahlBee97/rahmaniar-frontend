const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></path>
  </svg>
);

// --- Sub-components ---

const SearchBar = () => (
  <div className="relative w-full max-w-md">
    <input
      className="form-input w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-gray-500"
      placeholder="Search articles..."
      type="search"
    />
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <SearchIcon />
    </div>
  </div>
);

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
}

const NewsCard = ({ title, date, summary }: NewsCardProps) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70 h-full">
    <h2 className="text-xl font-bold text-blue-400 mb-2">{title}</h2>
    <p className="text-sm text-gray-500 mb-4">{date}</p>
    <p className="text-gray-400 grow mb-6 leading-relaxed">{summary}</p>
    <a
      className="text-blue-400 font-semibold hover:text-blue-300 transition-colors self-start inline-flex items-center gap-1"
      href="#"
    >
      Read More &rarr;
    </a>
  </div>
);

// --- Main Page Component ---

const News = () => {
  const newsItems = [
    {
      title: "My Journey into Quantum Computing",
      date: "October 15, 2023",
      summary:
        "A deep dive into the foundational principles of quantum mechanics and how they are being applied to create the next generation of computers.",
    },
    {
      title: "The Ethics of AI in Modern Applications",
      date: "September 28, 2023",
      summary:
        "Exploring the complex ethical dilemmas surrounding artificial intelligence, from algorithmic bias to autonomous decision-making in critical systems.",
    },
    {
      title: "Conference Recap: Innovate 2023",
      date: "August 05, 2023",
      summary:
        "Key takeaways and personal highlights from the annual Innovate conference, featuring the latest breakthroughs in tech and design.",
    },
    {
      title: "A Guide to Minimalist UI/UX Design",
      date: "July 21, 2023",
      summary:
        "How simplifying interfaces can lead to more intuitive and enjoyable user experiences. We'll cover principles, tools, and real-world examples.",
    },
    {
      title: "Building a Personal Portfolio with Modern Tools",
      date: "June 12, 2023",
      summary:
        "Step-by-step tutorial on creating a stunning personal portfolio website from scratch using the latest web development technologies.",
    },
    {
      title: "The Rise of Serverless Architectures",
      date: "May 30, 2023",
      summary:
        "An introduction to serverless computing, its benefits, drawbacks, and when it makes sense to adopt it for your projects.",
    },
  ];

  return (
    <div className="bg-linear-to-br from-[#0a111a] to-[#12222b] min-h-screen text-gray-300">
      <main>
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 text-center mb-12">
              News
            </h1>

            <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <SearchBar />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <NewsCard
                  key={index}
                  title={item.title}
                  date={item.date}
                  summary={item.summary}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default News;
