import mongoose, {Schema, Document} from 'mongoose';
import { string } from 'prop-types';
import { IUser } from './user';
import { IChapter } from './chapter';

export interface IStory extends Document{
  title:string;
  author:IUser['_id'];
  storyimg:Object;
  // comments:IComment['_id'];
  date:Date;
  body:string;
  chapters:Array<IChapter['_id']>;
  meta:Object;

}


const StorySchema = new Schema({
  title:  {type:string, required:true},
  author: {type: Schema.Types.ObjectId, required: true},
  storyimg :{ thumb:String, src:String},
  // comments: [{ body: String, date: Date, user:String }],
  date: { type: Date, default: Date.now },
  body: string,
  chapter: {type:Array},
  meta: {
    reads: Number,
    upvotes: Number,
    downvotes: Number,
    favs:  Number
  }
});

export default mongoose.model<IStory>('Story', StorySchema);