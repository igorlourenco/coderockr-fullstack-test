import {useFetch} from '../../services/swr';
import Loading from '../message/Loading';
import {Heading} from "@chakra-ui/layout";

const Main = () => {
    const {data} = useFetch('api/article/get-all')

    if (!data) return <Loading/>

    return (
        data.map(article => (
            <Heading marginY={12}>
                {article.title}
            </Heading>
        ))
    )
}

export default Main