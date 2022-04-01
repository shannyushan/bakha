import mongoose, {Schema, Document} from 'mongoose';
import { string } from 'prop-types';

export interface IChapter extends Document{
  title:string;
  body:string;
  chapterimg:Object;
  // comments:IComment['_id'];
  date: Date;
  meta:Object;

}


const ChapterSchema = new Schema({
  title:  {type:string, required:true},
  body: string,
  chapterimg :{ thumb:String, src:String},
  // comments: [{ body: String, date: Date, user:String }],
  date: { type: Date, default: Date.now },
  meta: {
    reads: Number,
    upvotes: Number,
    downvotes: Number,
    favs:  Number
  }
});
export default mongoose.model<IChapter>('Chapter', ChapterSchema);
