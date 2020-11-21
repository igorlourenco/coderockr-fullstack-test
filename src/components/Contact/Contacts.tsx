import {
    Accordion as ContactsAccordion,
    AccordionButton as ContactsButton,
    AccordionIcon as ContactsIcon,
    AccordionItem as ContactsItem,
    AccordionPanel as ContactsPanel,
    Box, Flex, FlexProps, Heading,
    Icon, IconProps,
    Text
} from '@chakra-ui/core'
import {MdAccessTime, MdLocalPhone, MdMail, MdMessage, MdPerson} from 'react-icons/md'
import {dateFormatter} from '../../util'
import {useFetch} from '../../services/swr'
import Loading from '../message/Loading'
import {IconType} from 'react-icons'

interface ContactIconProps extends IconProps {
    icon: IconType
}

const ContactsContainer = (props: FlexProps) => (
    <Flex paddingY={8} direction={`column`} alignItems={`center`} justifyContent={`center`}
          backgroundColor={`#FFFFFF`} width={[`100vw`, `85vw`, `70vw`, `70vw`]} {...props}>
    </Flex>
)

const ContactIcon = (props: ContactIconProps) => (
    <Icon as={props.icon} marginRight={1} {...props}/>
)

const Contacts = () => {
    const {data} = useFetch('/api/contact/get-all')

    if (!data) return <Loading/>

    return (
        <ContactsContainer>
            <Heading color={`#F1A10A`} marginBottom={5}>Contacts</Heading>
            <ContactsAccordion allowMultiple width={[`95%`, `95%`, `85%`, `85%`]}>
                {data.map(contact => (
                    <ContactsItem>
                        <ContactsButton>
                            <Box flex={`1`} textAlign={`left`}>
                                <ContactIcon icon={MdPerson}/> {contact.name}
                            </Box>
                            <Box flex={`1`} textAlign={`left`}>
                                <ContactIcon icon={MdAccessTime}/> {dateFormatter(contact.sentAt)}
                            </Box>
                            <ContactsIcon/>
                        </ContactsButton>
                        <ContactsPanel paddingY={4}>
                            <Text marginBottom={2}>
                                <ContactIcon icon={MdMail}/> {contact.email}
                            </Text>
                            <Text marginBottom={2}>
                                <ContactIcon icon={MdLocalPhone}/> {contact.phone}
                            </Text>
                            <Text marginBottom={2}>
                                <ContactIcon icon={MdMessage}/> {contact.post}
                            </Text>
                        </ContactsPanel>
                    </ContactsItem>
                ))}
            </ContactsAccordion>
        </ContactsContainer>
    )
}

export default Contacts