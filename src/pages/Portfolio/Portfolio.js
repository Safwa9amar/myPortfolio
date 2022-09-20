import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectContext";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import Notion from "../../components/Notion";

export default function Portfolio() {
  let location = Math.floor(useLocation().search.replace("?id=", ""));
  const Projects = useContext(ProjectsContext).filter(
    (Project) => Project.id === location
  )[0];

  return (
    <>
      <div className="w-full h-full flex justify-center border-2">
        <div className="w-5/6 mt-5 md:px-24 ">
          <motion.div
            className="m-3 flex  gap-4 items-stratch p-2 xl:text-1xl md:text-xl sm:text-sm xs:text-xs "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Carousel className="flex-col items-center justify-center h-full">
              <div>
                <img src={Projects?.img} alt={Projects?.header} />
                <p className="legend">Landing page</p>
              </div>
              <div>
                <img src={Projects?.img} alt={Projects?.header} />
                <p className="legend">About page</p>
              </div>
              <div>
                <img src={Projects?.img} alt={Projects?.header} />
                <p className="legend">Testimenial</p>
              </div>
            </Carousel>
          </motion.div>

          <Notion page_id={Projects.notion_id} />
        </div>
      </div>
    </>
  );
}
