import { createContext, useEffect, useState } from "react"
import { fakeFetch } from "../api/fakeFetch"

export const BookContext = createContext()

function BookProvider({ children }) {

  const [books, getBooks] = useState([])
  const [favoriteBooks, setFavoriteBooks] = useState([])
  const [user, getUser] = useState({})

  const fetchUser = async () => {
    try {
      const response = await fakeFetch('https://example.com/api/books')
      getUser(response.data.user)
      getBooks(response.data.books)
    } catch (error) {
      if (error.status === 404)
        console.error(`${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const contextValues = {
    book: { books, getBooks },
    users: { user, getUser },
    favoriteBook: { favoriteBooks, setFavoriteBooks }
  }

  return (
    <BookContext.Provider value={contextValues}>
      {children}
    </BookContext.Provider>
  )

}

export default BookProvider