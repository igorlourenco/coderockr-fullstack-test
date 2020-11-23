import {Flex, Heading, Icon, Image, Text} from '@chakra-ui/core'
import {CgChevronDoubleRight} from 'react-icons/cg'
import ArticlePreviewProps from '../../interfaces/ArticlePreviewProps'

const ArticlePreview = (props: ArticlePreviewProps) => {
    return (
        <Flex direction={[`column`, `column`, `row`, `row`]}
              margin={[3, 3, 0, 0]} backgroundColor={`#FFFFFF`} {...props} justifyContent={`space-around`}>
            <Flex height={[`40vh`, `40vh`, `auto`, `auto`]}>
                <Image objectFit={`cover`} boxSize={`100%`} src={props.article.imageUrl}/>
            </Flex>
            <Flex direction={`column`} paddingX={4} paddingY={3}>
                <Text marginBottom={3}>{props.article.author}</Text>
                <Heading color={`#F1A10A`}
                         fontStyle={`normal`}
                         fontWeight={`bold`}
                         marginBottom={3}
                         fontSize={[`20px`, `22px`, `26px`, `26px`]}>{props.article.title}</Heading>
                <Text marginBottom={3}>{props.article.articleContent.substring(0, 130)}...</Text>
                <Flex justifyContent={`space-between`}>
                    <Text> </Text>
                    <Icon size={`25px`} as={CgChevronDoubleRight} marginRight={1}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ArticlePreview