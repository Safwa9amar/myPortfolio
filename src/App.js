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
import ProjectsContextProvider from "./context/ProjectContext";
import Test from "./pages/test";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">

      <ProjectsContextProvider>
      <BlogsContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="Blogs" element={<Blogs />}></Route>
          <Route path="Blogs/post" element={<Blog />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="Services" element={<Services />} />
          <Route path="Portfolio" element={<Projects />}/>
          <Route path="Portfolio/Project" element={<Portfolio/>}/>
        </Routes>
        <Footer />
      </BlogsContextProvider>
      </ProjectsContextProvider>
    </div>
  );
}

export default App;
