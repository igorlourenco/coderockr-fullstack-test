import { useRouter } from 'next/router'
import {useFetch} from '../../services/swr'
import Loading from '../../components/message/Loading'
import {Flex, Heading, Icon, Image, Text} from '@chakra-ui/core'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import {dateFormatter} from '../../util'

const Article = () => {
    const stringToHtmlParser = new DOMParser()
    
    const router = useRouter()
    const { article } = router.query

    const {data} = useFetch(`/api/article/find-one/?article=${article}`)

    if (!data) return <Loading/>

    return (
        <Layout>
            <Header/>
            <Flex direction={`column`} margin={[3, 3, 12, 12]} backgroundColor={`#FFFFFF`}>
                <Flex direction={`column`}>
                    <Flex direction={[`column`, `column`, `row`, `row`]} justifyContent={`space-around`}>
                        <Flex height={[`40vh`, `40vh`, `auto`, `auto`]}>
                            <Image objetcFit={`cover`} boxSize={`100%`} src={data.imageUrl}/>
                        </Flex>
                        <Flex direction={`column`} paddingX={4} paddingY={3} justifyContent={`center`}>
                            <Text marginBottom={[3, 3, 8, 8,]}>{dateFormatter(data.sentAt)}</Text>
                            <Text marginBottom={[3, 3, 8, 8,]}>{data.author}</Text>
                            <Heading color={`#F1A10A`}
                                     fontStyle={`normal`}
                                     fontWeight={`bold`}
                                     marginBottom={[3, 3, 8, 8]}
                                     fontSize={[`20px`, `22px`, `26px`, `26px`]}>{data.title}</Heading>
                        </Flex>
                    </Flex>
                    <Flex padding={[5, 5, 12, 12]}>
                        <Text>{data.articleContent}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Article