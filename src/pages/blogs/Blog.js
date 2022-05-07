import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BlogContext } from "../../context/blogsContext";
import { motion } from "framer-motion";
export default function Blog() {
  let location = Math.floor(useLocation().search.replace("?id=", ""));
  const blog = useContext(BlogContext).filter((blog) => blog.id === location)[0];

  return (
    <motion.div
      className="m-3 flex-col gap-4 justify-between p-2 xl:text-1xl md:text-xl sm:text-sm xs:text-xs "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h1>{blog?.header || "Oops ! No post"}</h1>
      <h1>{blog?.text}</h1>
      <img src={blog?.img} alt={blog?.header} />
    </motion.div>
  );
}
