import {Button, Center, Icon, Textarea, useToast} from '@chakra-ui/core'
import {MdSend} from 'react-icons/md'
import {FormControl, FormInput, FormLabel} from '../FormElements'
import {FormEvent, useState} from 'react'
import {successToast, errorToast, clearInputs} from '../../util'

const ContactForm = () => {
    const toast = useToast()

    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [post, setPost] = useState<string>()

    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmitContactForm(event: FormEvent) {
        event.preventDefault()

        setIsLoading(true)

        const response = await fetch('/api/contact/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                post
            })
        })

        setIsLoading(false)

        if (response.status === 201) {
            successToast(toast, 'Success!', 'Your data has been sent. Soon we will contact you.')
            clearInputs()
        } else {
            errorToast(toast)
        }
    }

    return (
        <form onSubmit={handleSubmitContactForm}>
            <FormControl id={`name`}>
                <FormLabel>Name</FormLabel>
                <FormInput type={`text`}
                           value={name}
                           onChange={e => setName(e.target.value)}
                           placeholder={`Fill your full name`}/>
            </FormControl>
            <FormControl id={`email`}>
                <FormLabel>E-mail</FormLabel>
                <FormInput type={`email`}
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           placeholder={`Fill a valid email`}/>
            </FormControl>
            <FormControl id={`phone`}>
                <FormLabel>Phone</FormLabel>
                <FormInput type={`text`}
                           value={phone}
                           onChange={e => setPhone(e.target.value)}
                           placeholder={`Fill your phone`}/>
            </FormControl>
            <FormControl id={`post`}>
                <FormLabel>Post</FormLabel>
                <Textarea border={`1px`}
                          borderColor={`#2D2D2D`}
                          borderRadius={`4px`}
                          value={post}
                          onChange={e => setPost(e.target.value)}
                          placeholder={`Hello...`}/>
            </FormControl>
            <Center>
                <Button type={`submit`}
                        borderRadius={`4px`}
                        backgroundColor={`#2D2D2D`}
                        padding={5}
                        color={`#FFFFFF`}
                        isLoading={isLoading}>
                    <Icon as={MdSend} marginRight={4}/> Submit
                </Button>
            </Center>
        </form>
    )
}

export default ContactForm