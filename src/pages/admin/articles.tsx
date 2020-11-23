import Layout from '../../components/Layout'
import Header from '../../components/Header'
import ArticlesAdminPreview from '../../components/Blog/ArticlesAdminView'
import {Flex} from '@chakra-ui/core'

const Articles = () => {
    return (
        <Layout>
            <Header/>
            <Flex alignItems={`center`} justifyContent={`center`} padding={[1, 1, 10, 10]}>
                <ArticlesAdminPreview/>
            </Flex>
        </Layout>
    )
}

export default Articles