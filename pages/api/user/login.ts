import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/mongodb";
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
    const {method} = req;
    switch(method){
        case 'POST':
            let { username, password} = req.body;
            const user = new User();
            const data = await User.findOne({uname:username});  
            console.log(data);  
            res.status(200).json({success:true, user:data});
            break;
        default:
            res.status(401).json({success: false, user:null});
            break;
    }
}
