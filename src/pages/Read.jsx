import { useContext } from "react"
import { BookContext } from "../components/BooksProvider"

function Read() {
  const { book } = useContext(BookContext)
  const { books, getBooks } = book

  const markAsUnread = (itemID) => {
    getBooks(books.map(item => {
      if (item.id === itemID) {
        item.read = false
      }
      return item
    }))
  }


  return (
    <div className="read">
      <div className="title">
        Already Readed Books
      </div>
      <div className="content">
        <div className="book-list">
          {
            books.map((item, index) => {
              if (item.read === true) {
                return (
                  <div key={index} className="book-card">
                    <section className="book-image">
                      <img width={"200px"} height={"300px"} src={`${item.image}`} alt={`${item.title}`} />
                    </section>
                    <div className="book-content">
                      <strong>Title:</strong> {item.title}
                      <br />
                      <br />
                      <strong>Author:</strong> {item.author}
                      <br />
                      <br />
                      <button onClick={() => markAsUnread(item.id)}>Mark as Unread</button>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Read