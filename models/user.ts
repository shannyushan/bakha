import mongoose, { Schema, Document} from 'mongoose';

export interface IUser extends Document{
  fullname:String;
  uname:String;
  email:String;
  pass:String;
  joined:Date;
  socials:Object;
}

const UserSchema:Schema = new Schema({
  fullname: {type:String, required:true},
  uname: {type:String, required:true, unique:true},
  email: {type:String, required:true, unique:true},
  pass: {type:String, required:true},
  joined: { type: Date, default: Date.now },
  socials:{
    "in": String,
    "gh":String,
    "lk":String
  }
  
});


// export default mongoose.model<IUser>('User', UserSchema);
module.exports = mongoose.model<IUser>('User', UserSchema);