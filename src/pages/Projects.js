
const data = [
  {
    img: "https://via.placeholder.com/360x370",
    header: "hello world !",
    tag: "design",
  },
  {
    img: "https://via.placeholder.com/720x360",
    header: "hello again !",
    tag: "markating",
  },
  {
    img: "https://via.placeholder.com/720x360",
    header: "hello again !",
    tag: "Illustration",
  },
  {
    img: "https://via.placeholder.com/720x360",
    header: "hello again !",
    tag: "Branding",
  },
];


const Tabs = function () {
  return (
    <div className="flex flex-wrap justify-center gap-10 m-4 text-gray-500">
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
  );
};
const Board = function (props) {
  return (
    <div className={props.style}>
      <div className="relative p-4 h-full w-full">
        <img className="h-full w-full" src={props.img} alt="card" />
        <div className="absolute  bottom-2.5 left-10 m-4 xl:text-xl 2xl:text-2xl md:text-base sm:text-xs">
          <div className="rounded-xl bg-white text-center font-semibold  text-gray-600 ">
            {props.tag}
          </div>
          <h1 className="my-3 text-white font-bold">{props.header}</h1>
        </div>
      </div>
    </div>
  );
};
const BoardContainer = function (props) {
  return (
    <div className="w-full flex flex-wrap items-stretch  lg:flex-row md:flex-row ">
      {props.children}
    </div>
  );
};
const Projects = () => {
  return (
    <div className="m-16 flex flex-col ">
      <Tabs />
      <Board
        tag="love"
        img={"https://via.placeholder.com/720x360"}
        header="recent project"
      />
      <BoardContainer>
        {data.map((el) => {
          return (
            <Board
              img={el.img}
              header={el.header}
              tag={el.tag}
              style="md:w-1/2 sm:w-full "
            />
          );
        })}
      </BoardContainer>
    </div>
  );
};

export default Projects;
