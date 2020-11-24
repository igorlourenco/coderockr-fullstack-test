import Layout from '../../components/Layout'
import ArticleForm from '../../components/Blog/ArticleForm'
import Header from '../../components/Header'

const NewPost = () => {
    return (
        <Layout>
            <Header/>
                <ArticleForm/>
        </Layout>
    )
}

export default NewPost