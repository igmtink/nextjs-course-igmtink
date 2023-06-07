import { createContext, useEffect, useState } from 'react'

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
})

export default FavoritesContext

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState(() => {
    // const myFavorites = localStorage.getItem('myFavorites')
    // return myFavorites ? JSON.parse(myFavorites) : []

    return JSON.parse(localStorage.getItem('myFavorites')) || []
  })

  useEffect(() => {
    localStorage.getItem('myFavorites', JSON.stringify(userFavorites))
  }, [userFavorites])

  const addFavoriteHandler = (favoriteMeetup) => {
    // setUserFavorites(userFavorites.concat(favoriteMeetup))
    // setUserFavorites((prevUserFavorites) => {
    //   return prevUserFavorites.concat(favoriteMeetup)
    // })
    // setUserFavorites((prevUserFavorites) => {
    //   return [...prevUserFavorites, favoriteMeetup]
    // })

    setUserFavorites((prevUserFavorites) => {
      const newFavorites = [...prevUserFavorites, favoriteMeetup]
      localStorage.setItem('myFavorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const removeFavoriteHandler = (meetupId) => {
    // setUserFavorites((prevUserFavorites) => {
    //   return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    // })

    setUserFavorites((prevUserFavorites) => {
      const newFavorites = prevUserFavorites.filter(
        (meetup) => meetup.id !== meetupId
      )
      localStorage.setItem('myFavorites', JSON.stringify(newFavorites))
      return newFavorites
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
