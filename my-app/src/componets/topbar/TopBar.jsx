import React from "react";
import "./topbar.css"

export default function TopBar(){
    return(
        <div className="top">
            <div className="topleft">  
                <i  class="topIcon fa-solid fa-blog fa-bounce"></i>
                <i  class="topIcon fa-brands fa-facebook-square"></i>
                <i  class="topIcon fa-brands fa-instagram-square"></i>
                <i  class="topIcon fa-brands fa-twitter-square"></i>
            </div>
            <div className="topcentre">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">LogOut</li>
                </ul>
            </div>
            <div className="topright">
                <img className="topImg" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                <i class="topSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}