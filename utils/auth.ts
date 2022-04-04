var User =require('../models/User');
import dbConnect from './mongodb'

dbConnect();
async function Auth(username: string, password: string){
    const query = await User.findOne({uname: username});
    //if(query){}
    console.log(query);
    return query;
}


export default Auth;