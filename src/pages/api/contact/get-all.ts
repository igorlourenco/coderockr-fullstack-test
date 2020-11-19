import {NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'

export default async (response: NowResponse) => {
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('contacts')

    const contacts =  await collection.find({}).toArray()

    return response.status(201).json(contacts)
}