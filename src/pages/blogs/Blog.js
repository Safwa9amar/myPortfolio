import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BlogContext } from "../../context/blogsContext";
import { motion } from "framer-motion";
import Notion from "../../components/Notion";


export default function Blog() {
  let location = Math.floor(useLocation().search.replace("?id=", ""));
  const blog = useContext(BlogContext).filter(
    (blog) => blog.id === location
  )[0];
  console.log(blog?.en_notion_id);
  return (
    <div className="w-full h-full flex justify-center border-2">
      <div className="w-full md:w-5/6 md:px-24 ">
        <motion.div
          className="m-3 flex-col gap-4 justify-between p-2 xl:text-1xl md:text-xl sm:text-sm xs:text-xs "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          >
          <Notion page_id={blog?.en_notion_id} />
        </motion.div>
      </div>
    </div>
  );
}
