import { createContext, useEffect, useState } from "react"
import { fakeFetch } from "../api/fakeFetch"

export const BookContext = createContext()

function BookProvider({ children }) {
  const [books, getBooks] = useState([])
  const [user, getUser] = useState([])

  const fetchUser = async () => {
    try {
      const response = await fakeFetch('https://example.com/api/books')
      getBooks(response.data.books)
      getUser(response.data.user)
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
    users: { user, getUser }
  }

  return (
    <BookContext.Provider value={contextValues}>
      {children}
    </BookContext.Provider>
  )

}

export default BookProvider