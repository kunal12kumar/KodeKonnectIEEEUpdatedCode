import React from "react";
import facebook from "../assets/icons8-facebook-40.png"
import instagram from "../assets/icons8-instagram-40.png";
import youtube from "../assets/icons8-youtube-40.png";
import linkedin from "../assets/icons8-linkedin-40.png";
import twitter from "../assets/icons8-twitter-40.png";
import { Link } from "react-router-dom";

export default function Footer() {

    return (

        <footer className="footer footer-center bg-base-200 mt-40 text-base-content rounded-lg text-2xl  border-[white] border-[1px] p-10">
            <nav className= " justify-center items-center flex flex-col sm:flex-row gap-4">
                <Link to={'/aboutpage'} className="text-[yellow] hover:text-[blue]">About</Link>
                <Link to={'/timeline'} className="text-[yellow] hover:text-[blue]">Timeline</Link>
                <Link to={'/registrationinstruction'} className="text-[yellow] hover:text-[blue]">Instructions</Link>
                <Link to={'/problemstatements'} className="text-[yellow] hover:text-[blue]">Problem Statement</Link>
                
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    
                    <a href="https://www.instagram.com/ieee_rgipt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"><img src={instagram} className=""></img></a>
                   
                    <a href="https://www.linkedin.com/company/ieeergipt/posts/?feedView=all"><img src={linkedin} className=""></img></a>
                    
                </div>
            </nav>
            <aside>
                <p className="text-[yellow]">Copyright © {new Date().getFullYear()} -   IEEE-RGIPT SB</p>
            </aside>
        </footer>
    )
}