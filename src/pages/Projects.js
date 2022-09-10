import img from "../components/img/project/1.jpg";
import img1 from "../components/img/project/2.jpg";
import img2 from "../components/img/project/3.jpg";
import img3 from "../components/img/project/4.jpg";
import img4 from "../components/img/project/5.jpg";
import img5 from "../components/img/project/6.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../context/ProjectContext";


const data = [
  {
    id: 1,
    img: img,
    header: "KeyBoard",
    tag: "App dev",
    description: "using this web allo to generate random data from api",
  },
  {
    id: 2,
    img: img1,
    header: "Sofa",
    tag: "App designs",
  },
  {
    id: 3,
    img: img2,
    header: "Work Media",
    tag: "Web dev",
  },
  {
    id: 4,
    img: img3,
    header: "Handp",
    tag: "Web designs",
  },
  {
    id: 5,
    img: img4,
    header: "Handp",
    tag: "App designs",
  },
  {
    id: 6,
    img: img5,
    header: "Handp",
    tag: "Branding",
  },
];
const Tabs = function ({Projects,setPortfolioData }) {

  const handleChange = (e) => {
    const keyWord = e.target.value;
    if (keyWord === "All") {
      setPortfolioData(Projects);
    } else {
      const filtred = Projects.filter((el) => el.tag === keyWord);
      setPortfolioData(filtred);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="hidden flex-wrap justify-center gap-10 m-4 text-gray-500 sm:hidden  md:flex">
        <button value="All" onClick={handleChange}>
          All
        </button>
        <button value="designs" onClick={handleChange}>
          Designs
        </button>
        <button value="App" onClick={handleChange}>
          App
        </button>
        <button value="Web" onClick={handleChange}>
          Website
        </button>
        {/* <button name="App dev" onClick={handleChange}>
          Application development
        </button> */}
      </div>
      <select
        className="md:hidden sm:inline m-4 p-4 border-2 w-4/5"
        onChange={handleChange}
      >
        <option value="All">all</option>
        <option value="designs">Designs</option>
        <option value="App">App</option>
        <option value="Web">Wbe</option>
      </select>
    </div>
  );
};
const Board = function (props) {
  return (
    <motion.div
      initial={{ scale: 0.85, zIndex: 111, cursor: "pointer" }}
      animate={{ scale: 1, zIndex: 111, cursor: "pointer" }}
      exit={{ opacity: 0, zIndex: 111, cursor: "pointer" }}
      className={`${props.tailcss} overflow-hidden relative p-2`}
    >
        <Link to={`/Portfolio/Project?id=${props.id}`}>
        <img
          className="rounded-md h-full w-full brightness-75"
          src={props.img}
          alt="card"
        />
        <div className="absolute prose md:prose-sm xl:prose-md sm:prose-xs bottom-0 left-0 m-6">
          <h1 className="text-white">{props.header}</h1>
          <div className="rounded-xl bg-white text-center text-gray-600 w-fit px-4">
            {props.tag}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
const BoardContainer = function (props) {
  return (
    <div className="w-full flex flex-wrap justify-center items-stretch lg:flex-row md:flex-row ">
      {props.children}
    </div>
  );
};
const Projects = () => {
  const Projects = useContext(ProjectsContext)
  const [portfolioData, setPortfolioData] = useState(Projects);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 / 3 }}
      viewport={{ once: true }}
      className="relative md:h-screen md:mb-10"
    >
      <Tabs Projects={Projects} setPortfolioData={setPortfolioData} />
      <div className="md:mx-24 md:mt-12 flex flex-col ">
        <BoardContainer>
          <AnimatePresence>
            {portfolioData.map((el) => {
              return (
                <Board
                  id={el.id}
                  key={el.id}
                  img={el.img}
                  header={el.header}
                  tag={el.tag}
                  tailcss={"md:w-1/2 lg:w-1/3 sm:w-full "}
                />
              );
            })}
          </AnimatePresence>
        </BoardContainer>
      </div>
    </motion.div>
  );
};

export default Projects;
