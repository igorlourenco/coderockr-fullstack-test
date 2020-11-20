import {Box} from '@chakra-ui/core'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Main from '../components/Blog/Main'
import {useState} from 'react'
import {Button} from '@chakra-ui/button'

const Index = () => {
    const [page, setPage] = useState(1)

    return (
        <Layout>
            <Box>
                <Header/>
                <Main page={page}/>
                <Box flex={`1`}>
                    <Button onClick={()=>setPage(page + 1)}>+1</Button>
                    <Button onClick={()=>setPage(page -1 )}>-1</Button>
                </Box>
            </Box>
        </Layout>
    )
}

export default Index
