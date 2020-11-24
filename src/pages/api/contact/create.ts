import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'
import Contact from '../../../interfaces/Contact'

export default async (request: NowRequest, response: NowResponse) => {

    const {name, email, phone, post}: Contact = request.body

    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('contacts')

    await collection.insertOne({
        name,
        email,
        phone,
        post,
        sentAt: new Date()
    })

    return response.status(201).json({ok: true})
}