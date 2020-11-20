import {Flex} from '@chakra-ui/core'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Contacts from '../components/Contacts'

const AdminPage = () => {
    return (
        <Layout>
            <Header/>
            <Flex alignItems={`center`} justifyContent={`center`} padding={[1, 1, 10, 10]}>
                <Contacts/>
            </Flex>
        </Layout>
    )
}

export default AdminPage