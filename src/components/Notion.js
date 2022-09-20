import React from "react";
import { useState, useEffect, useContext } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-okaidia.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";


export default function Notion({ page_id }) {
  const baseURL = `https://notion-api.splitbee.io/v1/page/${page_id}`;

  const [Blog, setBlog] = useState("");
  useEffect(() => {
    getNotioPage();
    console.log(Blog);
  }, []);

  async function getNotioPage() {
    try {
      const response = await fetch(baseURL);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setBlog(result);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <NotionRenderer blockMap={Blog}  hideHeader={true} />
    </>
  );
}
