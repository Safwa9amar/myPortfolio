const data = [
  {
    img: "https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png  ",
    header: "KeyBoard",
    tag: "design",
  },
  {
    img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg",
    header: "Sofa",
    tag: "markating",
  },
  {
    img: "https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg",
    header: "Work Media",
    tag: "Illustration",
  },
  {
    img: "https://www.datocms-assets.com/14946/1632993815-which-programming-language-should-i-learn-and-why-1080x675-edited.png?auto=format&w=1080",
    header: "Handp",
    tag: "Branding",
  },
  {
    img: "https://stackify.com/wp-content/uploads/2017/12/Featured-881x441.jpg",
    header: "Handp",
    tag: "Branding",
  },
  {
    img: "https://kinsta.com/wp-content/uploads/2021/03/best-programming-language-to-learn.png",
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
    <div className={`${props.tailcss}`}>
      <div className="relative h-full w-full p-4 ">
        <img
          className="h-full w-full rounded-xl saturate-50 brightness-75"
          src={props.img}
          alt="card"
        />
        <div className="absolute  bottom-2.5 left-10 m-4 prose md:prose-sm xl:prose-lg sm:prose-xs">
          <div className="rounded-xl bg-white text-center   text-gray-600 w-fit px-4">
            {props.tag}
          </div>
          <h1 className="my-3 text-white font-bold ">{props.header}</h1>
        </div>
      </div>
    </div>
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
      <Board
        tag="love"
        img={
          "https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp"
        }
        header="recent project"
      />
      <BoardContainer>
        {data.map((el) => {
          return (
            <Board
              img={el.img}
              header={el.header}
              tag={el.tag}
              tailcss={"md:w-1/2 lg:w-1/3 sm:w-full "}
            />
          );
        })}
      </BoardContainer>
    </div>
  );
};

export default Projects;
