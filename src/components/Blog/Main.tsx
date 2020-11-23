import {useFetch} from '../../services/swr'
import Loading from '../message/Loading'
import {useState} from 'react'
import {morePostsButtonIsDisabled} from '../../util'
import Article from '../../interfaces/Article'
import ArticlePreview from './ArticlePreview'
import LoadMorePosts from '../LoadMorePosts'
import {Flex, Link, Heading} from '@chakra-ui/core'

const Main = () => {
    const [page, setPage] = useState(1)
    const articlesPerPage = 9

    const {data} = useFetch(`api/article/get-all/?page=${page}&articlesPerPage=${articlesPerPage}`)

    if (!data) return <Loading/>

    const morePostsIsDisabled = morePostsButtonIsDisabled(page, data.numberOfArticles, articlesPerPage)

    const flexIsReverse = (index) => index % 2 === 0 ? `row` : `row-reverse`

    return (
        <>
            {data.articles.map((article, index) => {
                if (index % 3 === 0) {
                    if (index < data.articles.length - 1) {
                        return (
                            <Flex direction={[`column`, `column`, `row`, `row`]} key={index} marginY={[0, 0, 5, 5]}>

                                <ArticlePreview article={article} width={`auto`} height={`100%`}
                                                direction={[`column`, `column`, flexIsReverse(index), flexIsReverse(index)]}/>

                                <ArticlePreview article={data.articles[index + 1]} width={`auto`} height={`100%`}
                                                direction={[`column`, `column`, flexIsReverse(index), flexIsReverse(index)]}/>
                            </Flex>
                        )
                    } else {
                        return (
                            <Flex key={index} width={`100%`} marginY={[0, 0, 5, 5]} right={0}>
                                <ArticlePreview height={`70%`} width={[`auto`, `auto`, `70%`, `70%`]} article={article}
                                                direction={[`column`, `column`, flexIsReverse(index), flexIsReverse(index)]}/>
                            </Flex>
                        )
                    }
                }

                if (index % 3 === 2) {
                    return (
                        <Flex key={index} width={`100%`} marginY={[0, 0, 5, 5]} right={0}>
                            <ArticlePreview height={`70%`} width={[`auto`, `auto`, `70%`, `70%`]} article={article}
                                            direction={[`column`, `column`, flexIsReverse(index), flexIsReverse(index)]}/>
                        </Flex>
                    )
                }
            })}

            <LoadMorePosts isDisabled={morePostsIsDisabled} onClick={() => setPage(page + 1)}/>
        </>
    )
}

export default Main