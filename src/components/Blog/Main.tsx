import {useFetch} from '../../services/swr'
import Loading from '../message/Loading'
import {Button, Flex, Heading, Icon} from '@chakra-ui/core'
import {useState} from 'react'
import {nextButtonIsDisabled, previousButtonIsDisabled} from '../../util'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

const Main = () => {
    const [page, setPage] = useState(1)
    const articlesPerPage = 10

    const {data} = useFetch(`api/article/get-all/?page=${page}&articlesPerPage=${articlesPerPage}`)

    if (!data) return <Loading/>

    const previousIsDisabled = previousButtonIsDisabled(page)
    const nextIsDisabled = nextButtonIsDisabled(page, data.numberOfArticles, articlesPerPage)

    return (
        <>
            {data.articles.map(article => (
            <Heading key={article._id} marginY={12}>
                {article.author}
            </Heading>
            ))}

            <Flex paddingX={4} justifyContent={`space-between`} marginBottom={5}>
                <Button _hover={{backgroundColor: `transparent`}} backgroundColor={`transparent`} color={`#2D2D2D`} display={`flex`} justifyContent={`space-between`}  width={[`40vw`, `30vw`, `20vw`, `10vw`]} isDisabled={previousIsDisabled} onClick={() => setPage(page - 1)}>
                    <Icon as={MdKeyboardArrowLeft} color={`#000000`}/> previous
                </Button>
                <Button _hover={{backgroundColor: `transparent`}} backgroundColor={`transparent`} color={`#2D2D2D`} display={`flex`} justifyContent={`space-between`} width={[`40vw`, `30vw`, `20vw`, `10vw`]} isDisabled={nextIsDisabled} onClick={() => setPage(page + 1 )}>
                    next <Icon as={MdKeyboardArrowRight} color={`#000000`}/>
                </Button>
            </Flex>
        </>
    )
}

export default Main