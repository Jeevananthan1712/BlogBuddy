import "./single.css"
import Sidebar from "../../componets/sidebar/sidebar"
import Singlepost from "../../componets/singlePost/singlepost"

export default function single() {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  )
}
