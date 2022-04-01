import mongoose, { Schema, Document} from 'mongoose';
import { string } from 'prop-types';

export interface IUser extends Document{
  fullname:string;
  uname:string;
  email:string;
  pass:string;
  joinedDate:Date;
  socials:Object;
}

const UserSchema:Schema = new Schema({
  fullname: {type:string, required:true},
  uname: {type:string, required:true, unique:true},
  email: {type:string, required:true},
  pass: {type:string, required:true},
  joined: { type: Date, default: Date.now },
  socials:{
    "in": string,
    "gh":string,
    "lk":string
  }
  
});


export default mongoose.model<IUser>('User', UserSchema);