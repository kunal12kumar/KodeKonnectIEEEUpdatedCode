// In this page we will write about the IEEE
import React from "react";
import RegistrationInstructions from "./RegistrationInstruction";
import "../App.css"
import pdfFile from "../assets/KodeKurrent_Brochure (1).pdf"


import earth from "../assets/earth-1756274_1920.jpg"


// declaring the function 

export default function About_Hackthon() {
   

    return (

        <section className="about-section fade-in" id="about">
            <div className=" min-h-screen about-content">

                {/* First Paragraph introducing hackathon */}

                <div className="">
                    <h2>
                        About <span className="text-[#ff6347] italic sm:font-bold text-5xl font-lato">HACKATHON</span>
                    </h2>
                    <h1 className="about-hover-effect p-3 rounded-lg border-[2px] border-[#cbb9b9] font-poppins text-2xl">
                        Welcome to IEEE Kode Kurrent - Season 1, hosted by IEEE RGIPT at the Rajiv Gandhi Institute of Petroleum Technology! This is where innovation meets adrenaline. Engage in a stimulating environment of coding, collaboration, and ingenuity as you address challenges within advanced technological domains.
                    </h1>
                </div>

                <div className="mx-auto text-8xl highlight m-10">Events</div>

                <div className="flex sm:flex-row flex-col mt-20 justify-center gap-24 ">
                    <div className=" about-hover-effect  rounded-2xl  flex flex-col justify-center  items-center bg-cover sm:w-[40%] h-[300px]"
                        style={{ backgroundImage: `url(${earth})` }}>
                        <div className="p-2 mb-8 font-lato text-2xl bg-[#ff6347] border-[1px] border-[white] rounded-2xl">24 hour Hackathon</div>
                        <div className="py-4  mx-2  font-poppins  border-[1px] border-[white] rounded-2xl text-[white]]"> A high-energy coding marathon where participants from diverse backgrounds come together to ideate, design, and develop solutions to real-world problems. Problem statements will be provided, challenging participants to unleash their technical prowess, creativity, and teamwork.</div>
                        <a href="https://forms.gle/PPGy4xurBZguvc129"><button className="btn m-2 sm:text-2xl bg-[#2020c6] btn-wide">Register</button></a>
                    </div>

                    <div className=" flex rounded-2xl about-hover-effect flex-col justify-center bg-cover items-center sm:w-[40%] h-[300px] " style={{ backgroundImage: `url(${earth})` }}>
                        <div className="p-2 mb-12 font-lato text-2xl bg-[#ff6347] border-[1px] border-[white] rounded-2xl">VLSI Workshop</div>
                        <div className="py-4  mx-2  font-poppins  border-[1px] border-[white] rounded-2xl"> Explore the intricate world of Very-Large-Scale Integration (VLSI) technology through a comprehensive two-day hands-on workshop tailored for electronics enthusiasts, providing practical insights into semiconductor design and fabrication.</div>

                        <a href="https://forms.gle/j77o4ycTZCMpCXhN9"><button className="btn m-2 bg-[#2020c6] sm:text-3xl btn-wide">Register</button></a>
                    </div>

                </div>
                <div className="flex flex-col items-center p-6 space-y-6">
                    <h1 className="highlight mt-20 sm:text-4xl">KodeKurrent_Brochure</h1>
                    {/* PDF Viewer */}
                    <embed
                        src={pdfFile}
                        type="application/pdf"
                        className="w-full max-w-4xl h-96 border rounded-lg shadow-lg"
                    />

                    {/* Download Button */}
                    <a
                        href={pdfFile}
                        download="custom-file-name.pdf"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-300"
                    >
                        Download PDF
                    </a>
                </div>

                <RegistrationInstructions></RegistrationInstructions>




            </div>
        </section>
    )
}
