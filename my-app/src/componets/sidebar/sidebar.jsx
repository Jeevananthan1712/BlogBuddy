import "./sidebar.css"

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">About me</span> 
          <img className="sidebarImg" src="https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="whh"></img>
          <p>Commodo excepteur exercitation qui in nisi enim. Ipsum reprehenderit consequat cupidatat magna Lorem. Sint laborum sit proident aliquip sint proident aute quis ea in occaecat culpa magna. Eu pariatur proident officia cillum tempor aliqua laborum sunt proident aliquip.</p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span> 
          <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
          </ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">About me</span> 
           <div className="sidebarSocial">
                <i  class="sidebarIcon fa-solid fa-blog"></i>
                <i  class="sidebarIcon fa-brands fa-facebook-square"></i>
                <i  class="sidebarIcon fa-brands fa-instagram-square"></i>
                <i  class="sidebarIcon fa-brands fa-twitter-square"></i>
           </div>
      </div>
    </div>
  )
}
