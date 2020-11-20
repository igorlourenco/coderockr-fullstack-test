export const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString("br-BR")
}

export const nextButtonIsDisabled = (currentPage: number, numberOfArticles: number, articlesPerPage: number) => {
    return (currentPage > (numberOfArticles/articlesPerPage))
}

export const previousButtonIsDisabled = (currentPage: number) => {
    return (currentPage <= 1)
}