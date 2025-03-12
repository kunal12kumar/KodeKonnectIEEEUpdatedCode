import React from "react";
import { motion } from "framer-motion";

export default function Faq() {
    // FAQ questions and answers
    const questions = [
        "What is Kode Kurrent?",
        "Who can participate?",
        "Do I need to be an expert programmer to participate?",
        "What is the team size?",
        "Can I participate alone?",
        "What should I bring to the hackathon?",
        "Can we start working on our project before the event?",
        "What technologies can we use?",
        "Are pre-built templates or open-source libraries allowed?",
        "How will the projects be judged?",
        "Will there be mentorship available?",
        "What happens if I need help during the event?",
        "Is it compulsory to have one female member in a team?",
        "Where can I find updates about the event?"
    ];


    const answers = [
        "Kode Kurrent is a 24-hour Software Hackathon VLSI Workshop designed to bring together developers, designers, and innovators to build creative solutions to real-world problems.",
        "The hackathon is open to all B.Tech/B.Eng pursuing students with an interest in coding, problem-solving, and technology.",
        "No! Marathon starts with small walks. The hackathon welcomes participants of all skill levels, from beginners to experts, from first years to final years. If you are a tech enthusiast, you are welcomed with open arms.",
        "Teams can have a minimum of 3 and a maximum of 4 members.",
        "No, individual participation is not allowed. You must form a team with at least 3 members.",
        "Bring your laptop, chargers, extension boards, and any necessary peripherals. For verification purposes, you must carry an Institute issued ID Card and Government Issued Aadhar Card/Pan Card or any other relevant document.",
        "Yes, you can start any time. But ensure you plan your solution perfectly.",
        "You are free to use any programming languages, frameworks, or tools, as long as your project aligns with the hackathon rules. Also, check the respective problem statement for further instructions.",
        "Yes, but you must disclose and credit any third-party code used.",
        "Projects will be evaluated based on:\n - Innovation & Creativity\n - Technical Implementation\n - Impact & Relevance\n - Presentation & Demo\n Also Note that the decision by Judges and Mentors will remain final. The organizers have the right to disqualify any team that violates the standard disciplinary rules.",
        "Yes, industry and academic experts and mentors will be available during the hackathon to guide participants.",
        "A dedicated support team and mentors will be available to assist you. You can reach out via the help desk or designated communication channels.",
        "No, it is not compulsory. But as we celebrate the women in tech initiative, female participation is encouraged.",
        "Follow our official social media pages for real-time updates."
    ];


    return (
        <motion.div
            className="min-h-screen about-content m-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
        // viewport={{ once: false, amount: 0.5 }} // Ensures animation plays each time the section enters the view
        >
            {/* Title Animation */}
            <motion.h1
                className="mx-auto justify-center flex font-agu text-5xl font-bold mb-10 mt-5 text-[#e73b38f4] highlight"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
            >
                Frequently Asked Questions
            </motion.h1>

            {/* FAQ Section Animation */}
            {questions.map((question, index) => (
                <motion.div
                    key={index}
                    className="collapse bg-black about-hover-effect hover:bg-[#473939] border-[2px] m-2 border-[white]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <input type="radio" name={`faq-${index}`} defaultChecked />

                    {/* Question Section */}
                    <motion.div
                        className="collapse-title text-xl font-roboto"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {question}
                    </motion.div>

                    {/* Answer Section */}
                    <motion.div
                        className="collapse-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <h1 className="border-[1px] about-hover-effect font-playfair border-[white] rounded-lg p-2 text-xl">
                            {answers[index]}
                        </h1>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
}
