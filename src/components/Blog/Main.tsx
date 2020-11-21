import {useFetch} from '../../services/swr'
import Loading from '../message/Loading'
import {Button, ButtonProps, Flex, Heading, Icon} from '@chakra-ui/core'
import {useState} from 'react'
import {morePostsButtonIsDisabled} from '../../util'
import {MdKeyboardArrowDown} from 'react-icons/md'

const LoadMorePosts = (props: ButtonProps) => {
    return (
        <Flex paddingX={4} justifyContent={`center`} marginBottom={5}>
            <Button _hover={{backgroundColor: `transparent`}}
                    backgroundColor={`transparent`}
                    color={`#2D2D2D`}
                    display={`flex`}
                    justifyContent={`space-between`}
                    width={[`40vw`, `30vw`, `20vw`, `10vw`]}
                    {...props}
            >
                see more posts <Icon as={MdKeyboardArrowDown} color={`#000000`} marginLeft={3}/>
            </Button>
        </Flex>
    )
}

const Main = () => {
    const [page, setPage] = useState(1)
    const articlesPerPage = 9

    const {data} = useFetch(`api/article/get-all/?page=${page}&articlesPerPage=${articlesPerPage}`)

    if (!data) return <Loading/>

    const morePostsIsDisabled = morePostsButtonIsDisabled(page, data.numberOfArticles, articlesPerPage)

    return (
        <>
            {data.articles.map(article => (
            <Heading key={article._id} marginY={12}>
                {article.author}
            </Heading>
            ))}

            <LoadMorePosts isDisabled={morePostsIsDisabled} onClick={() => setPage(page + 1 )}/>
        </>
    )
}

export default Main