import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import VisitorLayout from "./layouts/VisitorLayout";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import ProfileEditor from "./pages/admin/ProfileEditor";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Publications from "./pages/Research";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";
import AdminNews from "./pages/admin/AdminNews";
import AdminPublications from "./pages/admin/AdminPublications";
import CreateNews from "./pages/admin/CreateNews";
import CreatePublication from "./pages/admin/CreatePublication";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* visitor routes */}
      <Route element={<VisitorLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfileEditor />} />
        <Route path="news" element={<AdminNews />} />
        <Route path="news/create" element={<CreateNews/>} />
        <Route path="publications" element={<AdminPublications />} />
        <Route path="publications/create" element={<CreatePublication />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
