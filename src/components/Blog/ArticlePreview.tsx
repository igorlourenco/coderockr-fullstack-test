import {Flex, Heading, Icon, Image, Text} from '@chakra-ui/core'
import {CgChevronDoubleRight} from 'react-icons/cg'
import ArticlePreviewProps from '../../interfaces/ArticlePreviewProps'

const ArticlePreview = (props: ArticlePreviewProps) => {
    return (
        <Flex as="a" href={`article/${encodeURIComponent(props.article._id)}`} direction={[`column`, `column`, `row`, `row`]}
              margin={[3, 3, 0, 0]} backgroundColor={`#FFFFFF`} {...props}>
            <Flex height={[`40vh`, `40vh`, `auto`, `auto`]}>
                <Image objectFit={`cover`} boxSize={`100%`} src={props.article.imageUrl} style={{objectPosition: '0 0'}}/>
            </Flex>
            <Flex direction={`column`} paddingX={4} paddingY={3}  justifyContent={`center`}>
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