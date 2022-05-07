import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import ContactPage from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Navbar from "./components/nav";
import Footer from "./components/Footer";
import Blog from "./pages/blogs/Blog";
import BlogsContextProvider from "./context/blogsContext";

function App() {
  return (
    <div className="App">
      <BlogsContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Blogs/post" element={<Blog />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="Services" element={<Services />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BlogsContextProvider>
    </div>
  );
}

export default App;
