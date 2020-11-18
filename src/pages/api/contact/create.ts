import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from "../../../services/database";

export default async (request: NowRequest, response: NowResponse) => {

    let {name, email, phone, post} = request.body;

    email = email.toString().replace(/ /g,"");

    const db = await connectToDatabase(process.env.MONGODB_URI);
    const collection = db.collection('contacts');

    await collection.insertOne({
        name,
        email,
        phone,
        post,
        sentAt: new Date()
    });

    return response.status(201).json({ok: true});
}