import React, { useRef } from "react";
import RegistrationInstructions from "./RegistrationInstruction";
import { motion, useInView } from "framer-motion";
import "../App.css";
import pdfFile from "../assets/kode kurrent participants brochure.pdf";
import earth from "../assets/earth-1756274_1920.jpg";
import { fadeIn } from "./varients";

export default function About_Hackathon() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

    return (
        <section className="about-section fade-in" id="about" ref={ref}>
            <div className="min-h-screen about-content">
                {/* First Paragraph introducing hackathon */}
                <motion.div
                    variants={fadeIn("up", 0)}
                    initial={{ opacity: 0, y: 200 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut" }} // Optimized duration
                >
                    <h2>
                        About <span className="text-[#ff6347] italic sm:font-bold text-5xl font-lato">KodeKurrent</span>
                    </h2>
                    <h1 className="about-hover-effect p-3 rounded-lg border-[2px] border-[#cbb9b9] font-poppins text-2xl">
                        Welcome to IEEE Kode Kurrent - Season 1, hosted by IEEE RGIPT at the Rajiv Gandhi Institute of Petroleum Technology! This is where innovation meets adrenaline. Engage in a stimulating environment of coding, collaboration, and ingenuity as you address challenges within advanced technological domains.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }} // Smoother transition
                    className="mx-auto sm:text-8xl text-6xl highlight m-10"
                >
                    Events
                </motion.div>

                <div className="flex flex-col sm:flex-row mt-16 justify-center gap-28 sm:gap-24">
                    {[{
                        title: "24-hour Hackathon",
                        description: " A high-energy coding marathon where participants from diverse backgrounds come together to ideate, design, and develop solutions to real world problems. Problem statements will be provided, challenging participants to unleash their technical prowess, creativity, and teamwork.",
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSeMf7v6GkEAtDtayWPoXot2E39H5s-dv82ykWG8zUQCqmKyoA/viewform"
                    }, {
                        title: "VLSI Workshop",
                        description: "Explore the intricate world of Very-Large-Scale Integration (VLSI) technology through a comprehensive two-day hands-on workshop tailored for electronics enthusiasts, providing practical insights into semiconductor design and fabrication.",
                        link: "https://docs.google.com/forms/d/e/1FAIpQLSeMf7v6GkEAtDtayWPoXot2E39H5s-dv82ykWG8zUQCqmKyoA/viewform"
                    }].map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 250 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.2, delay: index * 0.5, ease: "easeOut" }} // Delayed appearance
                            className="sm:about-hover-effect about-hover-effect rounded-2xl flex flex-col justify-center items-center bg-cover sm:w-[40%] h-[300px]"
                        // style={{ backgroundImage: `url(${earth})` }}
                        >
                            <div className="p-2 mb-8 sm:mt-2 font-lato sm:text-2xl text-[20px] bg-[#ff6347] border-[1px] border-[white] rounded-2xl">
                                {event.title}
                            </div>
                            <div className="py-4 mx-2 font-poppins h-[240px] border-[1px] sm:text-[16px] text-14px border-[white] rounded-2xl text-white">
                                {event.description}
                            </div>
                            <a href={event.link}>
                                <button className="btn text-white m-2 sm:text-2xl bg-[#2020c6] btn-wide">
                                    Register
                                </button>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.8, ease: "easeOut" }} // Slightly longer for emphasis
                    className="flex flex-col items-center p-6 space-y-6"
                >
                    <h1 className="highlight mt-20 text-2xl sm:text-4xl">KodeKurrent_Brochure</h1>
                    <embed
                        src={pdfFile}
                        type="application/pdf"
                        className="w-[68%] h-[350px] sm:min-h-screen border rounded-lg shadow-lg"
                    />
                    <a
                        href={pdfFile}
                        download="KodeKurrent_Brochure.pdf"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-300"
                    >
                        Download PDF
                    </a>
                </motion.div>

                <RegistrationInstructions />
            </div>
        </section>
    );
}
