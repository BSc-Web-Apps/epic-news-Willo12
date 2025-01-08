import { prisma } from '~/utils/db.server.ts'
import { NavLink, Outlet, useLoaderData } from '@remix-run/react'
import { cn } from '#app/utils/misc.js'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { requireUserWithRole } from '~/utils/permissions.server.js'
import { Button } from '~/components/atoms/Button.js'
import { GeneralErrorBoundary } from '~/components/ErrorBoundary.js'

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserWithRole(request, 'admin')
  const allArticles = await prisma.article.findMany({
    select: { id: true, title: true, isPublished: true },
  })

  return json({ allArticles })
}


interface StatusPillProps {

  isPublished: boolean

}

export function StatusPill({ isPublished }: StatusPillProps) {

  return (

    <div

      className={`rounded-full px-2 py-1 text-xs font-semibold ${isPublished ? 'bg-green-700 text-white' : 'bg-red-700 text-white'}`}

    >

      {isPublished ? 'P' : 'D'}

    </div>

  )

}


export default function ArticlesRoute() {

  const { allArticles } = useLoaderData<typeof loader>()


  const navLinkDefaultClassName =

    'line-clamp-2 block rounded-l-full py-2 pl-8 pr-6 text-base lg:text-xl'

  return (

    <main className="container flex h-full min-h-[750px] px-0 py-12 md:px-8">

      <div className="grid w-full grid-cols-4 bg-muted pl-2 md:container md:rounded-3xl md:pr-0">

        <div className="relative col-span-1">

          <div className="absolute inset-0 flex flex-col">

            <ul className="overflow-y-auto overflow-x-hidden py-12">

              {allArticles.map(article => (

                <li

                  key={article.id}

                  className="flex items-center gap-2 p-1 pr-0"

                >

                  <StatusPill isPublished={article.isPublished} />

                  <NavLink

                    to={article.id}

                    preventScrollReset

                    prefetch="intent"

                    className={({ isActive }) =>

                      cn(

                        navLinkDefaultClassName,

                        isActive && 'w-full bg-accent',

                      )

                    }

                  >

                    {article.title}

                  </NavLink>

                </li>

              ))}

            </ul>

          </div>

        </div>

        <div className="relative col-span-3 bg-accent md:rounded-r-3xl">

          <Outlet />

        </div>

      </div>

    </main>

  )

}



export function ErrorBoundary() {

  return (

    <GeneralErrorBoundary

      statusHandlers={{

        403: () => (

          <div>

            <p>You are not allowed to access this page.</p>

            <p>

              Please login with an administrator account, or contact support.

            </p>

            <Button>

              <NavLink to="/login">Login</NavLink>

            </Button>

          </div>

        ),

      }}

    />

  )

}
