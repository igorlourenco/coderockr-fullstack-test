import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'

export default async (request: NowRequest, response: NowResponse) => {
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('contacts')

    const contacts =  await collection.find({}).sort({sentAt: -1}).toArray()

    return response.status(200).send(contacts)
}