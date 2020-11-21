import {Spinner} from '@chakra-ui/core'
import Layout from '../Layout'

const Loading = () => (
    <Layout width={`100px`} alignItems={`center`} justifyContent={`center`}>
        <Spinner color={`#FFFFFF`} size={`xl`}/>
    </Layout>
)

export default Loading