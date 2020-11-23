import {useRouter} from 'next/router'
import {useFetch} from '../../services/swr'
import Loading from '../../components/message/Loading'
import {Flex, Heading, Icon, Image, Text} from '@chakra-ui/core'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import {dateFormatter} from '../../util'

const Article = () => {

    const router = useRouter()
    const {article} = router.query

    const {data} = useFetch(`/api/article/find-one/?article=${article}`)

    if (!data) return <Loading/>

    return (
        <Layout>
            <Header/>
            <Flex alignItems={`center`} justifyContent={`center`}>
                <Flex direction={`column`} margin={[3, 3, 12, 12]} backgroundColor={`#FFFFFF`}
                      maxWidth={[`auto`, `auto`, `80vh`, `90vh`]}>
                    <Flex direction={`column`}>
                        <Flex direction={[`column`, `column`, `row`, `row`]}
                              maxHeight={[`auto`, `auto`, `40vh`, `40vh`]}>
                            <Flex height={[`40vh`, `40vh`, `auto`, `auto`]}>
                                <Image objectFit={`cover`} boxSize={`100%`} src={data.imageUrl} style={{objectPosition: '0 0'}}/>
                            </Flex>
                            <Flex direction={`column`} paddingX={4} paddingY={3} justifyContent={`center`}>
                                <Text marginBottom={[3, 3, 8, 8,]} color={`#032937`} fontSize={`sm`}>{dateFormatter(data.sentAt)}</Text>
                                <Text marginBottom={[3, 3, 8, 8,]} fontSize={`md`}>{data.author}</Text>
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
            </Flex>
        </Layout>
    )
}

export default Article
