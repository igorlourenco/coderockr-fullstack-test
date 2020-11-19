import {Flex} from '@chakra-ui/core'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ContactList from '../components/ContactList'

const AdminPage = () => {
    return (
        <Layout>
            <Header/>
            <Flex alignItems={`center`} justifyContent={`center`} padding={[1, 1, 10, 10]}>
                <ContactList/>
            </Flex>
        </Layout>
    )
}

export default AdminPage