import type { NextApiRequest, NextApiResponse } from "next";
// import user from "../../../models/user";
var User = require("../../../models/user");
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
    var us = new User({fullname: fullname, uname: username, pass: password, email: email});
    us.save();
    return res
    .status(200)
    .json({ iserror: false, error: "", res: { msg: "User Created" } });
    // User.create(
    //   { fullname: fullname, uname: username, pass: password, email: email },
    //   (err, resp) => {
    //     if (err)
    //       return res
    //         .status(200)
    //         .json({ iserror: true, error: err.message, res: {} });
    //     res.status(200).json({ iserror: false, error: "", res: resp });
    //   }
    // );
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
