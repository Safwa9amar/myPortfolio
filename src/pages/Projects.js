import img from "../components/img/project/1.jpg";
import img1 from "../components/img/project/2.jpg";
import img2 from "../components/img/project/3.jpg";
import img3 from "../components/img/project/4.jpg";
import img4 from "../components/img/project/5.jpg";
import img5 from "../components/img/project/6.jpg";
import { motion } from "framer-motion";
const data = [
  {
    id: 1,
    img: img,
    header: "KeyBoard",
    tag: "design",
    description: "using this web allo to generate random data from api",
  },
  {
    id: 2,
    img: img1,
    header: "Sofa",
    tag: "markating",
  },
  {
    id: 3,
    img: img2,
    header: "Work Media",
    tag: "Illustration",
  },
  {
    id: 4,
    img: img3,
    header: "Handp",
    tag: "Branding",
  },
  {
    id: 5,
    img: img4,
    header: "Handp",
    tag: "Branding",
  },
  {
    id: 6,
    img: img5,
    header: "Handp",
    tag: "Branding",
  },
];

const Tabs = function () {
  return (
    <>
      <div className="hidden flex-wrap justify-center gap-10 m-4 text-gray-500 sm:hidden  md:flex">
        <button>
          Show all <sup>12</sup>
        </button>
        <button>
          Show all <sup>4</sup>
        </button>
        <button>
          Show all <sup>6</sup>
        </button>
        <button>
          Show all <sup>2</sup>
        </button>
      </div>
      <select className="md:hidden sm:inline m-4 p-4 border-2">
        <option value="">Show all</option>
        <option value="">design</option>
        <option value="">markating</option>
        <option value="">web dev</option>
      </select>
    </>
  );
};
const Board = function (props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 111, cursor: "pointer" }}
      className={`${props.tailcss} overflow-hidden relative p-2`}
    >
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
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1 / 3 }}
    viewport={{ once: true }}
  >
    <div className="md:m-24 flex flex-col ">
      <Tabs />
      <BoardContainer>
        {data.map((el) => {
          return (
            <Board
              key={el.id}
              img={el.img}
              header={el.header}
              tag={el.tag}
              tailcss={"md:w-1/2 lg:w-1/3 sm:w-full "}
              description={el.description}
            />
          );
        })}
        <button className="bg-white px-2 mx-2 rounded-md">load more</button>
      </BoardContainer>
    </div>
    </motion.div>
  );
};

export default Projects;
