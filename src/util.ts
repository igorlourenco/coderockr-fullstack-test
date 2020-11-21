import text from "node-html-parser/dist/nodes/text";

export const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString("br-BR")
}

export const morePostsButtonIsDisabled = (currentPage: number, numberOfArticles: number, articlesPerPage: number) => {
    return (currentPage > (numberOfArticles/articlesPerPage))
}

export const errorToast = (toast: any) => {
    return toast({
        title: 'An error as occurred :(',
        description: 'An unexpected error as occurred. Please try again.',
        status: 'error',
        duration: 7000,
        isClosable: true
    })
}

export const successToast = (toast: any, title: string, message: string) => {
    return toast({
        title: title,
        description: message,
        status: 'success',
        duration: 7000,
        isClosable: true
    })
}

export const clearInputs = () => {
    Array.from(document.querySelectorAll("input")).forEach(
        input => input.value = ''
    )
    Array.from(document.querySelectorAll("textarea")).forEach(
        textarea => textarea.value = ''
    )
    return
}