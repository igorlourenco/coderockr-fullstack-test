import {Button, Center, Flex, Icon, Textarea, useToast} from '@chakra-ui/core'
import {MdSend} from 'react-icons/md'
import {FormControl, FormInput, FormLabel} from '../FormElements'
import {FormEvent, useState} from 'react'
import {clearInputs, errorToast, successToast} from "../../util";

const ArticleForm = () => {
    const toast = useToast()

    const [author, setAuthor] = useState<string>()
    const [authorEmail, setAuthorEmail] = useState<string>()
    const [title, setTitle] = useState<string>()
    const [articleContent, setArticleContent] = useState<string>()
    const [imageUrl, setImageUrl] = useState<string>()

    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmitContactForm(event: FormEvent) {
        event.preventDefault()

        setIsLoading(true)

        const response = await fetch('/api/article/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                author,
                authorEmail,
                title,
                articleContent,
                imageUrl
            })
        })

        setIsLoading(false)

        if (response.status === 201) {
            successToast(toast, 'Success!', 'Your article has been published. It is already available on blog\'s homepage.')
            clearInputs()
        } else {
            errorToast(toast)
        }
    }

    return (
        <Flex direction={`column`} margin={3} backgroundColor={`#FFFFFF`} justifyContent={`center`} padding={4} as={`form`}
              onSubmit={handleSubmitContactForm}>
            <FormControl id={`author`}>
                <FormLabel>Author Name</FormLabel>
                <FormInput type={`text`}
                           value={author}
                           onChange={e => setAuthor(e.target.value)}
                           placeholder={`Fill your full name`}/>
            </FormControl>
            <FormControl id={`authorEmail`}>
                <FormLabel>Author E-mail</FormLabel>
                <FormInput type={`email`}
                           value={authorEmail}
                           onChange={e => setAuthorEmail(e.target.value)}
                           placeholder={`Fill a valid email`}/>
            </FormControl>
            <FormControl id={`title`}>
                <FormLabel>Article Title</FormLabel>
                <FormInput type={`text`}
                           value={title}
                           onChange={e => setTitle(e.target.value)}
                           placeholder={`Fill the article title`}/>
            </FormControl>
            <FormControl id={`imageUrl`}>
                <FormLabel>Article Cover URL</FormLabel>
                <FormInput type={`url`}
                           value={imageUrl}
                           onChange={e => setImageUrl(e.target.value)}
                           placeholder={`Fill an image URL for article cover`}/>
            </FormControl>
            <FormControl id={`articleContent`}>
                <FormLabel>Article Content</FormLabel>
                <Textarea border={`1px`}
                          borderColor={`#2D2D2D`}
                          borderRadius={`4px`}
                          value={articleContent}
                          onChange={e => setArticleContent(e.target.value)}
                          placeholder={`Your article content`}/>
            </FormControl>
            <Center>
                <Button type={`submit`}
                        borderRadius={`4px`}
                        backgroundColor={`#2D2D2D`}
                        padding={5}
                        color={`#FFFFFF`}
                        isLoading={isLoading}>
                    <Icon as={MdSend} marginRight={4}/> Post
                </Button>
            </Center>
        </Flex>
    )
}

export default ArticleForm