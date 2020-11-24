import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'
import {ObjectId} from 'mongodb'

export default async (request: NowRequest, response: NowResponse) => {
    const {article} = request.query

    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('articles')

    const articles = await collection.findOne({_id: new ObjectId(article.toString())})

    return response.status(200).send(articles)
}