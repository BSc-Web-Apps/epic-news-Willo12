import MainHeadline from '#app/components/molecules/MainHeadline.js'
import ArticleCard from '#app/components/organisms/ArticleCard.js'
import MainHeadlines from '#app/components/organisms/MainHeadlines.js'
import { type MetaFunction } from '@remix-run/node'
import { json, Link, useLoaderData } from '@remix-run/react'
import { prisma } from '~/utils/db.server'


export const meta: MetaFunction = () => [{ title: 'Island Gamer' }]

export async function loader() {

  const allArticles = await prisma.article.findMany({

    where: { isPublished: true },
    select: {

      id: true,

      title: true,

      category: { select: { name: true } },

      images: { select: { id: true } },

    },

  })


  return json({ allArticles })

}
export default function Index() {
  const { allArticles } = useLoaderData<typeof loader>()
  return (
    <>
      <main className="mx-6 mt-2 lg:mx-20 lg:mt-5">
        <div className="container py-16">
          <h2 className="mb-8 text-h2 font-normal">Latest news</h2>
          <div className="grid grid-cols-2 gap-6">
            {allArticles.length > 0 ? (
              allArticles
                .filter((_, index) => index < 2)
                .map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    articleId={article.id}
                    category={article.category?.name}
                    imageId={article.images[0]?.id}
                    index={index} // Adjust index to align with filtered data
                  />
                ))
            ) : (
              <p>No articles found</p>
            )}

          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-12">
            {allArticles.length > 0 ? (
              allArticles
                .filter((_, index) => index > 2)
                .map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    articleId={article.id}
                    category={article.category?.name}
                    imageId={article.images[0]?.id}
                    index={index + 2} // Adjust index to align with filtered data
                  />
                ))
            ) : (
              <p>No articles found</p>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
