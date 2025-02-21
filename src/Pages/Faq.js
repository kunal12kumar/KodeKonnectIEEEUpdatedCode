import React from "react";
import { motion } from "framer-motion";

export default function Faq() {
    // FAQ questions and answers
    const questions = [
        "Who can participate in the event?",
        "How many max participants are allowed in a team?",
        "Do I need to pay a registration fee?",
        "Do I need prior knowledge of VLSI to attend the workshop?",
        "Is the VLSI workshop open to all participants?",
        "How do I register for the event?",
        "Will food and accommodation be provided?",
        "Is there a helpline for queries during the event?"
    ];

    const answers = [
        "The hackathon is open to all undergraduate students.",
        "A fixed number of 3 students are allowed.",
        "Yes, you have to pay a registration fee of Rs 399.",
        "Prior knowledge is required! The workshop is designed to accommodate beginners as well as those with some experience in VLSI.",
        "Yes, the workshop is open to all registered participants of the event.",
        "Visit the official event website and follow the registration process. Ensure you provide all required details accurately.",
        "Yes, food and accommodation will be arranged for participants attending the event in person. Details will be shared upon registration confirmation.",
        "You can contact the organizers should any queries come up."
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
