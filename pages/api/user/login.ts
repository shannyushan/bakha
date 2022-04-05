import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongodb";
import Cookies from "jscookie";
var bcrypt = require("bcrypt");

var User = require("../../../models/User");

dbConnect();

type Data = {
  success: boolean;
  user: Object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      let { username, password } = req.body;
      const data = await User.findOne({ uname: username });
      if (data) {
        const correct = await bcrypt.compare(password, data.pass);
        if (correct) {
          res.status(200).json({
            success: true,
            user: {
              _id: data._id,
              fullname: data.fullname,
              uname: data.uname,
              email: data.email,
              joined: data.joined,
            },
          });
        } else {
          res.status(200).json({ success: false, user: null });
        }
      } else {
        res.status(200).json({ success: false, user: null });
      }
      break;
    default:
      res.status(401).json({ success: false, user: null });
      break;
  }
}
