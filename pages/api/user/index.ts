import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongodb";
var bcrypt = require("bcrypt");

var User = require("../../../models/User");

dbConnect();

type Data = {
  iserror: boolean;
  res: Object;
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    res
      .status(200)
      .json({ iserror: false, error: "", res: { msg: "GET reached" } });
  } else if (req.method == "POST") {
    let { fullname, username, password, email } = req.body;

    // Creating bcrypt password hash to store

    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    let user = new User({
      _id: new mongoose.Types.ObjectId(),
      fullname: fullname,
      uname: username,
      pass: password,
      email: email,
    });
    
    await user
      .save()
      .then((resp) => {
        res.status(200).json({
          iserror: false,
          error: "",
          res: {
            msg: `User ${resp.uname} Created Successfully!`,
            at: resp.joined,
          },
        });
      })
      .catch((err) => {
        res.status(200).json({
          iserror: true,
          error: err.message,
          res: { msg: "" },
        });
      });
  } else if (req.method == "DELETE") {
    res
      .status(200)
      .json({ iserror: false, error: "", res: { msg: "Delete reached" } });
  } else {
    res.status(400).json({
      error: "Only GET, POST, DELETE methods is allowed",
      iserror: true,
      res: {},
    });
  }
}
