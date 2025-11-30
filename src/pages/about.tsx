const AboutBioSection = () => (
  <section className="py-12 sm:py-24" id="about">
    <div className="container mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-12">
        About <span className="text-blue-400">Me</span>
      </h1>
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <p className="text-lg text-gray-400 leading-relaxed">
          I am a passionate researcher and developer with a deep interest in
          artificial intelligence, machine learning, and human-computer
          interaction. My journey in technology began with a fascination for how
          complex problems could be solved with elegant code. Over the years, I
          have honed my skills in both frontend and backend development,
          allowing me to build comprehensive and impactful applications from the
          ground up.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          My research focuses on developing intelligent systems that can learn
          from and adapt to user behavior, aiming to create more personalized
          and intuitive digital experiences. I hold a Ph.D. in Computer Science
          and have collaborated with various academic and industrial partners on
          groundbreaking projects. When I'm not coding or conducting research, I
          enjoy hiking in nature, photography, and mentoring aspiring
          developers.
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          Driven by curiosity and a commitment to excellence, I continuously
          explore new technologies and methodologies to stay at the forefront of
          innovation. I believe in the power of technology to create positive
          change and am dedicated to contributing to projects that make a
          difference in the world.
        </p>
      </div>
    </div>
  </section>
);

const CertificationCard = ({
  title,
  issuer,
  date,
}: {
  title: string;
  issuer: string;
  date: string;
}) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{issuer}</p>
    <p className="text-sm text-gray-500 mt-1">{date}</p>
  </div>
);

const CertificationsSection = () => (
  <section className="py-12 sm:py-24" id="certifications">
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400">
          Certifications
        </h2>
        <a
          href="#"
          className="bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View All
        </a>
      </div>
      <div className="space-y-8">
        <CertificationCard
          title="Certified TensorFlow Developer"
          issuer="Google"
          date="Issued: March 2023"
        />
        <CertificationCard
          title="AWS Certified Solutions Architect - Associate"
          issuer="Amazon Web Services"
          date="Issued: July 2022"
        />
        <CertificationCard
          title="Professional Scrum Master™ I (PSM I)"
          issuer="Scrum.org"
          date="Issued: January 2022"
        />
      </div>
    </div>
  </section>
);

const EducationCard = ({
  degree,
  university,
  years,
}: {
  degree: string;
  university: string;
  years: string;
}) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
    <h3 className="text-xl font-bold text-white">{degree}</h3>
    <p className="text-gray-400 mt-2">{university}</p>
    <p className="text-sm text-gray-500 mt-1">{years}</p>
  </div>
);

const EducationSection = () => (
  <section className="py-12 sm:py-24" id="education">
    <div className="container mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-12">
        Education
      </h2>
      <div className="space-y-8">
        <EducationCard
          degree="Ph.D. in Computer Science"
          university="Stanford University"
          years="2017 - 2021"
        />
        <EducationCard
          degree="Master of Science in Artificial Intelligence"
          university="Carnegie Mellon University"
          years="2015 - 2017"
        />
        <EducationCard
          degree="Bachelor of Engineering in Computer Engineering"
          university="University of Indonesia"
          years="2011 - 2015"
        />
      </div>
    </div>
  </section>
);

// --- Main App Component ---

const About = () => {
  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <main>
          <AboutBioSection />
          <CertificationsSection />
          <EducationSection />
        </main>
      </div>
  );
};

export default About;
