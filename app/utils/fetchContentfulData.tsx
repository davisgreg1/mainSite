import { useState, useEffect } from "react";
import contentful from "contentful";

export const fetchContentfulData = async (
  CONTENTFUL_SPACE_ID: string,
  CONTENTFUL_DELIVERY_TOKEN: string,
) => {
  const client = contentful.createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_TOKEN,
  });
  try {
    const response = await client.getEntries().then(function (entries) {
      return entries.items.map((item) => {
        return {
          fields: item.fields,
          createdAt: item.sys.createdAt,
          updatedAt: item.sys.updatedAt ?? "",
          id: item.sys.id,
        };
      }) as any;
    });
    return response;
  } catch (error) {
    console.log(
      "GREG LOOK!  ~ file: index.tsx ~ line 87 ~ useEffect ~ error",
      error,
    );
  }
};
