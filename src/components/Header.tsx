import {
    Box, Flex, FlexProps, Heading, IconButton, Text, useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    TextProps,
} from '@chakra-ui/core'
import {HamburgerIcon} from '@chakra-ui/icons'
import {useState} from 'react'
import ContactForm from './ContactForm'

const MenuItem = (props: TextProps) => (
    <Text display={`block`} fontSize={[`24px`, `28px`, `32px`, `32px`]} marginX={5}
          fontWeight={`medium`} {...props}>
        {props.children}
    </Text>
)

const Header = (props: FlexProps) => {
    const [show, setShow] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure()

    const handleToggle = () => setShow(!show);

    return (
        <Flex
            as={`nav`}
            align={`center`}
            justify={`space-between`}
            wrap={`wrap`}
            padding={3}
            paddingX={[6, 6, 12, 12]}
            backgroundColor={`#2D2D2D`}
            color={`#FFFFFF`}
            {...props}
        >
            <Flex align={`center`}>
                <Heading fontSize={[`30px`, `32px`, `36px`, `36px`]} fontWeight={`bold`} fontStyle={`normal`}>
                    Rockr Blog
                </Heading>
            </Flex>

            <Box display={{base: "block", md: "none"}} onClick={handleToggle}>
                <IconButton
                    colorScheme={`#FFFFFF`}
                    aria-label="Menu"
                    icon={<HamburgerIcon/>}
                />
            </Box>

            <Box
                display={[show ? `block` : `none`, show ? `block` : `none`, `flex`, `flex`]}
                width={[`full`, `full`, `auto`, `auto`]}
                marginTop={[4, 4, 0, 0]}
                alignItems={`center`}
            >
                <MenuItem>Posts</MenuItem>
                <MenuItem onClick={onOpen}>Contact</MenuItem>
                <Modal isCentered isOpen={isOpen} onClose={onClose} size={`xl`}>
                    <ModalOverlay/>
                    <ModalContent borderRadius={0} padding={[3, 3, 12, 12]}>
                        <ModalHeader align={`center`}
                                     color={`#F1A10A`}
                                     fontStyle={`normal`}
                                     fontWeight={`bold`}
                                     fontSize={[`30px`, `32px`, `36px`, `36px`]}
                        >Contact</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                           <ContactForm/>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </Flex>
    )
}


export default Header