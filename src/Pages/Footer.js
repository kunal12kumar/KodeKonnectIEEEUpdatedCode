import React from "react";
import facebook from "../assets/icons8-facebook-40.png"
import instagram from "../assets/icons8-instagram-40.png";
import youtube from "../assets/icons8-youtube-40.png";
import linkedin from "../assets/icons8-linkedin-40.png";
import twitter from "../assets/icons8-twitter-40.png";

export default function Footer() {

    return (

        <footer className="footer footer-center bg-base-200 text-base-content rounded-lg text-2xl  border-[white] border-[1px] p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href=""><img src={facebook} className=""></img></a>
                    <a href=""><img src={instagram} className=""></img></a>
                    <a href=""><img src={youtube} className=""></img></a>
                    <a href=""><img src={linkedin} className=""></img></a>
                    <a href=""><img src={twitter} className=""></img></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    )
}