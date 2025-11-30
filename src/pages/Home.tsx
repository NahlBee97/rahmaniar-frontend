const HeroSection = () => (
  <section className="py-12 sm:py-24" id="about">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl blur-md group-hover:blur-lg transition duration-300 opacity-75"></div>
            <img
              alt="Portrait of Rahmaniar"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover shadow-xl border border-gray-800"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw3FWUqNGrF6cE9lfC-01yF412zgpaUkxvxA2bAoFH9XmkOKmcsyfzJh6ss4E0v4MYoEV21TjivMNevD6usVH_-NPWGmcTCEl1De95Nmm8EvsSSg34PkF0w77OHP4ftLLx3eV1yHZM3M2vXYZc3GwtDL_gxR-9rT0dtnO3dHkBV8iOqXj-RcxsreJbR5hxr14_JwgI9HnOJh7w1JIEC9ZzED9IAv2UgCfcL3iiA4XknrKCshhT3MPAV-U2HRL1ZYXpbcCzeqXpg3c"
            />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Hi, I'am Ir. Rahmaniar, S.Kom., M.Kom
          </h1>
          <h2 className="text-3xl text-blue-400">
            An Educator, Researcher &amp; Developer
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
            I specialize in creating innovative solutions and pushing the
            boundaries of technology. My work focuses on user-centric design and
            robust backend development.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
              Contact Me
            </button>
            <button className="bg-gray-800 border border-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              My Publications
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const IntroductionSection = () => {
  return (
    <section className="py-12 sm:py-24" id="about">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl text-blue-400 font-extrabold mb-12">
          A Brief Introduction
        </h1>
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <p className="text-lg text-gray-400 leading-relaxed">
            I am a passionate researcher and developer with a deep interest in
            artificial intelligence, machine learning, and human-computer
            interaction. My journey in technology began with a fascination for
            how complex problems could be solved with elegant code. Over the
            years, I have honed my skills in both frontend and backend
            development, allowing me to build comprehensive and impactful
            applications from the ground up.
          </p>
        </div>
      </div>
    </section>
  );
};

const PublicationCard = ({
  title,
  authors,
  venue,
}: {
  title: string;
  authors: string;
  venue: string;
}) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70 group cursor-default">
    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 mb-2">{authors}</p>
    <p className="text-sm text-gray-500">{venue}</p>
  </div>
);

const PublicationsSection = () => (
  <section className="py-12 sm:py-24" id="publications">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
          Recent Publications
        </h2>
        <button className="text-sm font-semibold text-white bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
          View All Publications
        </button>
      </div>
      <div className="space-y-8">
        <PublicationCard
          title="The Future of Human-Computer Interaction"
          authors="Rahmaniar, A. & Doe, J."
          venue="International Conference on Advanced Computing, 2023"
        />
        <PublicationCard
          title="Scalable Machine Learning for Big Data"
          authors="Smith, L., Rahmaniar, A., & Chen, W."
          venue="Journal of Artificial Intelligence Research, 2022"
        />
        <PublicationCard
          title="Advancements in Neural Network Architectures"
          authors="Rahmaniar, A."
          venue="Proceedings of the Neural Information Processing Systems, 2021"
        />
      </div>
    </div>
  </section>
);

const NewsCard = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70 flex flex-col h-full hover:-translate-y-1">
    <p className="text-sm text-gray-500 mb-2 font-mono">{date}</p>
    <h3 className="text-xl font-semibold text-blue-400 mb-3 grow">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const NewsSection = () => (
  <section className="py-12 sm:py-24" id="news">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
          Recent News
        </h2>
        <button className="text-sm font-semibold text-white bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
          View All News
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsCard
          date="October 26, 2023"
          title="Invited to speak at the Global Tech Summit 2023"
          description="I will be presenting my latest research on AI ethics and its impact on modern society."
        />
        <NewsCard
          date="September 15, 2023"
          title="Our paper on Quantum Computing accepted at QIP"
          description="Excited to share that our work on novel quantum algorithms has been accepted for publication."
        />
        <NewsCard
          date="July 02, 2023"
          title="Launched new open-source project 'Synapse'"
          description="'Synapse' is a neural network library designed for accessibility and ease of use for new developers."
        />
      </div>
    </div>
  </section>
);


// --- Main App Component ---

const Home = () => {
  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <HeroSection />
          <IntroductionSection/>
          <PublicationsSection />
          <NewsSection />
        </main>
      </div>
  );
};

export default Home;
