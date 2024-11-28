import { NavLink, Outlet } from "@remix-run/react"

export default function News() {
  return (
    <>
      <main className="flex flex-col py-24">
        <div className="container">
          <h1 className="text-h1">News</h1>
          <div className="flex space-x-4 py-4">
            {/* BUG: CSS doesn't work for some reason */}
            <NavLink
              to="technology"
              prefetch="intent"
              className={({ isActive }) =>
                `${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
              }
            >
              Technology
            </NavLink>
            <NavLink
              to="business"
              prefetch="intent"
              className={({ isActive }) =>
                `${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
              }
            >
              business
            </NavLink>
            <NavLink
              to="yeah"
              prefetch="intent"
              className={({ isActive }) =>
                `${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
              }
            >
              yeah
            </NavLink>

          </div>
          <Outlet />

        </div>
      </main>
    </>
  )
}
