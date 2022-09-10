import { useState } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

export default function Notion({page_id}) {

  const [blog, setblog] = useState("");
  fetch(`https://notion-api.splitbee.io/v1/page/${page_id}`)
    .then((res) => res.json())
    .then((data) => setblog(data));

  return (
    <div style={{ maxWidth: 768 }}>
      <NotionRenderer blockMap={blog} />
    </div>
  );
}
