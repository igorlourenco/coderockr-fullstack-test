import {Flex, Spinner} from '@chakra-ui/core'

const Loading = () => (
    <Flex height={`50vh`} justifyContent={`center`} alignItems={`center`}>
        <Spinner color={`#FFFFFF`} size={`xl`}/>
    </Flex>
)

export default Loading