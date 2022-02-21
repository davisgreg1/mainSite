import { useState, useEffect } from "react";
import contentful from "contentful";

export const fetchContentfulData = (
  CONTENTFUL_SPACE_ID: string,
  CONTENTFUL_DELIVERY_TOKEN: string,
) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_DELIVERY_TOKEN,
    });
    try {
      client.getEntries().then(function (entries) {
        const posts = entries.items.map((item) => {
          return {
            fields: item.fields,
            createdAt: item.sys.createdAt,
            updatedAt: item.sys.updatedAt ?? "",
            id: item.sys.id,
          };
        }) as any;
        setBlogs(posts);
      });
    } catch (error) {
      console.log(
        "GREG LOOK!  ~ file: index.tsx ~ line 87 ~ useEffect ~ error",
        error,
      );
    }
  }, []);

  return blogs;
};
