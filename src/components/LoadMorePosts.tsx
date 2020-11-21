import {Button, ButtonProps, Flex, Icon} from '@chakra-ui/core'
import {MdKeyboardArrowDown} from 'react-icons/md'

const LoadMorePosts = (props: ButtonProps) => {
    return (
        <Flex paddingX={4} justifyContent={`center`} marginBottom={5}>
            <Button _hover={{backgroundColor: `transparent`}}
                    backgroundColor={`transparent`}
                    color={`#2D2D2D`}
                    display={`flex`}
                    justifyContent={`space-between`}
                    width={[`40vw`, `30vw`, `20vw`, `10vw`]}
                    {...props}
            >
                see more posts <Icon as={MdKeyboardArrowDown} color={`#000000`} marginLeft={3}/>
            </Button>
        </Flex>
    )
}

export default LoadMorePosts