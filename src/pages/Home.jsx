import { useContext } from "react"
import { BookContext } from "../components/BooksProvider"

function Home() {
  const { book } = useContext(BookContext)
  const { books } = book

  console.log(books)

  return (
    <div className="home">
      <div className="title">
        All Books
      </div>
      <div className="content">
        <div className="book-list">
          {
            books.map((item, index) => {
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
                    {item.read === true ? (<button>Mark as read</button>) : (<button disabled>Already Read</button>)}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home