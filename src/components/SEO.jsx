import { useEffect } from "react";

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Waterfront Cafe`;
    const meta = document.querySelector("meta[name='description']") || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", description);
    document.head.appendChild(meta);
  }, [title, description]);

  return null;
};

export default SEO;
