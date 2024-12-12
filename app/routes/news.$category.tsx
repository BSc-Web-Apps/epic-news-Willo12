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

const WireframeBlock = () => {

  return (

    <div className="h-72 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />

  )

}

export default function NewsCategoryPage() {
  const { categoryTitle } = useLoaderData<typeof loader>()
  return (
    <div className="container py-16">
      <h2 className="text-h2">{categoryTitle}</h2>
      <div className="grid grid-cols-5 gap-6">
        <WireframeBlock />
        <WireframeBlock />
        <WireframeBlock />
        <WireframeBlock />
        <WireframeBlock />
      </div>
    </div>
  )
}
