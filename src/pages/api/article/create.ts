import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'
import Article from '../../../interfaces/Article'

export default async (request: NowRequest, response: NowResponse) => {

    const {author, authorEmail, title, articleContent, imageUrl}: Article = request.body

    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('articles')

    await collection.insertOne({
        author,
        authorEmail,
        title,
        articleContent,
        imageUrl,
        sentAt: new Date()
    })

    return response.status(201).json({ok: true})
}