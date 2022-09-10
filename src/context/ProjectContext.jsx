import React, { createContext, useState } from "react";
import arr from "../components/img/projectImages";
export const ProjectsContext = createContext();

const ProjectsContextProvider = (props) => {
  const [Projects] = useState([
    {
      id: 1,
      header: "Astro Layers",
      date: "18 avril 2022",
      tag: "designs",
      text: "adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget ",
      img: arr[3],
    },
    {
      id: 2,
      header: "Custom Js Events",
      date: "14 avril 2022",
      tag: "designs",
      text: "Custom events in JavaScript make handling things like double click, long press, and touch gestures much easier, but they can also be used for cross app communication.",
      img: arr[4],
    },
    {
      id: 3,
      header: 'The "!" In js',
      date: "4avril 2022",
      tag: "Web",
      text: "You may think you are writing cleaner code using the bang operator, but in reality you are just opening yourself up to a plethora of bugs.",
      img: arr[5],
    },
    {
      id: 4,
      header: "Debounce ",
      date: "22 mars 2022",
      tag: "App",
      text: "Debounce and throttle are two of the best ways to improve the performance of your site and in this article I talk all about how to implement both options and what they do.",
      img: arr[2],
    },
  ]);

  return (
    <ProjectsContext.Provider value={Projects}>
      {props.children}
    </ProjectsContext.Provider>
  );
};
export default ProjectsContextProvider;
