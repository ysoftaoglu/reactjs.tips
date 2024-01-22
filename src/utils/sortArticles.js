export const sortArticles = (articles) =>
  articles.sort((prevArticle, nextArticle) => new Date(nextArticle.data.date) - new Date(prevArticle.data.date))
