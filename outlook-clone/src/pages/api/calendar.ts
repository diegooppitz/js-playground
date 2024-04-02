import { NextApiRequest, NextApiResponse } from "next";
import { formattedDateInfo } from "@/src/utils/dates/get_infos";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
   formattedDateInfo;

  res.status(200).json({...formattedDateInfo});
};

export default handler;
