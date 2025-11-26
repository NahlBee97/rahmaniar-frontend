import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import VisitorLayout from "./layouts/VisitorLayout";
import BlogList from "./pages/BlogList";
import Research from "./pages/Research";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import DashboardHome from "./pages/admin/DashboardHome";
import ProfileEditor from "./pages/admin/ProfileEditor";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* visitor routes */}
      <Route element={<VisitorLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/publications" element={<Research />} />
      </Route>

      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<ProfileEditor />} />
        {/* <Route path="content" element={<ManageContent />} /> */}
        {/* <Route path="content/new" element={<Editor />} /> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
