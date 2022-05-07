import React, { createContext, useState } from "react";
import arr from "../components/images";
export const BlogContext = createContext();


const BlogsContextProvider = (props) => {
  const [blogs] = useState([
    {
      id : 1,
      header: "How To Use CSS Layers",
      date: "18 avril 2022",
      tag: "css",
      text: "CSS layers change how the cascade works and it makes writing clean CSS code so much easier.",
      img: arr[3],
    },
    {
      id : 2,
      header: "How To Create Custom JavaScript Events",
      date: "14 avril 2022",
      tag: "JavaScript",
      text: "Custom events in JavaScript make handling things like double click, long press, and touch gestures much easier, but they can also be used for cross app communication.",
      img: arr[4],
    },
    {
      id : 3,
      header: 'Stop Using The "!" Bang Operator In JavaScript',
      date: "4avril 2022",
      tag: "JavaScript",
      text: "You may think you are writing cleaner code using the bang operator, but in reality you are just opening yourself up to a plethora of bugs.",
      img: arr[5],
    },
    {
      id : 4,
      header: "How To Implement Debounce And Throttle In JavaScript ",
      date: "22 mars 2022",
      tag: "JavaScript",
      text: "Debounce and throttle are two of the best ways to improve the performance of your site and in this article I talk all about how to implement both options and what they do.",
      img: arr[2],
    },
  ]);

  return (
    <BlogContext.Provider value={blogs}>{props.children}</BlogContext.Provider>
  );
};
export default BlogsContextProvider;
