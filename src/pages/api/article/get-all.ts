import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'

export default async (request: NowRequest, response: NowResponse) => {
    const articlesPerPage = 5
    const {page} = request.query

    const currentPage = parseInt(page.toString())

    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('articles')

    const articles = await collection.find({})
        .skip(currentPage > 0 ? ((currentPage - 1) * articlesPerPage) : 0)
        .limit(articlesPerPage)
        .toArray()

    return response.status(200).send(articles)
}