const Tabs = function () {
  return (
    <>
      <div className="flex justify-center gap-10 m-4 text-gray-500">
        <button>
          Show all <sup>12</sup>
        </button>
        <button>
          Show all <sup>12</sup>
        </button>
        <button>
          Show all <sup>12</sup>
        </button>
        <button>
          Show all <sup>12</sup>
        </button>
      </div>
    </>
  );
};
const Board = function () {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="relative p-4">
          <img src="https://via.placeholder.com/720x360" />
          <div className="absolute bottom-4 left-10 m-4">
            <div className="rounded-xl bg-white text-center font-semibold w-1/2 text-gray-600">Tag</div>
            <h1 className="text-xl my-3 text-white font-bold">cardBoard</h1>
          </div>
        </div>
      </div>
    </>
  );
};
const Projects = () => {
  return (
    <>
      <Tabs />
      <Board />
    </>
  );
};

export default Projects;
