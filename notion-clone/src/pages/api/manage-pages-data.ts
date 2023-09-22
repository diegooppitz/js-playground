import { NextApiRequest, NextApiResponse } from 'next';

interface TextAreaTypes {
  id: string;
  markdownText: string | null;
}

interface ServerTextArea {
  pageId: string;
  textAreas: TextAreaTypes[];
}

let serverTextAreas: ServerTextArea;
let pages: ServerTextArea[] = [{
  "pageId": 'page-353',
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
}]

export default function managePagesData(req: NextApiRequest, res: NextApiResponse) {
  const pageData = [
    {
      "pageId": 'page-353',
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
    },
    {
      "pageId": 'page-804',
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

  if (req.method === 'POST') {
    try {
      pages = req.body;

      res.status(200).json(serverTextAreas);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } 
  else if (req.method === 'GET') {
    try {
      const { pageId } = req.query;

      const responseData = pageData.find(item => item.pageId === pageId);
      responseData ? res.status(200).json(responseData) : res.status(204) ;
    } 
    catch(err) {
      res.status(500).json({ error: err });
    }
  } else res.status(405).json({ error: "not allowed method." });
};
