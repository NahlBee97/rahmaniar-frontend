import { Link } from "react-router-dom";

const AddIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z" />
  </svg>
);

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
);

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

// --- Types & Data ---

interface NewsArticle {
  id: number;
  title: string;
  type: string;
  date: string;
  status: "Published" | "Draft";
}

const articles: NewsArticle[] = [
  {
    id: 1,
    title: "Tech Innovations in 2024",
    type: "News",
    date: "2024-10-26",
    status: "Published",
  },
  {
    id: 2,
    title: "The Future of Renewable Energy",
    type: "News",
    date: "2024-10-25",
    status: "Published",
  },
  {
    id: 3,
    title: "Global Economic Outlook",
    type: "News",
    date: "2024-10-24",
    status: "Draft",
  },
  {
    id: 4,
    title: "AI in Healthcare: A Revolution",
    type: "News",
    date: "2024-10-22",
    status: "Published",
  },
  {
    id: 5,
    title: "Exploring the Deep Sea",
    type: "News",
    date: "2024-10-21",
    status: "Draft",
  },
];

// --- Sub-components ---

const StatusBadge = ({ status }: { status: NewsArticle["status"] }) => {
  if (status === "Published") {
    return (
      <span className="inline-flex items-center justify-center rounded-full h-7 px-3 bg-green-500/20 text-green-300 text-xs font-medium">
        Published
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center rounded-full h-7 px-3 bg-slate-500/20 text-slate-300 text-xs font-medium">
      Draft
    </span>
  );
};

// --- Main Component ---

const AdminNews = () => {
  return (
    <main className="flex-1 flex flex-col">
      <div className="grow p-6 lg:p-8">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
            All News Articles
          </h1>
          <Link to={"/admin/news/create"} className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-blue-500 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
            <AddIcon />
            <span className="truncate">Add New News</span>
          </Link>
        </header>

        {/* Table Container */}
        <div className="w-full">
          <div className="flex overflow-hidden rounded-lg border border-[#3b4c54] bg-[#111618] overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#1b2327]">
                  <th className="px-4 py-3 text-left text-white w-2/5 text-sm font-medium leading-normal">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-white w-1/5 text-sm font-medium leading-normal">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-white w-1/5 text-sm font-medium leading-normal">
                    Date Created
                  </th>
                  <th className="px-4 py-3 text-left text-white w-1/5 text-sm font-medium leading-normal">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-white w-[120px] text-sm font-medium leading-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className="border-t border-t-[#3b4c54] hover:bg-white/5 transition-colors"
                  >
                    <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                      {article.title}
                    </td>
                    <td className="h-[72px] px-4 py-2 text-[#9cb0ba] text-sm font-normal leading-normal">
                      {article.type}
                    </td>
                    <td className="h-[72px] px-4 py-2 text-[#9cb0ba] text-sm font-normal leading-normal">
                      {article.date}
                    </td>
                    <td className="h-[72px] px-4 py-2">
                      <StatusBadge status={article.status} />
                    </td>
                    <td className="h-[72px] px-4 py-2">
                      <div className="flex items-center gap-3">
                        <button className="text-blue-400 hover:text-blue-300 transition-colors">
                          <EditIcon />
                        </button>
                        <button className="text-red-500 hover:text-red-400 transition-colors">
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <nav className="flex items-center justify-center p-4 mt-4 gap-1">
          <a
            className="flex size-10 items-center justify-center text-white/50 hover:text-white transition-colors"
            href="#"
          >
            <ChevronLeftIcon />
          </a>
          <a
            className="text-sm font-bold leading-normal flex size-10 items-center justify-center text-white rounded-full bg-blue-500"
            href="#"
          >
            1
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
            href="#"
          >
            2
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
            href="#"
          >
            3
          </a>
          <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full">
            ...
          </span>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
            href="#"
          >
            8
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
            href="#"
          >
            9
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
            href="#"
          >
            10
          </a>
          <a
            className="flex size-10 items-center justify-center text-white/50 hover:text-white transition-colors"
            href="#"
          >
            <ChevronRightIcon />
          </a>
        </nav>
      </div>
    </main>
  );
};

export default AdminNews;
