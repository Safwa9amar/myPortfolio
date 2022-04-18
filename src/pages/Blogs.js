import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
const H1 = styled.div`
  text-align: left;
  text-underline-offset: 0.08em;
  box-sizing: border-box;
  line-height: 1.3;
  overflow-wrap: break-word;
  max-width: 40ch;
  margin: 0;
  font-size: 2.25rem;
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid transparent;
  width: fit-content;
  &:hover {
    border-bottom: 2px solid #ff460e;
  }
`;

function Artice() {
  const scrollRef = useRef(null);

  return (
    <motion.div
      className="w-full m-3 flex flex-row gap-2 justify-between p-2 xl:text-1xl md:text-xl sm:text-sm xs:text-xs "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 }}
      viewport={{ once: true }}
    >
      <div className="md:hidden sm:hidden lg:block lg:visible w-full rounded-xl border-2 bg-[url('https://www.getbidbar.com/assets/blog/programming_topics.jpg')] bg-cover"></div>
      <div>
        <header>
          <a href="/2022-04/stop-using-bang-operator">
            <H1>How To Use CSS Layers</H1>
          </a>
          <p className="text-gray-400">4 avril 2022</p>
          <div className="border-[1px] rounded-sm w-fit px-[0.5rem] leading-relaxed border-black">
            <span className="tag-name md:text-md sm:text-sm ">JavaScript</span>
          </div>
        </header>
        <p className="text-gray-500 text-justify">
          You may think you are writing cleaner code using the bang operator,
          but in reality you are just opening yourself up to a plethora of bugs.
        </p>
        <a
          className="text-blue-500 hover:border-b-2 hover:border-b-red-500 w-fit border-2 border-transparent "
          href="/2022-04/stop-using-bang-operator"
        >
          Read more
        </a>
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
  return (
    <div className="w-full h-full flex justify-center border-2">
      <div className="w-5/6 mt-10 md:px-24 ">
        <Search />
        <div className="flex flex-wrap">
          <Tag text={"Nodejs"} count={22} />
          <Tag text={"CSS"} count={10} />
          <Tag text={"HTML"} count={43} />
          <Tag text={"Non-Technical Discussion"} count={12} />
        </div>
        <Artice />
        <Artice />
        <Artice />
      </div>
    </div>
  );
}
