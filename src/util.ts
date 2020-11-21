export const dateFormatter = (date) => {
    return new Date(date).toLocaleDateString("br-BR")
}

export const morePostsButtonIsDisabled = (currentPage: number, numberOfArticles: number, articlesPerPage: number) => {
    return (currentPage > (numberOfArticles/articlesPerPage))
}