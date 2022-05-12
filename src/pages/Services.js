import arr from "../components/img/sercivesImages";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

let DataServices = [
  {
    id: 1,
    img: arr[0],
    header: "Website Design",
    body: `
    Are you looking for a Clean, Elegant, and modern Website UI Design, if so then you are on the right gig.
    Design is the first important thing for every business. I will create an attractive Landing page or multiple-page website design for your product or business that will increase your leads.
    `,
  },
  {
    id: 1,
    order: "second",
    img: arr[1],
    header: "Develop any web app",
    body: `
    I will develop any scale (small, medium, large) web application or do any web programming. Please contact me with your complete requirements. I can bring your idea / concept in to reality.
    ✪ My prime goal : "Help you to make your business success with my expertise & knowledge."
    `,
  },
  {
    id: 1,
    img: arr[2],
    header: "UI UX design",
    body: `
    Need a professional UI UX design for your app?
    Or do you have basic designs/ sketches and want someone to turn them into a digital masterpiece?
    Don't worry! You've got the right platform
  `,
  },
];

const Article = (props) => {
  return (
    <motion.article
      initial={{ translateY: "5rem" }}
      whileInView={{ translateY: "0rem" }}
      transition={{ delay: 1 / 3 }}
      viewport={{ once: true }}
    >
      <div className="md:flex gap-4 md:gap-0 m-5 p-5 shadow-md hover:shadow-lg md:scale-75 ">
        <div
          className={`order-${
            props.order === "second" ? "2" : "1"
          } bg-orange-200 md:border-y-2 flex justify-center relative before:hidden md:before:block before:absolute  before:w-11/12 before:left-1/2 before:-translate-x-1/2 before:h-[120%] before:bg-[#28293e] before:-top-4 before:-z-10`}
        >
          <img
            className="rounded-sm contrast-150 w-full "
            src={props.image}
            alt="article"
          />
        </div>
        <div className="order-1 flex-col  p-2 md:px-5 prose-sm md:prose-md lg:prose-lg">
          <h2 className="text-black font-bold">{props.header}</h2>
          <p className="text-gray-600 text-justify p-1">{props.body}</p>
          <Link
            to="/Contact"
            className="bg-orange-300 rounded-sm p-2 hover:bg-black hover:text-white transition "
          >
            {props.btn}
          </Link>
        </div>
        {props.children}
      </div>
    </motion.article>
  );
};

const Services = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1 / 3 }}
    viewport={{ once: true }}
  >
    <div className="p-0 font-sans ">
      {DataServices.map((service) => {
        return (
          <Article
            image={service.img}
            header={service.header}
            body={service.body}
            key={service.id}
            order={service.order}
            btn={`Contact Me`}
          />
        );
      })}
    </div>
    </motion.div>
  );
};

export default Services;
