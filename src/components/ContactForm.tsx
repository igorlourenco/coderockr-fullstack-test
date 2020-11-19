import {
    Button,
    Center,
    FormControl,
    FormLabel as ChakraFormLabel,
    FormLabelProps,
    Icon,
    Input,
    InputProps,
    Textarea
} from '@chakra-ui/core'
import {MdSend} from 'react-icons/md'
import {FormEvent, useState} from 'react'

const FormLabel = (props: FormLabelProps) => (
    <ChakraFormLabel fontSize={[`18px`, `18px`, `20px`, `20px`]} {...props}>
        {props.children}
    </ChakraFormLabel>
)

const FormInput = (props: InputProps) => (
    <Input border={`1px`}
           borderColor={`#2D2D2D`}
           borderRadius={`4px`}
           {...props}
    />
)

const ContactForm = () => {

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
            body: JSON.stringify(
                {
                    name,
                    email,
                    phone,
                    post
                }
            )
        })

        setIsLoading(false)
        if (response.status === 201) {
            // TODO: add alert toast
            alert("dados enviados")
        }
    }

    return (
        <form onSubmit={handleSubmitContactForm}>
            <FormControl id={`name`} marginBottom={5}>
                <FormLabel>Name</FormLabel>
                <FormInput type={`text`}
                           value={name}
                           onChange={e => setName(e.target.value)}
                           placeholder={`Fill your full name`}/>
            </FormControl>
            <FormControl id={`email`} marginBottom={5}>
                <FormLabel>E-mail</FormLabel>
                <FormInput type={`email`}
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           placeholder={`Fill a valid email`}/>
            </FormControl>
            <FormControl id={`phone`} marginBottom={5}>
                <FormLabel>Phone</FormLabel>
                <FormInput type={`text`}
                           value={phone}
                           onChange={e => setPhone(e.target.value)}
                           placeholder={`Fill your phone`}/>
            </FormControl>
            <FormControl id={`post`} marginBottom={5}>
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