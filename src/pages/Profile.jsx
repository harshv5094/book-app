import { useContext } from "react"
import { BookContext } from "../components/BooksProvider"

function Profile() {

  const { users } = useContext(BookContext)
  const { user } = users


  return (
    <div className="profile">
      <div className="title">
        Profile
      </div>
      <div className="content">
        <img width={'300px'} height={'200px'} src={`${user.img}`} alt="" />
        <br />
        <br />
        <strong>Name: </strong>{user.name}
        <br />
        <strong>Bio: </strong>{user.bio}
      </div>
    </div>
  )
}

export default Profile