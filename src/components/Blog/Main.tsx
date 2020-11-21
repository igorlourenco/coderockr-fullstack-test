import {useFetch} from '../../services/swr'
import Loading from '../message/Loading'
import {useState} from 'react'
import {morePostsButtonIsDisabled} from '../../util'
import Article from '../../interfaces/Article'
import ArticlePreview from './ArticlePreview'
import LoadMorePosts from '../LoadMorePosts'
import {Flex} from "@chakra-ui/layout";

const Main = () => {
    const [page, setPage] = useState(1)
    const articlesPerPage = 9

    const {data} = useFetch(`api/article/get-all/?page=${page}&articlesPerPage=${articlesPerPage}`)

    if (!data) return <Loading/>

    const morePostsIsDisabled = morePostsButtonIsDisabled(page, data.numberOfArticles, articlesPerPage)

    return (
        <>
            {data.articles.map((article: Article, index) => {
                if (index % 3 == 0) {
                    return (
                        <ArticlePreview article={article} width={[`auto`, `auto`, `50%`, `50%`]}/>
                    )
                }

                if (index % 3 == 1) {
                    return (
                        <ArticlePreview article={article} width={[`auto`, `auto`, `50%`, `50%`]}/>
                    )
                }
            })}


            <LoadMorePosts isDisabled={morePostsIsDisabled} onClick={() => setPage(page + 1)}/>
        </>
    )
}

export default Main