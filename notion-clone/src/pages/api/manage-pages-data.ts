import { NextApiRequest, NextApiResponse } from 'next';

interface TextAreaTypes {
  id: string;
  markdownText: string | null;
}

interface ServerTextArea {
  pageId: string;
  name: string
  textAreas: TextAreaTypes[];
}

let pages: ServerTextArea[] = [
  {
    "pageId": 'page-353',
    "name": "Page 353",
    "textAreas": [
      {
        "id": "item-0",
        "markdownText": "# title"
      },
      {
        "id": "item-1",
        "markdownText": "## title 2"
      },
      {
        "id": "item-2",
        "markdownText": null
      }
    ]
  }

]

export default function managePagesData(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const pageId = req?.body?.pageId;
      const name = req?.body?.name;
      const textAreas = req?.body?.textAreas;

      console.log("body", req.body)

      if (!pageId || !textAreas || !Array.isArray(textAreas)) return res.status(400).json({ error: "Invalid request body format." });
      if (pages.some(item => item.pageId === pageId)) return res.status(409).json({ error: "Page with the same pageId already exists." });

      pages.splice(1, 0, req.body);
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  else if (req.method === 'GET') {
    try {
      const pageId = req?.query?.pageId;
      console.log("pages", pages)

      if(!pageId && pages.length > 0) return res.status(200).json(pages);
      else if(pageId && pages.length > 0) {
        const responseData = pages.find(item => item.pageId === pageId);
        responseData ? res.status(200).json(responseData) : res.status(404).json({ error: "Page not found" });
      }
      else res.status(404).json({ error: "Page(s) not found" })
    }
    catch (err) {
      res.status(500).json({ error: err });
    }
  } else res.status(405).json({ error: "not allowed method." });
};
