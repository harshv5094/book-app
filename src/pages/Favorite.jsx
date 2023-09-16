import { useContext } from "react"
import { BookContext } from "../components/BooksProvider"

function Favorite() {
  const { favoriteBook, book } = useContext(BookContext)
  const { books, getBooks } = book
  const { favoriteBooks, setFavoriteBooks } = favoriteBook

  const markAsRead = (itemID) => {
    getBooks(books.map(item => {
      if (item.id === itemID) {
        item.read = true
      }
      return item
    }))
  }

  const removeAsFavorite = (itemID) => {
    setFavoriteBooks(favoriteBooks.filter(item => item.id !== itemID))
  }

  return (
    <div className="favorite">
      <div className="title">
        Favorite books
      </div>

      <div className="content">
        <div className="book-list">
          {
            favoriteBooks.length === 0 ? (<div className="book-list">
              <h2>
                No Favorite Book
              </h2>
            </div>) : (
              favoriteBooks.map((item, index) => {
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
                      <button onClick={() => removeAsFavorite(item.id)}>Remove As Favorite</button>
                    </section>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Favorite