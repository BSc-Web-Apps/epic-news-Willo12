import { invariant } from '@epic-web/invariant'
import { toTitleCase } from '#app/utils/stringUtils.js'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export async function loader({ params }: LoaderFunctionArgs) {
  const { category } = params

  invariant(typeof category === 'string', 'Category not found')
  const categoryTitle = toTitleCase(category)
  return json({ categoryTitle })
}

export default function NewsCategoryPage() {
  const { categoryTitle } = useLoaderData<typeof loader>()
  return (
    <div className="container py-16">
      <h2 className="text-h2">{categoryTitle}</h2>
    </div>
  )
}
