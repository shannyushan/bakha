import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
var User = require("../../../models/User");
import dbConnect from "../../../utils/mongodb";

dbConnect();

type Data = {
  iserror: boolean;
  res: Object;
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    return res
      .status(200)
      .json({ iserror: false, error: "", res: { msg: "GET reached" } });
  } else if (req.method == "POST") {
    const { fullname, username, password, email } = req.body;
    let user = new User({
      _id: new mongoose.Types.ObjectId(),
      fullname: fullname,
      uname: username,
      pass: password,
      email: email,
    });
    user
      .save()
      .then((resp) => {
        return res
          .status(200)
          .json({ iserror: false, error: "", res: { msg: `User ${resp.uname} Created Successfully!`, at:resp.joined } });
      })
      .catch((err) => {
        return res
          .status(200)
          .json({
            iserror: true,
            error: err.message,
            res: { msg: "" },
          });
      });
  } else if (req.method == "DELETE") {
    return res
      .status(200)
      .json({ iserror: false, error: "", res: { msg: "Delete reached" } });
  } else {
    return res.status(400).json({
      error: "Only GET, POST, DELETE methods is allowed",
      iserror: true,
      res: {},
    });
  }
}
