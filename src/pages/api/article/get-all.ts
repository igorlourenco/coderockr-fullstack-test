import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'

export default async (request: NowRequest, response: NowResponse) => {
    const {page, articlesPerPage} = request.query

    const currentPage = parseInt(page.toString())
    const numberOfArticlesPerPage = parseInt(articlesPerPage.toString())

    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('articles')

    const articles = await collection.find({})
        .skip(currentPage > 0 ? ((currentPage - 1) * numberOfArticlesPerPage) : 0)
        .limit(numberOfArticlesPerPage)
        .toArray()

    const numberOfArticles = await collection.countDocuments()

    return response.status(200).send({articles, numberOfArticles})
}