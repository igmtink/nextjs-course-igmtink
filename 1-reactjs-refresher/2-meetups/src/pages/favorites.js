import MeetupList from '../components/meetups/meetupList'

import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context'

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext)

  let content

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <div className="fixed inset-0 flex justify-center items-center p-8 -z-10">
        <span className="text-2xl font-bold text-center">
          You got no Favorites yet. Start adding some?
        </span>
      </div>
    )
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase mb-8 text-center">
        My Favorites
      </h1>

      {content}
    </div>
  )
}

export default FavoritesPage
