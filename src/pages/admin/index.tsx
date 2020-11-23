import {Button, Flex} from '@chakra-ui/core'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Contacts from '../../components/Contact/Contacts'
import Link from "next/link";

const AdminPage = () => {
    return (
        <Layout>
            <Header/>
            <Flex alignItems={`center`} justifyContent={`center`} padding={[1, 1, 10, 10]} direction={`column`}>
                <Flex direction={`row`} alignContent={`end`} justifyContent={`right`}>
                    <Link href={`/admin/articles`}>
                        <Button margin={3}>
                            See Articles
                        </Button>
                    </Link>
                    <Link href={`/admin/new-post`}>
                        <Button margin={3}>
                            New Article
                        </Button>
                    </Link>
                </Flex>
                <Contacts/>
            </Flex>
        </Layout>
    )
}

export default AdminPage