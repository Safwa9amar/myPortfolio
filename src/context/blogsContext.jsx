import React, { createContext, useState, useEffect } from "react";
export const BlogContext = createContext();

const BlogsContextProvider = (props) => {
  const base_url = "http://localhost:5000/blogs";
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogsData();
  }, []);
  async function getBlogsData() {
    const res = await fetch(base_url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data) => data.json());
    setBlogs(res.post);
    console.log(res.post);
  }
  return (
    <BlogContext.Provider value={blogs}>{props.children}</BlogContext.Provider>
  );
};
export default BlogsContextProvider;
