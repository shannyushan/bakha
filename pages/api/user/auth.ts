import type {NextApiRequest, NextApiResponse} from 'next'
import Auth from '../../../utils/auth';


// type Data ={
//     username:string,
//     password:string,
// }


export default function handler(req:NextApiRequest, res:NextApiResponse){

    const {query, method} = req;

    switch(method){
        case 'GET':
            res.status(400).json({msg: 'Get Method Not Allowed', status:'Fail'});
            break;
        case 'POST':
            const {username, password} = req.body;
            const result =Auth(username, password);
            res.status(200).json({result:result});
    }
    res.status(200)
}