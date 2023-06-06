import { createContext, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
})

export default FavoritesContext

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (favoriteMeetup) => {
    // setUserFavorites(userFavorites.concat(favoriteMeetup))
    // setUserFavorites((prevUserFavorites) => {
    //   return prevUserFavorites.concat(favoriteMeetup)
    // })
    setUserFavorites((prevUserFavorites) => {
      return [...prevUserFavorites, favoriteMeetup]
    })
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    })
  }

  const itemIsFavoriteHandler = (meetupId) => {
    // (some) checking array if contain already that item, it will return boolean
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }

  const favoritesContext = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  }

  return (
    <FavoritesContext.Provider value={favoritesContext}>
      {children}
    </FavoritesContext.Provider>
  )
}
