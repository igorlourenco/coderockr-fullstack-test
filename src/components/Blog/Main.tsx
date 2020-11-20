import {useFetch} from '../../services/swr'
import Loading from '../message/Loading'
import {Heading} from "@chakra-ui/layout"
import MainProps from '../../interfaces/MainProps'

const Main = (props: MainProps) => {
    const {data} = useFetch(`api/article/get-all/?page=${props.page}`)

    if (!data) return <Loading/>

    return (
        <>
            {data.map(article => (
            <Heading key={article._id} marginY={12}>
                {article.author}
            </Heading>

            ))}
        </>
    )
}

export default Main