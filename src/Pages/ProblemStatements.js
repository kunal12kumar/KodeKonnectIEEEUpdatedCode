import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "./varients";
import { Link } from "react-router-dom";
import rabbit from "../assets/RABBITT.AI.png";
import roostoo from "../assets/ROOSTOO-removebg-preview.png";
import prodigal from "../assets/Participants Brochure (1).png";
export default function ProblemStatements() {

    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, margin: "-100px" });

    const problemstatements = [
        {
            img: rabbit,
            problemStatementId: "KodeX101",
            title: "AI Model for Handwritten Math Expression Recognition and Solving",
            internType: "Summer 2 Months Onsite Stipend based Intern at New Delhi, India.",
            internEligibility: "Top 3 Teams",
            imagetitle: "Rabbitt.Ai",
            websiteurl: "https://rabbitt.ai/",
            linedinurl: "https://www.linkedin.com/company/rabbitt-ai/",
            Name: "Rabbit.AI",
            Register:"https://docs.google.com/document/d/1k6JgqKwlx-orqC1O53dCUVJcDDPwy0WLMREKBe34B-M/edit?tab=t.0"
        },
        {
            img: roostoo,
            problemStatementId: "KodeX102",
            title: "AI Web3 Trading Bot Challenge",
            internType: "Summer 3 Months Remote Stipend based Internship.",
            internEligibility: "Top 3 Teams",
            imagetitle: "Roostoo",
            webkitURL: "https://roostoo.com/",
            linedinurl: "https://www.linkedin.com/company/roostoo/",
            Name: "Roostoo",
            Register:"https://docs.google.com/document/d/1KOpRer1G15WbrlaBLzZkADvyFtvCFHTG58_M3D4TICw/edit?tab=t.0"
        },
        {
            img: prodigal,
            problemStatementId: "KodeX103",
            title: "AI Voice Cloning Model Development Challenge",
            internType: "Summer 3 Months Remote Stipend based Internship.",
            internEligibility: "Teams Solving Problem Statement",
            imagetitle: "Prodigal.Ai",
            websiteurl: "https://prodigal.ai/",
            linedinurl: "https://www.linkedin.com/company/prodigal-ai/",
            Name: "Prodigal.AI",
            Register:"https://docs.google.com/document/d/1MdqYbet53bwX3mnpKuQAnJOW5uXBFn77jvWlwViGVyI/edit?tab=t.0"
        }
    ];









    return (
        <div className="about-section fade-in">
            <motion.section
                ref={ref}
                className="about-section fade-in mt-12"
                id="about"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1.5 }}
            >
                <div className="timeline-section fade-in rounded-lg">
                    <h1 className="highlight text-center text-6xl my-6">Problem Statement</h1>
                    <div className="mx-auto  sm:w-[80%] min-h-screen">



                        {problemstatements.map((item, index) => (
                            <motion.div
                                className=" text-xl font-roboto"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: false, amount: 0.5 }}
                            >

                                <div className="flex sm:flex-row flex-col gap-[20px]  my-[36px] about-hover-effect font-playfair  rounded-lg p-2 text-xl">
                                    <div>
                                        <img className=" ml-8     w-[200px] h-[200px]" src={item.img} alt={item.imagetitle} />
                                        <h1 className="text-center text-4xl text-[blue]">{item.Name}</h1>

                                    </div>
                                    <div>
                                        <h1>ProblemStatement Id :  {item.problemStatementId}</h1>
                                        <h1>problemstatement Title  : {item.title}</h1>
                                        <a className="mr-2 underline text-[yellow]  hover:text-[blue]" href={item.websiteurl}>website</a>
                                        <a className="ml-2 underline text-[yellow] hover:text-[blue]" href={item.linedinurl}>linkedin</a>
                                        <h1>Intern Opportunities Elligibility:{item.internEligibility}</h1>
                                        <h1>Intern Type: {item.internEligibility}</h1>
                                        <a className="underline text-[yellow] hover:text-[blue]" href={item.Register}> Problem Statement Link</a>
                                    </div>
                                </div>
                            </motion.div>

                        ))}


                    </div>

                </div>

            </motion.section>


        </div>
    )
}