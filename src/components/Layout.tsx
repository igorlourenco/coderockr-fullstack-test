import {Flex, FlexProps} from '@chakra-ui/core'

const Layout = (props: FlexProps) => (
    <Flex
        background={`linear-gradient(90deg, #F1A10A 0%, #342303 100%)`}
        direction={`column`}
        minHeight={`100vh`}
        {...props}
    >
        {props.children}
    </Flex>
)

export default Layout