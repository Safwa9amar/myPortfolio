import images from "../components/images";

const Layout = () => {
  return (
    <>
      <div className=" flex justify-center align-middle">
        <img className="w-1/4 m-5" src={images[1]} alt="img" />
      </div>
    </>
  );
};

export default Layout;
