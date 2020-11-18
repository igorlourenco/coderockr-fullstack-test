import {Box, Flex, FlexProps, Heading, IconButton, Text, TextProps} from '@chakra-ui/core'
import { useState } from 'react';
import {HamburgerIcon} from "@chakra-ui/icons";

const MenuItem = (props: TextProps) => (
    <Text display="block" fontSize={`32px`} fontWeight={`medium`} {...props}>
        {props.children}
    </Text>
)

const Header = (props: FlexProps) => {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex
            as={`nav`}
            align={`center`}
            justify={`space-between`}
            wrap={`wrap`}
            padding={`20px`}
            paddingX={[6, 6, 12, 12]}
            backgroundColor={`#2D2D2D`}
            color={`#FFFFFF`}
            {...props}
        >
            <Flex align={`center`}>
                <Heading fontSize={`36px`} fontWeight={`bold`} fontStyle={`normal`}>
                    Rockr Blog
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <IconButton
                    colorScheme={`#FFFFFF`}
                    aria-label="Menu"
                    icon={<HamburgerIcon />}
                />
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                mt={{ base: 4, md: 0 }}
                alignItems="center"
            >
                <MenuItem>Posts</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Box>
        </Flex>
    )
}


export default Header