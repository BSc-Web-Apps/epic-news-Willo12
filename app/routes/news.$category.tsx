import { invariant } from '@epic-web/invariant'
import { toTitleCase } from '#app/utils/stringUtils.js'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { prisma } from '~/utils/db.server.ts'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'

export async function loader({ params }: LoaderFunctionArgs) {
  const { category } = params

  invariant(typeof category === 'string', 'Category not found')
  const categoryTitle = toTitleCase(category)

  const filteredArticles = await prisma.article.findMany({
    select: {
      id: true,
      title: true,
      category: { select: { name: true } },
      images: { select: { id: true } },
    },
  })

  return json({ categoryTitle, filteredArticles })
}

export default function NewsCategoryPage() {
  const { categoryTitle, filteredArticles } = useLoaderData<typeof loader>()
  return (
    <div className="container py-16">
      <h2 className="mb-8 text-h2">{categoryTitle}</h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {filteredArticles.map(article => (
          // TODO: fix category error
          <ArticleCard
            key={article.id}
            title={article.title}
            category={article.category?.name}
            imageId={article.images[0]?.id}
          />
        ))}
      </div>
    </div>
  )
}
