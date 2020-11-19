import useSWR from 'swr'

export function useFetch(url: string) {
    const { data, error } = useSWR(url, async (url) => {
        const response = await fetch(url)

        return await response.json()
    })

    return { data, error }
}