import { Card } from '../layout/ui'

import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem({ id, image, title, address, description }) {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id)

  const toogleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id: id,
        image: image,
        title: title,
        address: address,
        description: description
      })
    }
  }

  return (
    <Card>
      <img className="w-full" src={image} alt={title} />
      <div className="p-4">
        <div className="mb-4">
          <h2 className="uppercase font-bold text-md">{title}</h2>
          <h3 className="mb-4 text-sm">{address}</h3>
          <p>{description}</p>
        </div>
        <div className="flex justify-end">
          <button
            className="px-3 py-2 bg-stone-950 hover:bg-stone-900 transition-colors text-stone-50 rounded-md"
            onClick={toogleFavoriteStatusHandler}
          >
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </Card>
  )
}

export default MeetupItem
