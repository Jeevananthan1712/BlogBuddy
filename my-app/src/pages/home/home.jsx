import Header from "../../componets/header/header"
import Sidebar from "../../componets/sidebar/sidebar"
import Posts from "../../componets/posts/posts"
import "./home.css"

export default function home() {
  return (
    <>
      <Header/>
      <div className="home">
      <Posts />
      <Sidebar />
    </div>
    </>
    
  )
}
