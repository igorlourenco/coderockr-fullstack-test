import {Box} from '@chakra-ui/core'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Main from '../components/Blog/Main'

const Index = () => (
    <Layout>
        <Box>
            <Header/>
            <Main/>
        </Box>
    </Layout>
)

export default Index
