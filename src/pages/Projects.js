const data = [
  {
    img: "https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp",
    header: "Marketing channels native advertising",
    tag: "design",
  },
  {
    img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg",
    header: "Sofa",
    tag: "markating",
  },
  {
    img: "https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg",
    header: "The most well known performance",
    tag: "Illustration",
  },
  {
    img: "https://www.datocms-assets.com/14946/1632993815-which-programming-language-should-i-learn-and-why-1080x675-edited.png?auto=format&w=1080",
    header: "Your business with a variety of digital",
    tag: "Branding",
  },
  {
    img: "https://stackify.com/wp-content/uploads/2017/12/Featured-881x441.jpg",
    header: "Outsource your digital marketing efforts",
    tag: "design",
  },
  {
    img: "https://kinsta.com/wp-content/uploads/2021/03/best-programming-language-to-learn.png",
    header: "Agency is a business you hire to outsource",
    tag: "Stories",
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
    <div
      className={`md:w-1/2 lg:w-1/3 sm:w-full flex flex-col justify-between gap-2 p-3 font-sans`}
    >
      <img
        className="rounded  brightness-100 shadow-xl"
        src={props.img}
        alt="card"
      />
      <div className="prose md:prose-sm xl:prose-md sm:prose-xs">
        {props.tag}
        <h2 className="text-black font-bold ">{props.header}</h2>
        <p>29 Oct, 2021</p>
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
      <BoardContainer>
        {data.map((el) => {
          return (
            <Board img={el.img} header={el.header} tag={el.tag} tailcss={""} />
          );
        })}
        <button className="bg-white px-4 my-2 rounded-md">load more</button>
      </BoardContainer>
    </div>
  );
};

export default Projects;
