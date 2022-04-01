import mongoose from 'mongoose';
import { string } from 'prop-types';
const { Schema } = mongoose;

const storiesSchema = new Schema({
  title:  {type:string, required:true},
  author: {type:string, required:true},
  body:   String,
  storyimg :{ thumb:String, src:String},
  comments: [{ body: String, date: Date, user:String }],
  date: { type: Date, default: Date.now },
  meta: {
    reads: Number,
    upvotes: Number,
    downvotes: Number,
    favs:  Number
  }
});
module.exports =storiesSchema;