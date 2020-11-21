import {NowRequest, NowResponse} from '@vercel/node'
import connectToDatabase from '../../../services/database'

export default async (request: NowRequest, response: NowResponse) => {
    const {page, articlesPerPage} = request.query

    const currentPage = parseInt(page.toString())
    const numberOfArticlesPerPage = parseInt(articlesPerPage.toString())

    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('articles')

    const articles = await collection.find({})
            .limit(numberOfArticlesPerPage * currentPage)
            .sort({sentAt: -1})
            .toArray()

    const numberOfArticles = await collection.countDocuments()

    return response.status(200).send({articles, numberOfArticles})
}