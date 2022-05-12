import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { BlogContext } from "../context/blogsContext";
import { useContext } from "react"



function Article(props) {
  return (
    <motion.div
      className="w-full m-3 flex gap-4 justify-between p-2 xl:text-1xl md:text-xl sm:text-sm xs:text-xs "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div
        className={`flex-[1]  hidden lg:block w-full shadow-md  border-0  bg-[length:100%_100%]`}
      >
        <img
          src={props.img}
          alt={props.img}
          className="w-full h-full rounded-md"
        />
      </div>

      <div className="flex-[3]">
        <header>
          <Link to={`/Blogs/post?id=${props.id}`}>
            <h1 className="xl:text-xl md:text-lg sm:text-sm font-bold border-b-2 border-b-transparent transition-all duration-300  text-slate-800 hover:border-b-2 hover:border-b-orange-500 w-fit">
              {props.header}
            </h1>
          </Link>
          <p className="text-gray-400 text-sm">{props.date}</p>
          <div className="border-[1px] rounded-sm w-fit px-[0.5rem] m-0  border-black">
            <span className="tag-name text-sm ">{props.tag}</span>
          </div>
        </header>
        <p className="text-gray-500 text-justify  xl:text-1xl md:text-xl sm:text-sm xs:text-xs">
          {props.text}
        </p>
        <Link to={`/Blogs/post?id=${props.id}`}
          className="text-blue-500 hover:border-b-2  transition-all duration-300 hover:border-b-red-500 w-fit border-2 border-transparent "
          href="/2022-04/stop-using-bang-operator "
        >
          Read more
        </Link>
      </div>
    </motion.div>
  );
}

function Search() {
  return (
    <form className="flex flex-col ">
      <label htmlFor="search" className="mx-4">
        Search
      </label>
      <input
        id="search"
        className="rounded-sm outline-none px-2  border-[1px] border-black m-3"
        type="text"
        name="search"
      />
    </form>
  );
}
function Tag(props) {
  return (
    <div className="w-fit flex hover:bg-blue-300 cursor-pointer m-3">
      <p className=" border-black  border-l border-t border-b px-1 rounded-l-sm">
        {props.text}
      </p>
      <p className="bg-black text-white rounded-r-sm px-1">{props.count}</p>
    </div>
  );
}
export default function Blogs() {
  const Blogs = useContext(BlogContext);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1 / 3 }}
    viewport={{ once: true }}
  >
      <div className="w-full h-full flex justify-center border-2">
        <div className="w-5/6 mt-10 md:px-24 ">
          <Search />
          <div className="flex flex-wrap">
            <Tag text={"Nodejs"} count={22} />
            <Tag text={"CSS"} count={10} />
            <Tag text={"HTML"} count={43} />
            <Tag text={"Non-Technical Discussion"} count={12} />
          </div>
          {Blogs.map((articles) => (
            <Article
              header={articles.header}
              date={articles.date}
              tag={articles.tag}
              text={articles.text}
              img={articles.img}
              id={articles.id}
              key={articles.id}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </motion.div>
  );
}
