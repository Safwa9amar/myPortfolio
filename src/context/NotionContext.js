import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NotionContext = createContext();

const NotionContextProvider = (props) => {
  const page_id = "397e6c8fda9c45e3b722650a6b5023a9";
  const baseURL = `https://notion-api.splitbee.io/v1/page/${page_id}`;
  const [blogs, setblog] = useState([]);
  useEffect(() => {
    getNotioPage();
  },[]);
  async function getNotioPage() {
    const data = await axios.get(baseURL).then((response) => response.data);
    setblog(data);
  }
  return (
    <NotionContext.Provider value={blogs}>
      {children}
    </NotionContext.Provider>
  );
};
export default NotionContextProvider;
