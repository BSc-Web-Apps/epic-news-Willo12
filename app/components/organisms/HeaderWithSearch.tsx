import { useMatches } from '@remix-run/react'
import logo from '../../../public/svg/logoTest.svg'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'
export default function HeaderWithSearch() {
  const matches = useMatches()
  const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
  const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

  return (
    <header className="bg-primary/10 py-6 dark:bg-dark-primary/10">
      <nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
        <div>
          <img src={logo} alt="Jersey gaming news logo" className='w-16' />
        </div>
        <div className="ml-auto hidden max-w-sm flex-1 sm:block">
          {searchBar}
        </div>
        <div className="flex items-center gap-10">
          <LoginOrUserDropdown />
        </div>
        <div className="block w-full sm:hidden">{searchBar}</div>
      </nav>
    </header>
  )
}
