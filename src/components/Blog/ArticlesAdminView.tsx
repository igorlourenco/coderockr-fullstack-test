import {
    Box, Flex, FlexProps, Heading,
    Icon, IconProps
} from '@chakra-ui/core'
import {MdAccessTime, MdBook,  MdPerson} from 'react-icons/md'
import {dateFormatter} from '../../util'
import {useFetch} from '../../services/swr'
import Loading from '../message/Loading'
import {IconType} from 'react-icons'

interface ArticleIconProps extends IconProps {
    icon: IconType
}

const ArticlesContainer = (props: FlexProps) => (
    <Flex paddingY={8} direction={`column`} alignItems={`center`} justifyContent={`center`}
          backgroundColor={`#FFFFFF`} width={[`100vw`, `85vw`, `70vw`, `70vw`]} {...props}>
    </Flex>
)

const ArticleIcon = (props: ArticleIconProps) => (
    <Icon as={props.icon} marginRight={1} {...props}/>
)

const ArticlesAdminPreview = () => {
    const {data} = useFetch(`/api/article/get-all/?page=&articlesPerPage=`)

    if (!data) return <Loading/>

    return (
        <ArticlesContainer>
            <Heading color={`#F1A10A`} marginBottom={5}>Articles</Heading>
            <Flex direction={`column`} width={[`95%`, `95%`, `85%`, `85%`]}>
                {data.articles.map(article => (
                    <Flex key={article._id} justifyContent={`space-between`} marginBottom={5} borderBottom={`1px`}
                          borderBottomColor={`#DDDDDD`}>
                        <Box flex={`2`} textAlign={`left`}>
                            <ArticleIcon icon={MdBook}/> {article.title}
                        </Box>
                        <Box flex={`1`} textAlign={`left`}>
                            <ArticleIcon icon={MdPerson}/> {article.author}
                        </Box>
                        <Box flex={`1`} textAlign={`left`}>
                            <ArticleIcon icon={MdAccessTime}/> {dateFormatter(article.sentAt)}
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </ArticlesContainer>
    )
}

export default ArticlesAdminPreview