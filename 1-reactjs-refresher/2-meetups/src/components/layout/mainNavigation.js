import { Link } from 'react-router-dom'

import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className="p-4 bg-stone-950 text-stone-50">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="font-bold text-lg">Meetups</h1>
        <ul className="flex gap-4">
          <li className="hover:text-stone-400 transition-colors">
            <Link to="/">All Mettups</Link>
          </li>
          <li className="hover:text-stone-400 transition-colors">
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li className="hover:text-stone-400 transition-colors relative">
            <Link to="/favorites">Favorites</Link>
            <span className="absolute block top-0 right-0 -translate-y-1 translate-x-2 rounded-[50%] w-4 h-4 text-xs text-center bg-cyan-500">
              {favoritesCtx.totalFavorites}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
