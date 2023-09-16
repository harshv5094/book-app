import { useContext } from "react"
import { BookContext } from "../components/BooksProvider"
// import { NavLink } from "react-router-dom"

function Home() {
  const { book, favoriteBook } = useContext(BookContext)
  const { books, getBooks } = book
  const { setFavoriteBooks } = favoriteBook

  const addToFavorite = (itemID) => {
    const bookToAdd = books.find(item => item.id === itemID)

    setFavoriteBooks((previousBooks) => {
      if (previousBooks.length !== 0) {
        return [...previousBooks, bookToAdd]
      }
      else {
        return [bookToAdd]
      }
    })
  }

  const markAsRead = (itemID) => {
    getBooks(books.map(item => {
      if (item.id === itemID) {
        item.read = true
      }
      return item
    }))
  }


  return (
    <div className="home">
      <div className="title">
        All Books
      </div>
      <div className="content">
        <section className="book-list">
          {
            books.map((item, index) => {
              return (
                <div key={index} className="book-card">
                  <section className="book-image">
                    <img width={"200px"} height={"300px"} src={`${item.image}`} alt={`${item.title}`} />
                  </section>
                  <section className="book-content">
                    <strong>Title:</strong> {item.title}
                    <br />
                    <br />
                    <strong>Author:</strong> {item.author}
                    <br />
                    <br />
                    {item.read === false ? (<button onClick={() => markAsRead(item.id)}>Mark as read</button>) : (<button disabled>Already Read</button>)}
                    <br />
                    <button onClick={() => addToFavorite(item.id)}>Add To Favorite</button>
                  </section>
                </div>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default Home