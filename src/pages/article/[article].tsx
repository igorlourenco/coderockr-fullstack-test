import { useRouter } from 'next/router'
import {useFetch} from "../../services/swr";
import Loading from "../../components/message/Loading";
import {useState} from "react";

const Article = () => {
    const router = useRouter()
    const { article } = router.query

    const {data} = useFetch(`/api/article/find-one/?article=${article}`)

    if (!data) return <Loading/>

    return <p>Post: {data.title}</p>
}

export default Article