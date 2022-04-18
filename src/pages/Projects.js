import img from "../components/img/project/1.jpg";
import img1 from "../components/img/project/2.jpg";
import img2 from "../components/img/project/3.jpg";
import img3 from "../components/img/project/4.jpg";
import img4 from "../components/img/project/5.jpg";
import img5 from "../components/img/project/6.jpg";
import img7 from "../components/img/project/8.png";
import styled from "styled-components";
import { motion } from "framer-motion";
const data = [
  {
    img: img,
    header: "KeyBoard",
    tag: "design",
    description: "using this web allo to generate random data from api",
  },
  {
    img: img1,

    // img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg",
    header: "Sofa",
    tag: "markating",
  },
  {
    img: img2,

    // img: "https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg",
    header: "Work Media",
    tag: "Illustration",
  },
  {
    img: img3,

    // img: "https://www.datocms-assets.com/14946/1632993815-which-programming-language-should-i-learn-and-why-1080x675-edited.png?auto=format&w=1080",
    header: "Handp",
    tag: "Branding",
  },
  {
    img: img4,

    // img: "https://stackify.com/wp-content/uploads/2017/12/Featured-881x441.jpg",
    header: "Handp",
    tag: "Branding",
  },
  {
    img: img5,

    // img: "https://kinsta.com/wp-content/uploads/2021/03/best-programming-language-to-learn.png",
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
    <div className="md:m-24 flex flex-col ">
      <Tabs />
      <BoardContainer>
        {data.map((el) => {
          return (
            <Board
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
  );
};

export default Projects;
