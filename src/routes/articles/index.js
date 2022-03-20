import { RequestArticles } from "./getArticles.js"
import { SchemaArticles, FindID } from "./getArticlesID.js"
import { SchemaPost, SendArticle } from "./SendArticle.js"
import { DeleteArticle } from "./DeleteArticle.js"

export async function articlesroutes(app) {
  app.get('/articles', RequestArticles)
  app.get('/articles/:id', { schema: SchemaArticles }, FindID)
  app.post('/articles', { schema: SchemaPost }, SendArticle)
  app.delete('/articles/:id', { schema: SchemaArticles }, DeleteArticle)
}
