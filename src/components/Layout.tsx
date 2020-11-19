import {Flex, FlexProps} from '@chakra-ui/core'
import Header from './Header';

const Layout = (props: FlexProps) => (
    <Flex
        background={`linear-gradient(90deg, #F1A10A 0%, #342303 100%)`}
        height={`100%`}
        minHeight={`100vh`}
        width={`100%`}
        minWidth={`100vw`}
        direction={`column`}
        {...props}
    >
        <Header/>
        {props.children}
    </Flex>
)

export default Layout