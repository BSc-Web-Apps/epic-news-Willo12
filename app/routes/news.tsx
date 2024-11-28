import { NavLink, Outlet } from "@remix-run/react"

export default function News() {
  return (
    <>
      <main>
        <div>
          <h1>News</h1>
        </div>
        <div className="flex space-x-4 py-4">
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
        </div>
        <Outlet />
      </main>
    </>
  )
}
